
var dashboard = new Dashboard('master');
//Create Dashboard

//var theDashboard = dashboard.createModule();
//create submodules

var globalSubModule = dashboard.createSubModule('global');
var backsSubModule = dashboard.createSubModule('backs');
//create Tables

var globalTable = new Table('global');
var backTable = new Table('backs');

//Add tables to sub modules
dashboard.addTable.call(globalSubModule, globalTable);
dashboard.addTable.call(backsSubModule, backTable);

globalTable.addData(testData);
backTable.readData(testData, 'B');

//theBacksTable.prototype.readData(testData, 'B').bind(theBacksTable);
//backTable.__proto__.bind(theBacksTable);
//backTable.addListener()
