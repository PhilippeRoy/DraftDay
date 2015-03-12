rounds.addEventListener('click', function(e){

  if(e.target.innerHTML === 'prev' ){

    var spanNumber = this.getElementsByTagName('span')[0].innerHTML;
    display.whatToDisplay(spanNumber);

    //console.log(data.whoToShow)

  }

  if(e.target.innerHTML === 'next'){

    var spanNumber = this.getElementsByTagName('span')[0].innerHTML;
    display.whatToDisplay(spanNumber);

    //console.log(data.whoToShow)

  }

});



globalTable.table.addEventListener('click', function(e){

  var el = e.target;
  var parentRow = el.parentNode.parentNode;
  var buttonList = parentRow.getElementsByTagName('button');

//ToDO make this a recurisve loop to find parent

  if(e.target.innerHTML === 'myTeam' ){
    //add to team list
    // create obj and add to my team list
    var whatToAdd = data.addToMyTeam(data.reconstructObj(parentRow));
    myTeamTable.addData(whatToAdd, function(tr){

      var remove = document.createElement('button');

      // create buttons
      remove.appendChild(document.createTextNode('remove'));

      //Add button
      var td = document.createElement('td');

      td.appendChild(remove);
      tr.appendChild(td);
    });

    for (var i = 0; i < buttonList.length; i++){
      buttonList[i].setAttribute('disabled', 'disabled');
    }
    //e.target.setAttribute('disabled', 'disabled');
    parentRow.style.color = "#00FF00";


  }

  if(e.target.innerHTML === 'disable'){
    parentRow.style.color = "#AAAAAA";

    for (var i = 0; i < buttonList.length; i++){
      buttonList[i].setAttribute('disabled', 'disabled');
    }
    //remove from viewing diable table array
    var elToRemove = data.reconstructObj(parentRow);
    //find el in array and remove
    data.removeObj(parentRow);

    //console.log(rounds);

    var spanNumber = rounds.getElementsByTagName('span')[0].innerHTML;
    display.whatToDisplay(spanNumber);


  }

})
