var testData = [{name: 'Philippe', points:400},{name:'Jobe', points: 50},{name:'Nick', points: 107}];

function Table(tableData) {
}

Table.prototype = {

  init : function(tableData){
    console.log('created');
    //console.log(tableData === typeof Array);
    console.log(tableData.length > 0);
    //if(tableData === typeof Array){
      if(tableData.length > 0) {
        var table = '<table>';
        for(var i = 0; i < tableData.length; i++){
          table += '<tr><td>';
          table += tableData[i].name;
          table += '</td><td>';
          table += tableData[i].points
          table += '</td><tr>';
        }

        table += '</table>';
        return table;
        //add event listeners
    //  }
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

console.log(backTable.createTable(testData));
document.getElementsByTagName('body')[0].innerHTML = backTable.init(testData);
