function Dashboard(name) {
  this.name = name;
}

Dashboard.prototype = {

  createModule : function(){

    var dashboard = '<div id='+this.name+' ></div>';
    document.body.innerHTML = dashboard;

    return document.getElementById(this.name)
  },

  createSubModule : function(name){

    var subModule = document.createElement('div');
    subModule.className = name + ' ' + 'module';
    document.getElementById(this.name).appendChild(subModule);

    return document.getElementById(this.name).getElementsByClassName(name)[0];

  },

  addTable : function(table){

     this.appendChild(table);

  }
}
