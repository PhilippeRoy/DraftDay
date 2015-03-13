function Display(arr){
  var d = document.createElement('div');

  this.display = d;
  this.arr = arr;


}

Display.prototype = {

  whatToDisplay : function(pos, arr){
    console.log(arr);

    this.display.innerHTML = arr[pos]['name'];

  },

  remove: function(){

  }
}
