let DateHelper = {
  _pad2: function (n) {
    return n < 10 ? '0' + n : n
  },
  getCurrentTimeString: function () {
    var date = new Date();
    return date.getFullYear().toString() 
            + this._pad2(date.getMonth() + 1) 
            + this._pad2( date.getDate()) 
            + '-'
            + this._pad2( date.getHours() ) 
            + this._pad2( date.getMinutes() ) 
            + this._pad2( date.getSeconds() )
  }
}

window.DateHelper = DateHelper