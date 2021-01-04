import React, { Component } from "react";
import "./row1.css";

class Row6 extends Component {
  render() {
    return (
      <div className="main">
        <div className="blocks">
          <div id="block1">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM1"></img>
            </h5>
            <h1>Ballads</h1>
            <h4>2020</h4>
          </div>
          <div id="block2">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM2"></img>
            </h5>
            <h1>Stripped</h1>
            <h4>1995</h4>
          </div>
          <div id="block3">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM3"></img>
            </h5>
            <h1>FlashPoint</h1>
            <h4>1991</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM4"></img>
            </h5>
            <h1>Still Life</h1>
            <h4>1982</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM5"></img>
            </h5>
            <h1>Love You Live</h1>
            <h4>1977</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Row6;
