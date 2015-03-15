//Data
var testData = [
  {playerId: 1, name: 'Philippe', points:400, team: 'st Kidla', position: 'F'},
  {playerId: 2, name:'Jobe', points: 50, team: 'sydney', position: 'B'},
  {playerId: 3, name:'Nick', points: 107, team: 'hathowrn', position: 'C'},
  {playerId: 4, name: 'Alfred', points:340, team: 'melbourne',position: 'F'},
  {playerId: 5, name:'Ashton', points: 560, team: 'geelong',  position: 'B'},
  {playerId: 6, name:'Stan', points: 189, team: 'adelaide', position: 'R'}
  ];


//current session data
function Data(data) {
  this.originalList = data;
  this.currentList = data;
  this.previousList = data;
  this.myTeam = [];

  this.whoToShow = this.currentList.map(function(obj){return obj}); //this is a referenece i need a copy
}

Data.prototype = {
  updateData : function(dataArray){

  },

  matchData : function(dataToMatch, originalData) {
    var arr = [];

    for (var i = 0; i < originalData.length; i++){
      for (var j = 0; j < dataToMatch.length; j++){
        if(dataToMatch[j] == originalData[i].playerId){
          arr.push(dataToMatch[j]); //add player obj
          originalData.splice(i, 1);
          i = -1;
          break;
        }
      }
    }

    return arr;
  },

  quickFind: function(item, index){

    this.previousList = this.currentList.map(function(obj){return obj}); //need to return new array

    for(var i = 0; i < this.currentList.length; i++){
      if(item.getAttribute("data-playerid") == this.currentList[i].playerId){
        this.currentList.splice(i, 1);
      }
    }

    this.currentList.splice(index , 0, this.reconstructObj(item));

    return this.currentList;
  },

  removeObj: function(item){

    for(var i = 0; i < this.whoToShow.length; i++){
      if(item.getAttribute("data-playerid") == this.whoToShow[i].playerId){
        this.whoToShow.splice(i, 1);
      }
    }
  },

  reconstructObj : function(item){
    var obj = {};

//TO DO make interative
    itemData = item.getElementsByTagName('td');

    obj.playerId = item.getAttribute("data-playerid");
    obj.name = itemData[0].innerText;
    obj.points = itemData[1].innerText;
    obj.team = itemData[2].innerText;
    obj.position = itemData[3].innerText;

    return obj;
  },

  addToMyTeam : function(obj){
    this.myTeam.push(obj);

    return this.myTeam;
  },

  removeFromMyTeam : function(item){
    var index = undefined;

    for(var i = 0; i < this.myTeam.length; i++){
      if(item.getAttribute("data-playerid") == this.myTeam[i].playerId){
        this.myTeam.splice(i, 1);
        index = i;
      }
    }

    return index;
  },


  positionCounter: function(){

    var count = {};
    count.f = 0;
    count.c = 0;
    count.b = 0;
    count.r = 0;

    for(var i = 0; i < this.myTeam.length; i++){
      if(this.myTeam[i].position === 'F'){
        count.f++;
      } else if(this.myTeam[i].position === 'B'){
        count.b++;
      }else if(this.myTeam[i].position === 'C'){
        count.c++;
      }else if(this.myTeam[i].position === 'R'){
        count.r++;
      }
    }

    return count;

  },

  restorePlayer: function(attr, t){


    //loop trough global table find elements that are not disbale
    //make a list and set that to who to show

    var tableContent = t.table.tbody.children;
    var arr = [];

    //loop throught the table rows, find data- attribute, get value, return arr of values
    for (var i = 0; i < tableContent.length; i++){

      for (var j = 0; j < tableContent[i].attributes.length; j++){
        if(tableContent[i].attributes[j].name === ('data-'+attr)){

          arr.push(this.reconstructObj(tableContent[i]))
        }
      }
    }

    //arr is exclude list


    var tmpArr = this.currentList.map(function(obj){return obj}); //this is a referenece i need a copy


    for(var i = 0; i < arr.length; i++){


      for(var j = 0; j < tmpArr.length; j++ ){
        if(tmpArr[j].playerId == arr[i].playerId){
          tmpArr.splice(j, 1);
        }
      }
    }



    this.whoToShow = tmpArr;

  },

  findIndex: function(item){

    for(var i = 0; i < this.currentList.length; i++){
      if(item.getAttribute("data-playerid") == this.currentList[i].playerId){
        return i;
      }
    }

  },
}

function filterData(data, filter){

  var arr = [];

  for (var i = 0; i < data.length; i++){
    if(data[i]['position'] === filter){
      arr.push(data[i]);
    }
  }

  return arr;
}

function exculdePlayer(el, excludeList){


  for(var i = 0; i < this.currentList.length; i++){
    if(el.playerId === this.currentList[i].playerId){
      this.currentList.splice(i, 1);
    }
  }
}
