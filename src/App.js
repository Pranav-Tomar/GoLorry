import Row1 from "./components/row1";
import Row2 from "./components/row2";
import Row3 from "./components/row3";
import Row4 from "./components/row4";
import Title from "./components/title";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Row1 />
        <br></br>
        <br></br>
        <Row2 />
        <br></br>
        <br></br>
        <Row3 />
        <br></br>
        <br></br>
        <Row4 />
      </div>
    );
  }
}

export default App;
