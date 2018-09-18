import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { debounce } from "../../utils/utils";
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
    /** callback called on update matched data */
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
    loading: true,
    data: [],
    matchedData: [],
  };

  constructor(props) {
    super(props);

    this.minimalValue = props.minimalTextLength;
    this.inputName = `search-input-${~~(Math.random() * 10000)}`;
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { data, search } = nextProps;

    this.updateSearchString(search);
    this.setState({ ...this.state, data: data });
  }

  componentWillMount() {
    this.updateSearchString(this.props.search, () =>
      this.getMatchedData(this.props.search),
    );

    this.setState({ ...this.state, data: this.props.data, search: "" });
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

  updateSearchString = (search, cb = () => {}) => {
    this.setState({ ...this.state, search }, () => cb(search));
  };

  getMatchedData = search => {
    const { dataUpdater } = this.props;
    const { matchedData } = this.state;

    if (!dataUpdater) {
      return;
    }

    this.setState({
      ...this.state,
      loading: true,
    });

    if (typeof dataUpdater === "string") {
      this.getMatchesByUrl(search);
    } else if (typeof dataUpdater === "function") {
      dataUpdater(search, matchedData, matchedData.length);
    } else {
      this.setState({
        ...this.state,
        loading: false,
      });
    }
  };

  getMatchesByUrl = search => {
    const { dataUpdater, onUpdate } = this.props;
    const url = dataUpdater.replace(/%s/g, search).replace(/ /g, "+");

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...this.state,
          matchedData: data,
          loading: false,
        });

        onUpdate(data, search, data.length);
      });
  };

  onType = (event, value) => {
    if (value.length === 0) {
      this.reset();
    } else if (value.length < this.minimalValue) {
      this.updateSearchString(value);
    } else {
      this.updateSearchString(
        value,
        debounce(() => {
          this.getMatchedData(value);
        }, this.props.debounceTime),
      );
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
