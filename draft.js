var data = new Data(testData);

//Create Dashboard
var dashboard = new Dashboard('master');

//create submodules
var roundSubModule = dashboard.createSubModule('rounds');
var globalSubModule = dashboard.createSubModule('global');
var myTeamSubModule = dashboard.createSubModule('myTeam');

var backsSubModule = dashboard.createSubModule('backs');
var centerSubModule = dashboard.createSubModule('center');

//Create Round Counter
var rounds = new Round();

//create Tables
var globalTable = new Table('global');
var myTeamTable = new Table('myTeam');
var backTable = new Table('backs');
var centerTable = new Table('center');


//Add content to sub modules
dashboard.addContent.call(roundSubModule, rounds);
dashboard.addContent.call(globalSubModule, globalTable.table);
dashboard.addContent.call(myTeamSubModule, myTeamTable.table);
dashboard.addContent.call(backsSubModule, backTable.table);
dashboard.addContent.call(centerSubModule, centerTable.table);


globalTable.addData(testData);
globalTable.addListener();



backTable.addData(filterData(testData, 'B'));
centerTable.addData(filterData(testData, 'C'));


globalTable.readSelf('playerid');
