var data = new Data(testData);

//Create Dashboard
var dashboard = new Dashboard('master');

//create submodules
var roundSubModule = dashboard.createSubModule('rounds');
var displaySubModule = dashboard.createSubModule('display');

var counterSubModule = dashboard.createSubModule('counter');
var filterSubModule = dashboard.createSubModule('filter');

var globalSubModule = dashboard.createSubModule('global');

var backsSubModule = dashboard.createSubModule('backs');
var centerSubModule = dashboard.createSubModule('centers');
var forwardsSubModule = dashboard.createSubModule('forwards');
var rucsSubModule = dashboard.createSubModule('rucs');

var backsForwardSubModule = dashboard.createSubModule('backsForward');
var centerForwardSubModule = dashboard.createSubModule('centersForward');
var rucsForwardSubModule = dashboard.createSubModule('rucsForward');

var centerRucsSubModule = dashboard.createSubModule('centerRucs');
var backsCenterSubModule = dashboard.createSubModule('backsCenter');


//My Team
var myTeamSubModule = dashboard.createSubModule('myTeam');

var backsMyTeamSubModule = dashboard.createSubModule('backsMyTeam');
var centerMyTeamSubModule = dashboard.createSubModule('centersMyTeam');
var forwardsMyTeamSubModule = dashboard.createSubModule('forwardsMyTeam');
var rucsMyTeamSubModule = dashboard.createSubModule('rucsMyTeam');

var backsForwardMyTeamSubModule = dashboard.createSubModule('backsForwardMyTeam');
var centerForwardMyTeamSubModule = dashboard.createSubModule('centersForwardMyTeam');
var rucsForwardMyTeamSubModule = dashboard.createSubModule('rucsForwardMyTeam');

var centerRucsMyTeamSubModule = dashboard.createSubModule('centerRucsMyTeam');
var backsCenterMyTeamSubModule = dashboard.createSubModule('backsCenterMyTeam');



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

var backForwardTable = new Table('backs-F');
var centerForwardTable = new Table('centers-F');
var rucsForwardTable = new Table('rucs-F');

var backMyTeamTable = new Table('backs');
var centerMyTeamTable = new Table('centers');
var forwardsMyTeamTable = new Table('forwards');
var rucsMyTeamTable = new Table('rucs');

var backForwardMyTeamTable = new Table('backs-F');
var centerForwardMyTeamTable = new Table('centers-F');
var rucsForwardMyTeamTable = new Table('rucs-F');

var centerRucsTable = new Table('centers-R');
var centerRucsMyTeamTable = new Table('centers-R');

var backsCenterTable = new Table('backs-C');
var backsCenterMyTeamTable = new Table('backs-C');



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

dashboard.addContent.call(backsForwardSubModule, backForwardTable.table);
dashboard.addContent.call(centerForwardSubModule, centerForwardTable.table);
dashboard.addContent.call(rucsForwardSubModule, rucsForwardTable.table);

dashboard.addContent.call(centerRucsSubModule, centerRucsTable.table);
dashboard.addContent.call(backsCenterSubModule, backsCenterTable.table);


dashboard.addContent.call(backsForwardMyTeamSubModule, backForwardMyTeamTable.table);
dashboard.addContent.call(centerForwardMyTeamSubModule, centerForwardMyTeamTable.table);
dashboard.addContent.call(rucsForwardMyTeamSubModule, rucsForwardMyTeamTable.table);

dashboard.addContent.call(centerRucsMyTeamSubModule, centerRucsMyTeamTable.table);
dashboard.addContent.call(backsCenterMyTeamSubModule, backsCenterMyTeamTable.table);



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

backForwardTable.addData(filterData(data.whoToShow, 'B,F'));
centerForwardTable.addData(filterData(data.whoToShow, 'C,F'));
rucsForwardTable.addData(filterData(data.whoToShow, 'R,F'));

backForwardMyTeamTable.addData(filterData(data.myTeam, 'B,F'));
centerForwardMyTeamTable.addData(filterData(data.myTeam, 'C,F'));
rucsForwardMyTeamTable.addData(filterData(data.myTeam, 'R,F'));

centerRucsTable.addData(filterData(data.whoToShow, 'C,R'));
centerRucsMyTeamTable.addData(filterData(data.myTeam, 'C,R'));

backsCenterTable.addData(filterData(data.whoToShow, 'B,C'));
backsCenterMyTeamTable.addData(filterData(data.myTeam, 'B,C'));


globalTable.readSelf('playerid');


display.whatToDisplay(0, data.whoToShow);
counter.count(data.positionCounter());
filter.filter();
