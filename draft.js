var data = new Data(testData);

//Create Dashboard
var dashboard = new Dashboard('master');

//create submodules
var globalSubModule = dashboard.createSubModule('global');
var myTeamSubModule = dashboard.createSubModule('myTeam');

var backsSubModule = dashboard.createSubModule('backs');
var centerSubModule = dashboard.createSubModule('center');

//create Tables

var globalTable = new Table('global');
var myTeamTable = new Table('myTeam');
var backTable = new Table('backs');
var centerTable = new Table('center');


//Add tables to sub modules
dashboard.addContent.call(globalSubModule, globalTable);
dashboard.addContent.call(myTeamSubModule, myTeamTable);
dashboard.addContent.call(backsSubModule, backTable);
dashboard.addContent.call(centerSubModule, centerTable);


globalTable.addData(testData);
globalTable.addListener();



backTable.addData(filterData(testData, 'B'));
centerTable.addData(filterData(testData, 'C'));


globalTable.readSelf('playerid');
