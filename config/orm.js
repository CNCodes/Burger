var connection = require('./connection.js');

var orm = {
    
    selectAll : function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        })
    },

    insertOne : function(table, val, cb){
        var queryString = "INSERT INTO " + table + "(burger_name, devoured)" + "VALUE (" + "'" + val.toString() + "'" + ", false);"

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    updateOne : function(table, col, val, id, cb){
        var queryString = "UPDATE " + table;
        queryString += " SET " + col + "= " + val;
        queryString += " WHERE id = " + id + ";";

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;