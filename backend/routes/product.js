const express = require("express");
const Router = express.Router();
const conn = require("../dbconn");

Router.get('/', (req, res, fields)=>{
    conn.query("SELECT * from products", (err, rows) =>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }
    });
})

module.exports = Router;
