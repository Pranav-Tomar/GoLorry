import React, { Component } from "react";
import "./row1.css";

class Row2 extends Component {
  state = {
    loading: true,
    album1: null,
    album2: null,
    album3: null,
    album4: null,
    album5: null,
  };

  async componentDidMount() {
    const url =
      "https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe/albums";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      album1: data.items[5],
      album2: data.items[6],
      album3: data.items[7],
      album4: data.items[8],
      album5: data.items[9],
      loading: false,
    });
    console.log(data);
  }
  render() {
    return (
      <div className="main">
        <div className="blocks">
          <div>
            {this.state.loading || !this.state.album1 ? (
              <div>loading...</div>
            ) : (
              <div id="block1">
                <h5>
                  <img src={this.state.album1.images[2].url} alt="ALBUM1"></img>
                </h5>
                <h1>{this.state.album1.name}</h1>
                <h4>{this.state.album1.release_date}</h4>
              </div>
            )}
          </div>
          <div>
            {this.state.loading || !this.state.album2 ? (
              <div>loading...</div>
            ) : (
              <div id="block2">
                <h5>
                  <img src={this.state.album2.images[2].url} alt="ALBUM1"></img>
                </h5>
                <h1>{this.state.album2.name}</h1>
                <h4>{this.state.album2.release_date}</h4>
              </div>
            )}
          </div>
          <div>
            {this.state.loading || !this.state.album3 ? (
              <div>loading...</div>
            ) : (
              <div id="block3">
                <h5>
                  <img src={this.state.album3.images[2].url} alt="ALBUM1"></img>
                </h5>
                <h1>{this.state.album3.name}</h1>
                <h4>{this.state.album3.release_date}</h4>
              </div>
            )}
          </div>
          <div>
            {this.state.loading || !this.state.album4 ? (
              <div>loading...</div>
            ) : (
              <div id="block4">
                <h5>
                  <img src={this.state.album4.images[2].url} alt="ALBUM1"></img>
                </h5>
                <h1>{this.state.album4.name}</h1>
                <h4>{this.state.album4.release_date}</h4>
              </div>
            )}
          </div>
          <div>
            {this.state.loading || !this.state.album5 ? (
              <div>loading...</div>
            ) : (
              <div id="block4">
                <h5>
                  <img src={this.state.album5.images[2].url} alt="ALBUM1"></img>
                </h5>
                <h1>{this.state.album5.name}</h1>
                <h4>{this.state.album5.release_date}</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Row2;
