function Table(name) {
  this.name = name;
}

Table.prototype = {

  init : function(tableData){

    var table = document.createElement('table');

    if(tableData != undefined){
      for(var i = 0; i < tableData.length; i++){
        table.appendChild(this.addRow(tableData[i]));
      }
    }

    return table; //attach to caller
  },

  addRow : function (playerObj){

    var tr = document.createElement('tr');

    for (var val in playerObj){

      var td = document.createElement('td');
      var textNode = document.createTextNode(playerObj[val]);
      td.appendChild(textNode);
      tr.appendChild(td);
      //add the two together and return
    }

    return tr;

  },
  removeRow : function(index){
    console.log('removed');

  },

  update:function(newData, currentData){
    //find player by name/id
    //update order
    //update state

    // for (var i = 0; i < newData.length; i++){
    //   if(newData[i] === currentData[i]){
    //
    //   }
    //   if(newData[i] !== currentData[i]){
    //     //find equvalent
    //
    //     //else create
    //   }
    // }
  },

  readData:function(data, filter){
    //read data from global
    //filter by position
    //this <- table

    console.log(this);
    var arr = [];

    for (var i = 0; i < data.length; i++){
      if(data[i]['position'] === filter){
        arr.push(data[i]);
      }
    }

    for(var i = 0; i < arr.length; i++){
      this.appendChild(this.addRow(arr[i]));
    }

  },
  addListener : function(){

  },

  removeListener : function(){

  },

}
