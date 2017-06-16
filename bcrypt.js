// Load the bcrypt module
var bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync(10);
// Hash the password with the salt
var hash = bcrypt.hashSync("my password", salt);
 
// Finally just store the hash in your DB
// .. code to store in Redis/Mongo/Mysql/Sqlite/Postgres/etc.

bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your password DB.
});
 
// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});