import React, { Component } from "react";
import "./row1.css";

class Row2 extends Component {
  render() {
    return (
      <div className="main">
        <div className="blocks">
          <div id="block1">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM1"></img>
            </h5>
            <h1>Exile on Main St.</h1>
            <h4>1972</h4>
          </div>
          <div id="block2">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM2"></img>
            </h5>
            <h1>Beggars Banquet</h1>
            <h4>1968</h4>
          </div>
          <div id="block3">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM3"></img>
            </h5>
            <h1>Aftermath</h1>
            <h4>1966</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM4"></img>
            </h5>
            <h1>Steel Wheels</h1>
            <h4>1989</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM5"></img>
            </h5>
            <h1>Tattoo You</h1>
            <h4>1981</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Row2;
