import React, { Component, Fragment } from "react";
import { ThemeProviderWrapper, SearchBox } from "./../index";

export default class SearchBoxExample extends Component {
  state = {
    data: [],
    matchedData: [],
    findCount: 0,
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });

    fetch("https://mock-server-wkquwnltbi.now.sh/articles")
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.items,
          loading: false,
        });
      });
  }

  handleChange = (matchedData, searchString, findCount) => {
    this.setState({ ...this.state, matchedData, findCount });
  };

  render() {
    return (
      <ThemeProviderWrapper>
        <Fragment>
          <SearchBox
            data={this.state.data}
            onUpdate={this.handleChange}
            placeholder="Search for a string..."
            dataUpdater="https://mock-server-wkquwnltbi.now.sh/articles?q=%s"
            loading={this.state.loading}
          />
          <div style={{ maxHeight: "300px", overflowX: "scroll" }}>
            Find: {this.state.findCount}
            <br />
            ---
            <br />
            {this.state.matchedData.map(item => (
              <Fragment key={item.id}>
                <br />
                {item.id}. {item.title} {item.text}
                <br />
                ---
              </Fragment>
            ))}
          </div>
        </Fragment>
      </ThemeProviderWrapper>
    );
  }
}
