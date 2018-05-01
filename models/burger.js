var orm = require('../config/orm.js');

var burger = {
    selectAll : function(cb) {
        orm.selectAll('burger', function(res){
            cb(res);
        })
    },

    insertOne: function(val, cb) {
        orm.insertOne('burger', val, function(res) {
            cb(res);
        } )
    },

    updateOne: function(val, id, cb){
        orm.updateOne('burger', 'devoured', val, id, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;