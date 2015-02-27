
var dashboard = new Dashboard('master');
//Create Dashboard

var theDashboard = dashboard.createModule();
//create submodules

var globalSubModule = dashboard.createSubModule('global');
var backsSubModule = dashboard.createSubModule('backs');

//create Tables

var globalTable = new Table('global');
var backTable = new Table('backs');


dashboard.addTable.call(globalSubModule, globalTable.init(testData));
dashboard.addTable.call(backsSubModule, backTable.init());

backsSubModule.readData(testData, 'B')
