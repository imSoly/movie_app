import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const isLoading = this.state.isLoading;
    console.log(isLoading);
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
