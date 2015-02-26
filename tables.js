//Data
var testData = [{name: 'Philippe', points:400, position: 'C'},{name:'Jobe', points: 50, position: 'C'},{name:'Nick', points: 107, position: 'C'}];

//Utilities
function addElement(tag, location, before) {
  var el = document.createElement(tag);
  //if before ? location.before(el) : location.appendChild(el);

}

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
     //console.log(this);
     //need to bind to caller
     this.appendChild(table.init(tableData));

  }
}

function Table(name) {
  this.name = name;
}

Table.prototype = {

  init : function(tableData){
    console.log(this);

    var table = document.createElement('table');

    if(tableData.length > 0){
      for(var i = 0; i < tableData.length; i++){
        var tr = document.createElement('tr');
        //tr.appendChild(this.addRow(tableData[i]));
        table.appendChild(tr);
      }
    }


    return table; //attach to caller

    //document.getElementById(this.name).appendChild(table);

    //console.log(tableData === typeof Array);
    //if(tableData === typeof Array){
      // if(tableData.length > 0) {
      //   var table = '<table>';
      //   for(var i = 0; i < tableData.length; i++){
      //     table += '<tr><td>';
      //     table += tableData[i].name;
      //     table += '</td><td>';
      //     table += tableData[i].points;
      //     table += '</td><td>';
      //     table += '<button class="select">selected</button>';
      //     table += '<button class="delete">delete</button>';
      //     table += '</td><tr>';
      //   }
      //
      //   table += '</table>';
      //   return table;
        //add event listeners
        //on hover - display delete button
    //  }
    //}

  },

  addListener : function(){

  },

  removeListener : function(){

  },

  addRow : function (playerObj){
    console.log('addded');

    // for(var i = 0; i < playerObj.length; i++){
    //   var td = document.createElement('td');
    //   var textNode = documentCreateTextNode(playerObj[i]);
    //   //add the two together and return
    // }


  },
  removeRow : function(index){
    console.log('removed');


  }

}


var dashboard = new Dashboard('master');
//Create Dashboard
var theDashboard = dashboard.createModule();

var globalSubModule = dashboard.createSubModule('global');

var globalTable = new Table('global');

//console.log(globalSubModule);

dashboard.addTable.call(globalSubModule, globalTable, testData);

//globalTable.init(testData);
globalTable.gatherTablesData = function(){
  //find all submoles in master
  //read tables and make array
  //sort array
  //output array
}


//var backTable = new Table();

//document.getElementsByTagName('body')[0].innerHTML = backTable.init(testData);
