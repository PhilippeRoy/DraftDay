function Round(){
  this.counter = 0;

  return this.counter;
}

Round.prototype = {
  nextRound : function(){
    this.counter++;
  },
  previousRound : function(){
    this.counter--;
  }
}
