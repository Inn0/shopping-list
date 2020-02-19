var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'studmysql01.fhict.local',
    user: 'dbi429563',
    password: 'dbpwd123',
    database: 'dbi429563'
})

conn.connect((err) =>{
    if(!err){
        console.log("connected");
    } else {
        console.log("connection failed");
    }
});

module.exports = conn;