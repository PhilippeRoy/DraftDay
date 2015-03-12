var data = new Data(testData);

//Create Dashboard
var dashboard = new Dashboard('master');

//create submodules
var roundSubModule = dashboard.createSubModule('rounds');
var displaySubModule = dashboard.createSubModule('display');

var globalSubModule = dashboard.createSubModule('global');
var myTeamSubModule = dashboard.createSubModule('myTeam');

var backsSubModule = dashboard.createSubModule('backs');
var centerSubModule = dashboard.createSubModule('centers');
var forwardsSubModule = dashboard.createSubModule('forwards');
var rucsSubModule = dashboard.createSubModule('rucs');

//Create Round Counter
var rounds = new Round();

//Create Display
var display = new Display(data.whoToShow);

//create Tables
var globalTable = new Table('global');
var myTeamTable = new Table('myTeam');
var backTable = new Table('backs');
var centerTable = new Table('centers');
var forwardsTable = new Table('forwards');
var rucsTable = new Table('rucs');


//Add content to sub modules
dashboard.addContent.call(roundSubModule, rounds);
dashboard.addContent.call(displaySubModule, display.display);

dashboard.addContent.call(globalSubModule, globalTable.table);
dashboard.addContent.call(myTeamSubModule, myTeamTable.table);
dashboard.addContent.call(backsSubModule, backTable.table);
dashboard.addContent.call(centerSubModule, centerTable.table);
dashboard.addContent.call(forwardsSubModule, forwardsTable.table);
dashboard.addContent.call(rucsSubModule, rucsTable.table);



globalTable.addData(testData, function(tr){

  var myTeam = document.createElement('button');
  var disable = document.createElement('button');

  // create buttons
  myTeam.appendChild(document.createTextNode('myTeam'));
  disable.appendChild(document.createTextNode('disable'));

  //Add button
  var td = document.createElement('td');

  td.appendChild(myTeam);
  tr.appendChild(td);

  var td = document.createElement('td');

  td.appendChild(disable);
  tr.appendChild(td);
});
//globalTable.addListener();



backTable.addData(filterData(testData, 'B'));
centerTable.addData(filterData(testData, 'C'));
forwardsTable.addData(filterData(testData, 'F'));
rucsTable.addData(filterData(testData, 'R'));


globalTable.readSelf('playerid');


display.whatToDisplay(0);
