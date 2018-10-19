  let showSymbols = (num, symbol) => {
    var useSymbol = (symbol === '$') ? '$' : '* ';
    //replace % with empty stars
    var fillSymbol = (symbol === '$') ? '' : '• ';
    var heyArray = Array(5).fill(fillSymbol).fill(useSymbol, 0, num).join('');
    return Array(5).fill(fillSymbol).fill(useSymbol, 0, num);
  }

exports.showSymbols = showSymbols;


/* 

	Looking for a method to inject HTML using a method

  let showSymbols = (num, symbol) => {
    var useSymbol = (symbol === '$') ? '$' : '<span className="mainInfo__rating__stars__true">*</span> ';
    //replace % with empty stars
    var fillSymbol = (symbol === '$') ? '' : '<span className="mainInfo__rating__stars__false">*</span> ';
    var heyArray = Array(5).fill(fillSymbol).fill(useSymbol, 0, num).join('');
    return Array(5).fill(fillSymbol).fill(useSymbol, 0, num);
  }

exports.showSymbols = showSymbols;

*/