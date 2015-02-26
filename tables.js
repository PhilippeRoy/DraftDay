//Data
var testData = [{name: 'Philippe', points:400, position: 'C'},{name:'Jobe', points: 50, position: 'C'},{name:'Nick', points: 107, position: 'C'}];

//Utilities
function addElement(tag, location, before) {
  var el = document.createElement(tag);
  //if before ? location.before(el) : location.appendChild(el);

}

//creat global Data obj

//Classes
function Dashboard(name) {
  this.name = name;
}

Dashboard.prototype = {

  createModule : function(){

    var dashboard = '<div id='+this.name+' ></div>';
    document.body.innerHTML = dashboard;

    return document.getElementById(this.name)
  },

  createSubModule : function(name){

    var subModule = document.createElement('div');
    subModule.className = name + ' ' + 'module';
    document.getElementById(this.name).appendChild(subModule);

    return document.getElementById(this.name).getElementsByClassName(name)[0];

  },

  addTable : function(table, tableData){

     this.appendChild(table.init(tableData));

  }
}

function Table(name) {
  this.name = name;
}

Table.prototype = {

  init : function(tableData){
    //console.log(tableData);
    //console.log(this);

    var table = document.createElement('table');

    if(tableData.length > 0){
      for(var i = 0; i < tableData.length; i++){
        table.appendChild(this.addRow(tableData[i]));
      }
    }

    return table; //attach to caller
  },

  addListener : function(){

  },

  removeListener : function(){

  },

  addRow : function (playerObj){

    var tr = document.createElement('tr');
    console.log(playerObj.length);

    for (var val in playerObj){
      console.log(playerObj[val]);

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


  }

}


var dashboard = new Dashboard('master');
//Create Dashboard

var theDashboard = dashboard.createModule();
//create submodules

var globalSubModule = dashboard.createSubModule('global');
var globalSubModule = dashboard.createSubModule('backs');

//create Tables

var globalTable = new Table('global');
var backTable = new Table();

//console.log(globalSubModule);

dashboard.addTable.call(globalSubModule, globalTable, testData);
