import React, { Component } from "react";
import "./row1.css";

class Row1 extends Component {
  render() {
    return (
      <div className="main">
        <div className="blocks">
          <div id="block1">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM1"></img>
            </h5>
            <h1>Sticky Fingers</h1>
            <h4>1971</h4>
          </div>
          <div id="block2">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM2"></img>
            </h5>
            <h1>Goats Head Soup</h1>
            <h4>1973</h4>
          </div>
          <div id="block3">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM3"></img>
            </h5>
            <h1>The Rolling Stones</h1>
            <h4>1964</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM4"></img>
            </h5>
            <h1>Let It Bleed</h1>
            <h4>1969</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM5"></img>
            </h5>
            <h1>Some Girls</h1>
            <h4>1978</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Row1;
