import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      first: 'App!'
    }
  }

  render() {
    return(
      <div className="mainInfo">
        <h1 className="mainInfo__header">Store Name</h1>
        <p className="mainInfo__description">This is a brief description of the store.</p>
        <a className="mainInfo__quicklink">Type of place</a> • <a className="mainInfo__quicklink">Location</a> • <a className="mainInfo__quicklink">$$$$</a>
      </div>
    );
  }
}