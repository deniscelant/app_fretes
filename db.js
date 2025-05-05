var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asf2141038)*@$#!"
});



// Connect to the MySQL server
con.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }

  console.log('Connected to MySQL server.');

  // Perform database operations...

  // Close the MySQL con
 
});

con.end((error) => {
  if (error) {
    console.error('Error closing MySQL connection:', error);
    return;
  }

  console.log('MySQL connection closed.');
});