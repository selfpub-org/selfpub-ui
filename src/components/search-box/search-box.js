import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import { isFunction, isPromise } from "../../utils/utils";
import { Input } from "./../index";

export default class SearchBox extends Component {
  static defaultProps = {
    data: [],
    search: "",
    disabled: false,
    debounceTime: 800,
    minimalTextLength: 3,
    placeholder: "Search...",
  };

  static propTypes = {
    /** prepared data for first view */
    data: PropTypes.array,
    /** callback called on update matched data [Must be Promise] */
    onUpdate: PropTypes.func.isRequired,
    /** placeholder in search box */
    placeholder: PropTypes.string,
    /** loading flag */
    loading: PropTypes.bool,
    /** url for search with mark search word (%s) or function updater return array matched data*/
    dataUpdater: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
      .isRequired,
    /** debounced timeout */
    debounceTime: PropTypes.number,
  };

  state = {
    loading: false,
    data: [],
    matchedData: [],
  };

  constructor(props) {
    super(props);

    this.minimalValue = props.minimalTextLength;
    this.inputName = `search-input-${~~(Math.random() * 10000)}`;
  }

  componentWillMount() {
    const { data, search } = this.props;

    this.setState({ data, search });
  }

  reset = () => {
    const { onUpdate } = this.props;
    const { data } = this.state;

    this.setState({ data, search: "", loading: false }, () => {
      const { search } = this.state;

      onUpdate(data, search);
      this.getMatchedData(search);
    });
  };

  updateSearchString = search => {
    if (search.length > 0) {
      this.setState({ search });
    } else {
      this.reset();
    }
  };

  getMatchedData = search => {
    const { dataUpdater } = this.props;

    if (!dataUpdater) {
      return;
    }

    if (typeof dataUpdater === "string") {
      this.getMatchesByUrl(search);
    } else if (isFunction(dataUpdater) && isPromise(dataUpdater)) {
      this.getMatchesByFunc(search);
    } else {
      this.setState({ loading: false });
    }
  };

  getMatchesByFunc = (func, search) => {
    const { matchedData } = this.state;

    this.setState({ loading: true }, () =>
      func(search, matchedData, matchedData.length)
        .then((data, search) => {
          this.setState({ data, search, loading: false });
        })
        .catch(error => {
          this.setState({ loading: false });

          console.warn(error);
        }),
    );
  };

  getMatchesByUrl = search => {
    const { dataUpdater, onUpdate } = this.props;
    const url = dataUpdater.replace(/%s/g, search).replace(/ /g, "+");

    if (!search) {
      return;
    }

    this.setState({ loading: true });

    fetch(url, {
      credentials: "same-origin",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          matchedData: data,
          loading: false,
        });

        onUpdate(data, search, data.length);
      })
      .catch(error => {
        this.setState({ loading: false });
        console.warn(error);
      });
  };

  onType = (event, value) => {
    this.updateSearchString(value);

    this.debouncedOnType(value, this.getMatchedData);
  };

  debouncedOnType = (search, func) => {
    const { debounceTime } = this.props;

    this.debouncedEvent && this.debouncedEvent.cancel();

    this.debouncedEvent = debounce(func, debounceTime, {
      leading: false,
      trailing: true,
    });

    if (search.length >= this.minimalValue) {
      this.debouncedEvent(search);
    }
  };

  render() {
    const { search, disabled, loading } = this.state;
    const { placeholder } = this.props;

    return (
      <Fragment>
        <Input
          id={this.id}
          disabled={disabled}
          loading={loading}
          name={this.inputName}
          onChange={this.onType}
          placeholder={placeholder}
          size="small"
          theme="default"
          type="text"
          value={search}
          clearAction={::this.reset}
          clearIcon
        />
      </Fragment>
    );
  }
}
