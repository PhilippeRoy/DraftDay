//Data
var testData = [
  {playerId: 1, name: 'Philippe', points:400, position: 'F'},
  {playerId: 2, name:'Jobe', points: 50, position: 'B'},
  {playerId: 3, name:'Nick', points: 107, position: 'C'},
  {playerId: 4, name: 'Alfred', points:340, position: 'F'},
  {playerId: 5, name:'Ashton', points: 560, position: 'B'},
  {playerId: 6, name:'Stan', points: 189, position: 'C'}
  ];


//current session data
function Data(data) {
  this.originalList = data;
  this.currentList = data;
  this.previousList = data;
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
  },

  reconstructObj : function(item){
    var obj = {};

//TO DO make interative
    itemData = item.getElementsByTagName('td');

    obj.playerId = item.getAttribute("data-playerid");
    obj.name = itemData[0].innerText;
    obj.points = itemData[1].innerText;
    obj.position = itemData[2].innerText;

    return obj;
  }
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
