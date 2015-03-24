rounds.addEventListener('click', function(e){


  if(e.target.innerHTML === 'prev' ){

    var spanNumber = this.getElementsByTagName('span')[0].innerHTML;
    display.whatToDisplay(spanNumber, data.whoToShow);

    //console.log(data.whoToShow)

  }

  if(e.target.innerHTML === 'next'){


    var spanNumber = this.getElementsByTagName('span')[0].innerHTML;
    display.whatToDisplay(spanNumber, data.whoToShow);

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

    var elToRemove = data.reconstructObj(parentRow);
    //find el in array and remove
    data.removeObj(parentRow);
    //e.target.setAttribute('disabled', 'disabled');
    //parentRow.style.color = "#00FF00";
    parentRow.className = parentRow.className + ' ' + 'success';

    counter.count(data.positionCounter());

    backTable.addData(filterData(data.whoToShow, 'B'));
    centerTable.addData(filterData(data.whoToShow, 'C'));
    forwardsTable.addData(filterData(data.whoToShow, 'F'));
    rucsTable.addData(filterData(data.whoToShow, 'R'));

    backMyTeamTable.addData(filterData(data.myTeam, 'B'));
    centerMyTeamTable.addData(filterData(data.myTeam, 'C'));
    forwardsMyTeamTable.addData(filterData(data.myTeam, 'F'));
    rucsMyTeamTable.addData(filterData(data.myTeam, 'R'));

    $('.rounds button:last-child()').trigger('click');
    tableCounter();

  }



  if(e.target.innerHTML === 'disable'){
    parentRow.style.color = "#AAAAAA";
    parentRow.className = parentRow.className + ' ' + 'danger';

    //not going through though becuase I need the other button active;
    parentRow.setAttribute('data-disabled', 'disabled');
    for (var i = 0; i < 1; i++){
      buttonList[i].setAttribute('disabled', 'disabled');
    }
    //remove from viewing diable table array
    var elToRemove = data.reconstructObj(parentRow);
    //find el in array and remove
    data.removeObj(parentRow);

    var spanNumber = rounds.getElementsByTagName('span')[0].innerHTML;
    display.whatToDisplay(spanNumber, data.whoToShow);

    e.target.innerHTML = 'restore';

    backTable.addData(filterData(data.whoToShow, 'B'));
    centerTable.addData(filterData(data.whoToShow, 'C'));
    forwardsTable.addData(filterData(data.whoToShow, 'F'));
    rucsTable.addData(filterData(data.whoToShow, 'R'));

    tableCounter();
  }


  else if(e.target.innerHTML === 'restore'){
    parentRow.style.color = "#000";
    parentRow.classList.remove('danger');

    //not going through though becuase I need the other button active;

    for (var i = 0; i < 1; i++){
      buttonList[i].removeAttribute('disabled');
    }
    parentRow.removeAttribute('data-disabled');

    data.restorePlayer('disabled', globalTable);

    var spanNumber = rounds.getElementsByTagName('span')[0].innerHTML;
    display.whatToDisplay(spanNumber, data.whoToShow);

    e.target.innerHTML = 'disable';

    backTable.addData(filterData(data.whoToShow, 'B'));
    centerTable.addData(filterData(data.whoToShow, 'C'));
    forwardsTable.addData(filterData(data.whoToShow, 'F'));
    rucsTable.addData(filterData(data.whoToShow, 'R'));

    tableCounter();

  }



});



myTeamTable.table.addEventListener('click', function(e){

  var el = e.target;
  var parentRow = el.parentNode.parentNode;

//ToDO make this a recurisve loop to find parent

  if(e.target.innerHTML === 'remove' ){

  //remove from my team
  var elToRemove = data.reconstructObj(parentRow);

  myTeamTable.removeRow(data.removeFromMyTeam(parentRow));

  data.restorePlayer('disabled', globalTable);


  //find in global table and restore
  var index = data.findIndex(parentRow);
//  console.log(index);
  var foundEl = globalTable.table.rows[index];

  foundEl.style.color = "#000";
  foundEl.classList.remove('success');

  var buttonList = foundEl.getElementsByTagName('button');
  for (var i = 0; i < buttonList.length; i++){
    buttonList[i].removeAttribute('disabled');
  }

  counter.count(data.positionCounter());

  backTable.addData(filterData(data.whoToShow, 'B'));
  centerTable.addData(filterData(data.whoToShow, 'C'));
  forwardsTable.addData(filterData(data.whoToShow, 'F'));
  rucsTable.addData(filterData(data.whoToShow, 'R'));

  backMyTeamTable.addData(filterData(data.myTeam, 'B'));
  centerMyTeamTable.addData(filterData(data.myTeam, 'C'));
  forwardsMyTeamTable.addData(filterData(data.myTeam, 'F'));
  rucsMyTeamTable.addData(filterData(data.myTeam, 'R'));

  $('.rounds button').first().trigger('click');

  tableCounter();


//need to add back too who to show

  }

});


filter.display.addEventListener('click', function(e){

  var el = e.target;

  if(e.target.checked){

    globalTable.applyFilter(e.target.value);

  //find all in global list and apply disable
   } else if(!e.target.checked){
     globalTable.removeFilter(e.target.value)
   }

   backTable.addData(filterData(data.whoToShow, 'B'));
   centerTable.addData(filterData(data.whoToShow, 'C'));
   forwardsTable.addData(filterData(data.whoToShow, 'F'));
   rucsTable.addData(filterData(data.whoToShow, 'R'));

   tableCounter();


});
