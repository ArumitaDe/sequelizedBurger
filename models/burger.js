var orm= require("../config/orm.js");

//Creating a burger object

var burger = {
  
  selectWhere: function(cb) {
    orm.selectWhere('burgers', function(res) {
      cb(res);
    });
  },

  
  insert: function(columns, values, cb) {
    orm.insert('burgers', columns, values, function(res) {
      cb(res);
    });
  },

  
  update: function(columns,values, condition, cb) {
    orm.update('burgers', columns,values, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;