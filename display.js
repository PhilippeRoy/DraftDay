function Display(arr){
  var d = document.createElement('div');

  this.display = d;
  this.arr = arr;


}

Display.prototype = {

  whatToDisplay : function(pos){

    this.display.innerHTML = this.arr[pos]['name'];

  },

  remove: function(){
    
  }
}
