import React, { Component } from "react";
import "./row1.css";

class Row3 extends Component {
  render() {
    return (
      <div className="main">
        <div className="blocks">
          <div id="block1">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM1"></img>
            </h5>
            <h1>Black and Blue</h1>
            <h4>1976</h4>
          </div>
          <div id="block2">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM2"></img>
            </h5>
            <h1>Emotional Rescue</h1>
            <h4>1980</h4>
          </div>
          <div id="block3">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM3"></img>
            </h5>
            <h1>Their Satanic Maj. Req.</h1>
            <h4>1967</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM4"></img>
            </h5>
            <h1>Blue and Lonesome</h1>
            <h4>2013</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM5"></img>
            </h5>
            <h1>Voodoo Lounge</h1>
            <h4>YEAR</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Row3;
