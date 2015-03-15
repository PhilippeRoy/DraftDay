function Display(arr){
  var d = document.createElement('div');

  this.display = d;
  this.arr = arr;


}

Display.prototype = {

  whatToDisplay : function(pos, arr){

  // console.log(arr);

    this.display.innerHTML = arr[pos]['name'];

  },

  count : function(amounts){

    //make limiter

    var s = '';

    for (var key in amounts){
       s += '<span>'+key+': '+amounts[key]+' </span><br>';
    }

    this.display.innerHTML = s;

  },

  filter : function(){
    var inner = '<input type="checkbox" name="Forwards" value="F">Forwards<br>';
    inner += '<input type="checkbox" name="Center" value="C">Center<br>';
    inner += '<input type="checkbox" name="Backs" value="B">Backs<br>';
    inner += '<input type="checkbox" name="Rucs" value="R">Rucs<br>';


    this.display.innerHTML = inner;

  }
}
