import React, { Component } from 'react';

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

  gimmeSymbols(num, symbol) {
    var useSymbol = (symbol === '$') ? '$' : '* ';
    //replace % with empty stars
    var fillSymbol = (symbol === '$') ? '' : '% ';
    return Array(5).fill(fillSymbol).fill(useSymbol, 0, num).join('');
  }

  render() {
    return(
      <div className="mainInfo">
        <h1 className="mainInfo__header">{this.state.companyName}</h1>
        <div className="mainInfo__rating">
          <span className="mainInfo__rating__stars">{this.gimmeSymbols(5, '*')}</span> <span className="mainInfo__rating__numbers">{this.state.numberOfReviews} Reviews</span>
        </div>
        <div className="mainInfo__subInfo">
          <div className="mainInfo__subInfo__dollars">{this.gimmeSymbols(4, '$')}</div>
          <div className="mainInfo__subInfo__type">{this.state.typeOfCompany}</div>
        </div>




      </div>
    );
  }
}