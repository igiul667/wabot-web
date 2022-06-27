const express = require('express');
const path = require('path');
const mysql = require('mysql2')
var app = express();

console.log("Connecting to MySQL DB");
var con = mysql.createConnection({
    host: "192.168.0.234",
    user: "nodejs",
    password: "a5C569sfa@W*hT",
    port: '6603',
    database: "wabot-data",
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "Page1.html"));
    //res.render("")
})
app.get('/complete', function (req, res) {
    res.sendFile(path.join(__dirname, "Page2.html"));

})
app.get('/valid', function (req, res) {
    code = req.query.code;
    console.log("Recived validation for code:", code);
    if (code != null) {
        con.query("UPDATE utenti SET uses = 0 WHERE chatCode = '" + req.query.code + "';", function (err, res, fie) {
            if (err) console.error(err);
        });
    }
});
var server = app.listen(1337, function () {
    var host = server.address().address
    var port = server.address().port

    //console.log("Example app listening at http://%s:%s", host, port)
})