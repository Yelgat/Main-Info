  let showSymbols = (num, symbol) => {
    var useSymbol = (symbol === '$') ? '$' : '* ';
    //replace % with empty stars
    var fillSymbol = (symbol === '$') ? '' : '% ';
    return Array(5).fill(fillSymbol).fill(useSymbol, 0, num).join('');
  }

exports.showSymbols = showSymbols;