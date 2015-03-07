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


    this.table.tbody.innerHTML = '';

    if(tableData != undefined){
      for(var i = 0; i < tableData.length; i++){
        this.table.tbody.appendChild(this.addRow(tableData[i]));
      }
    }

  },

  addRow : function (playerObj){

    // create elements
    var tr = document.createElement('tr');
    var myTeam = document.createElement('button');
    var disable = document.createElement('button');

    // create buttons
    myTeam.appendChild(document.createTextNode('myTeam'));
    disable.appendChild(document.createTextNode('disable'));

    for (var val in playerObj){

      var td = document.createElement('td');

      if(val === 'playerId'){
        tr.setAttribute('data-' + val , playerObj[val]);
      }else{
        var textNode = document.createTextNode(playerObj[val]);
        td.appendChild(textNode);
        tr.appendChild(td);
      }
    }

    //Add button
    var td = document.createElement('td');

    td.appendChild(myTeam);
    tr.appendChild(td);

    var td = document.createElement('td');

    td.appendChild(disable);
    tr.appendChild(td);

    return tr;

  },
  removeRow : function(index){
    console.log('removed');

  },

  update:function(newData, currentData){

  },


  readSelf:function(attr){

    var tableContent = this.table.tbody.children;
    var arr = [];

    //loop throught the table rows, find data- attribute, get value, return arr of values
    for (var i = 0; i < tableContent.length; i++){

      for (var j = 0; j < tableContent[i].attributes.length; j++){
        if(tableContent[i].attributes[j].name === ('data-'+attr)){
          arr.push(tableContent[i].attributes[j].value)
        }
      }
    }

    return arr;

  },


  addListener : function(){
    this.table.addEventListener('click', function(e){
      //this tr all td disable
      console.log(e.target.innerHTML);

      if(e.target.innerHTML === 'myTeam' ){
        //add to team list
      }

      if(e.target.innerHTML === 'disable'){
        //disable row
        //remove from viewing diable table array
      }

    })
   //Just as listener to table

  },

  removeListener : function(){

  },

}
