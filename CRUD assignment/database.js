var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"stockeeper_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("database is connected!");
});

module.exports = con;
