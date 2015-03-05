function Table(name ) {
  this.name = name;

  var t = document.createElement('table');
  var tb = document.createElement('tbody');
  t.appendChild(tb);

  this.table = t;
  this.table.tbody = tb;
}

Table.prototype = {

  addData : function(tableData){

    if(tableData != undefined){
      for(var i = 0; i < tableData.length; i++){
        this.table.tbody.appendChild(this.addRow(tableData[i]));
      }
    }

  },

  addRow : function (playerObj){

    var tr = document.createElement('tr');
    var myTeam = document.createElement('button');
    var disable = document.createElement('button');

    myTeam.appendChild(document.createTextNode('myTeam'));
    disable.appendChild(document.createTextNode('disable'));

    for (var val in playerObj){

      var td = document.createElement('td');
      var textNode = document.createTextNode(playerObj[val]);
      td.appendChild(textNode);
      td.appendChild(myTeam);
      td.appendChild(disable);
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

  // readData:function(module, data, filter){
  //   //read data from global
  //   //filter by position
  //   //this <- table
  //
  //   var table = module.getElementsByTagName('table')[0];
  //
  //   var arr = [];
  //
  //   for (var i = 0; i < data.length; i++){
  //     if(data[i]['position'] === filter){
  //       arr.push(data[i]);
  //     }
  //   }
  //
  //   for(var i = 0; i < arr.length; i++){
  //     table.appendChild(this.addRow(arr[i]));
  //   }
  //
  // },


  readData:function(data, filter){
    //read data from global
    //filter by position
    //this <- table

    var table = this.table.tbody;

    var arr = [];

    for (var i = 0; i < data.length; i++){
      if(data[i]['position'] === filter){
        arr.push(data[i]);
      }
    }

    return arr

    // for(var i = 0; i < arr.length; i++){
    //   table.appendChild(this.addRow(arr[i]));
    // }

  },


  addListener : function(table){
    table.addEventListener('click', function(e){
      //this tr all td disable
      console.log(e.target.innerHTML);
    })
   //Just as listener to table

  },

  removeListener : function(){

  },

}
