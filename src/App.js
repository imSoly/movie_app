import React from "react";
import axios from "axios";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  render() {
    const isLoading = this.state.isLoading;
    console.log(isLoading);
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
