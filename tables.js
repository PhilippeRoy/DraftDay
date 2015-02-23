function Table(tableData) {
}

Table.prototype = {

  createTable : function(tableData){
    console.log('created');
    if(tableData === typeof Array){
      if(tableData.length > 0) {
        var table = '<table>';
        for(var i = 0; i < tableData.length; i++){
        table += '<tr><td>';
        table += tableData[i].name;
        table += '</td ><td >';
        //add points
        }
      }
    }
  },

  addRow : function (playerObj){
    console.log('addded');


  },
  removeRow : function(index){
    console.log('removed');

  }

}



var globalTable = new Table();


var backTable = new Table();


backTable.createTable();

globalTable = {
   sayhi: function(msg){
    console.log(msg);
  }
}

globalTable.removeRow();


globalTable.sayhi('yo');
