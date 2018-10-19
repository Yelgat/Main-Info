import React, { Component } from 'react';

import { showSymbols } from '../lib/library.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      companyName: 'My Restaurant',
      type: 'restaurant',
      numberOfStars: 3,
      numberOfReviews: 785,
      numberOfDollarSigns: 2,
      typeOfCompany: 'American (New)',


    }
  }

  render() {
    return(
      <div className="mainInfo">
        <h1 className="mainInfo__header">{this.state.companyName}</h1>
        <div className="mainInfo__rating">
          <span className="mainInfo__rating__stars">{showSymbols(3, '*')}</span> <span className="mainInfo__rating__numbers">{this.state.numberOfReviews} Reviews</span>
        </div>
        <div className="mainInfo__subMain">
          <span className="mainInfo__subMain__dollars">{showSymbols(4, '$')}</span> <span className="mainInfo__subMain__type">{this.state.typeOfCompany}</span>
        </div>
      </div>
    );
  }
}