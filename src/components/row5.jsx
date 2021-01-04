import React, { Component } from "react";
import "./row1.css";

class Row5 extends Component {
  render() {
    return (
      <div className="main">
        <div className="blocks">
          <div id="block1">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM1"></img>
            </h5>
            <h1>Between the Buttons</h1>
            <h4>1967</h4>
          </div>
          <div id="block2">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM2"></img>
            </h5>
            <h1>Out of Our Heads</h1>
            <h4>1965</h4>
          </div>
          <div id="block3">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM3"></img>
            </h5>
            <h1>The Rolling Stones, Now!</h1>
            <h4>1965</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM4"></img>
            </h5>
            <h1>The Rolling stones No. 2</h1>
            <h4>1965</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM5"></img>
            </h5>
            <h1>12 X 5</h1>
            <h4>1964</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Row5;
