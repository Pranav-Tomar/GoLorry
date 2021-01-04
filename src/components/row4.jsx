import React, { Component } from "react";
import "./row1.css";

class Row4 extends Component {
  render() {
    return (
      <div className="main">
        <div className="blocks">
          <div id="block1">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM1"></img>
            </h5>
            <h1>A Bigger Bang</h1>
            <h4>2005</h4>
          </div>
          <div id="block2">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM2"></img>
            </h5>
            <h1>Bridges to Babylon</h1>
            <h4>1997</h4>
          </div>
          <div id="block3">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM3"></img>
            </h5>
            <h1>Dirty Works</h1>
            <h4>1986</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM4"></img>
            </h5>
            <h1>Undercover</h1>
            <h4>1983</h4>
          </div>
          <div id="block4">
            <h5>
              <img src="https://picsum.photos/100" alt="ALBUM5"></img>
            </h5>
            <h1>It's Only Rock 'n Roll</h1>
            <h4>1974</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Row4;
