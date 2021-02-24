import React, { Component } from "react";
import Table from "./components/Table";
import Header from "./components/Header/Header";
import SearchFrom from "./components/SearchForm/SearchForm";
import API from "./utils/API";

const shouldBeInFilter = ({ name: { first, last } }, search) => {
  if (
    first.toLowerCase().includes(search.toLowerCase()) ||
    last.toLowerCase().includes(search.toLowerCase())
  ) {
    return true;
  } else {
    return false;
  }
};

class App extends Component {
  state = {
    result: [],
    filteredResults: [],
    search: "",
  };

  componentDidMount() {
    this.searchUsers("");
  }

  searchUsers = (query) => [
    API.search(query)
      .then((res) =>
        this.setState({
          result: res.data.results,
          filteredResults: res.data.results,
        })
      )
      .catch((err) => console.log(err))
];

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const { result } = this.state;

    const filteredResults = result.filter((row) =>
      shouldBeInFilter(row, value)
    );
    this.setState({ [name]: value, filteredResults });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { result, search } = this.state;
    const filteredResults = result.filter((row) =>
      shouldBeInFilter(row, search)
    );
    this.setState({
      filteredResults,
    });
  };

  render() {
    console.log(this.state.result);
    return (
      <main>
        <Header />
        <SearchFrom
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.state.filteredResults.length ? (
          <Table rows={this.state.filteredResults} />
        ) : (
          <h3>Nothing to See Here!</h3>
        )}
      </main>
    );
  }
}

export default App;
