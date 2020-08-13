import React from "react";
import "../App.css";

class Title extends React.Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1 className="title">Welcome to Weather App</h1>
        <p>Get the latest weather details</p>
      </div>
    );
  }
}

export default Title;
