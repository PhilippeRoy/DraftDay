function Table(name) {
  this.name = name;

  var t = document.createElement('table');
  var c = document.createElement('caption');
  var tb = document.createElement('tbody');
  t.appendChild(c);
  c.innerHTML = this.name;
  t.appendChild(tb);

  this.table = t;
  this.table.tbody = tb;
}

Table.prototype = {

  addData : function(tableData, buttons){


    this.table.tbody.innerHTML = '';

    if(tableData != undefined){
      for(var i = 0; i < tableData.length; i++){
        this.table.tbody.appendChild(this.addRow(tableData[i], buttons));
      }
    }

  },

  addRow : function (playerObj, addbuttons){

    // create elements
    var tr = document.createElement('tr');


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

//    console.log(addbuttons);
    if(addbuttons !== undefined){
      addbuttons(tr);
    }

    return tr;

  },
  removeRow : function(index){
    this.table.deleteRow(index);

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
      var el = e.target;
      var parentRow = el.parentNode.parentNode;
//ToDO make this a recurisve loop to find parent
      //console.log(el.parentNode.parentNode);

      if(e.target.innerHTML === 'myTeam' ){
        //add to team list
        // create obj and add to my team list
        var whatToAdd = data.addToMyTeam(data.reconstructObj(parentRow));
        myTeamTable.addData(whatToAdd);
        e.target.setAttribute('disabled', 'disabled');
        parentRow.style.color = "#00FF00";

        //myTeam refreshh
      }

      if(e.target.innerHTML === 'disable'){
        parentRow.style.color = "#AAAAAA";
        //remove from viewing diable table array
      }

    })
   //Just as listener to table

  },

  removeListener : function(){

  },


  applyFilter : function(filter){


    var tableContent = this.table.tbody.children;
    var arr = [];

    //loop throught the table rows, find data- attribute, get value, return arr of values
    for (var i = 0; i < tableContent.length; i++){

      for (var j = 0; j < tableContent[i].cells.length; j++){
        if(tableContent[i].cells[j].innerHTML === filter){

          tableContent[i].setAttribute('data-disabled', 'disabled');
          tableContent[i].style.color = "#AAAAAA";
          var buttonList = tableContent[i].getElementsByTagName('button');
          buttonList[0].setAttribute('disabled', 'disabled');
          buttonList[1].innerHTML = 'restore';
        }
      }
    }
//make this work propperly
    var spanNumber = rounds.getElementsByTagName('span')[0].innerHTML;
    display.whatToDisplay(spanNumber, data.whoToShow);
  }







}
