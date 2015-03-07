function Dashboard(name) {
  this.name = name;
  this.dashboard = document.createElement('div');
  this.dashboard.setAttribute('id',this.name);
  document.body.appendChild(this.dashboard);
  this.dashboard.subModule = {};
}

Dashboard.prototype = {


  createSubModule : function(name){

    var subModule = document.createElement('div');
    subModule.className = name + ' ' + 'module';

    this.dashboard.subModule[name] = this.dashboard.appendChild(subModule);

    return this.dashboard.subModule[name];

  },

  addContent : function(content){

     return this.appendChild(content.table);

  }
}
