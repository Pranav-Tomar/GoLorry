import Row1 from "./components/row1";
import Row2 from "./components/row2";
import Row3 from "./components/row3";
import Row4 from "./components/row4";
import Row5 from "./components/row5";
import Row6 from "./components/row6";
import Title from "./components/title";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
        <Row6 />
      </div>
    );
  }
}

export default App;
