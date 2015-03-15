function Round(){
  this.c = 0;
  c = this.c;

  this.round = document.createElement('div');

  var span = document.createElement('span');
  var spanContent = document.createTextNode(this.c);
  var br = document.createElement('br');


  var previous = document.createElement('button');
  var next = document.createElement('button');

  // create buttons
  previous.appendChild(document.createTextNode('prev'));
  next.appendChild(document.createTextNode('next'));

  this.span = span.appendChild(spanContent);

  this.round.appendChild(span);
  this.round.appendChild(br);
  this.round.appendChild(previous);
  this.round.appendChild(next);

  this.round.addEventListener('click', function(e){

//move out
    if(e.target.innerHTML === 'prev' ){
      c--;
      if(c < 0){
        c = 0;
      }
      span.innerHTML = c;
    }

    if(e.target.innerHTML === 'next'){
      c++;
      span.innerHTML = c;

    }

  });


  return this.round;
}

Round.prototype = {
  nextRound : function(){
    this.c++;
  },
  previousRound : function(){
    this.c--;
  }
}
