var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asf2141038)*@$#!",
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM test", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});