function Round(){
  this.counter = 0;
  counter = this.counter;

  this.round = document.createElement('div');

  var span = document.createElement('span');
  var spanContent = document.createTextNode(this.counter);

  var previous = document.createElement('button');
  var next = document.createElement('button');

  // create buttons
  previous.appendChild(document.createTextNode('prev'));
  next.appendChild(document.createTextNode('next'));

  span.appendChild(spanContent);

  this.round.appendChild(span);
  this.round.appendChild(previous);
  this.round.appendChild(next);

  this.round.addEventListener('click', function(e){

    if(e.target.innerHTML === 'prev' ){
      counter--;
      if(counter < 0){
        counter = 0;
      }
      span.innerHTML = counter;

    }

    if(e.target.innerHTML === 'next'){
      counter++;
      span.innerHTML = counter;

    }

  });


  return this.round;
}

Round.prototype = {
  nextRound : function(){
    this.counter++;
  },
  previousRound : function(){
    this.counter--;
  }
}
