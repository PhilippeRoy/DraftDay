var data = new Data(testData);

//Create Dashboard
var dashboard = new Dashboard('master');

//create submodules
var roundSubModule = dashboard.createSubModule('rounds');
var counterSubModule = dashboard.createSubModule('counter');
var filterSubModule = dashboard.createSubModule('filer');
var displaySubModule = dashboard.createSubModule('display');

var globalSubModule = dashboard.createSubModule('global');
var myTeamSubModule = dashboard.createSubModule('myTeam');

var backsSubModule = dashboard.createSubModule('backs');
var centerSubModule = dashboard.createSubModule('centers');
var forwardsSubModule = dashboard.createSubModule('forwards');
var rucsSubModule = dashboard.createSubModule('rucs');

var backsMyTeamSubModule = dashboard.createSubModule('backs');
var centerMyTeamSubModule = dashboard.createSubModule('centers');
var forwardsMyTeamSubModule = dashboard.createSubModule('forwards');
var rucsMyTeamSubModule = dashboard.createSubModule('rucs');

//Create Round Counter
var rounds = new Round();

//Create Display
var display = new Display(data.whoToShow);
var counter = new Display();
var filter = new Display();

//create Tables
var globalTable = new Table('global');
var myTeamTable = new Table('myTeam');
var backTable = new Table('backs');
var centerTable = new Table('centers');
var forwardsTable = new Table('forwards');
var rucsTable = new Table('rucs');
var backMyTeamTable = new Table('backs');
var centerMyTeamTable = new Table('centers');
var forwardsMyTeamTable = new Table('forwards');
var rucsMyTeamTable = new Table('rucs')


//Add content to sub modules
dashboard.addContent.call(roundSubModule, rounds);
dashboard.addContent.call(counterSubModule, counter.display);
dashboard.addContent.call(filterSubModule, filter.display);
dashboard.addContent.call(displaySubModule, display.display);


dashboard.addContent.call(globalSubModule, globalTable.table);
dashboard.addContent.call(myTeamSubModule, myTeamTable.table);

dashboard.addContent.call(backsSubModule, backTable.table);
dashboard.addContent.call(centerSubModule, centerTable.table);
dashboard.addContent.call(forwardsSubModule, forwardsTable.table);
dashboard.addContent.call(rucsSubModule, rucsTable.table);

dashboard.addContent.call(backsMyTeamSubModule, backMyTeamTable.table);
dashboard.addContent.call(centerMyTeamSubModule, centerMyTeamTable.table);
dashboard.addContent.call(forwardsMyTeamSubModule, forwardsMyTeamTable.table);
dashboard.addContent.call(rucsMyTeamSubModule, rucsMyTeamTable.table);


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



backTable.addData(filterData(data.whoToShow, 'B'));
centerTable.addData(filterData(data.whoToShow, 'C'));
forwardsTable.addData(filterData(data.whoToShow, 'F'));
rucsTable.addData(filterData(data.whoToShow, 'R'));


backMyTeamTable.addData(filterData(data.myTeam, 'B'));
centerMyTeamTable.addData(filterData(data.myTeam, 'C'));
forwardsMyTeamTable.addData(filterData(data.myTeam, 'F'));
rucsMyTeamTable.addData(filterData(data.myTeam, 'R'));

globalTable.readSelf('playerid');


display.whatToDisplay(0, data.whoToShow);
counter.count(data.positionCounter());
filter.filter();
