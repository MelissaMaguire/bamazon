var mysql = require("mysql");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon',
  port:	8889
});
 
connection.connect();

module.exports = connection;