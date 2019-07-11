const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database : conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({dest : './upload'})

app.get('/api/food', (req,res)=>{
    connection.query(
        "SELECT * FROM FOOD ",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
})

app.get('/api/customers', (req,res)=>{
    connection.query(
        "SELECT * FROM FOOD",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
})

app.use ('/image',express.static('./upload'));
app.post('/api/customers',upload.single('image'),(req,res)=>{
    let sql = 'INSERT INTO FOOD (ID, FOOD, ENERC, CHOTDF, PROCNP, FAT, isSelected) VALUES (null, ?,?,?,?,?, 1)';
    let FOOD = req.body.FOOD;
    let ENERC = req.body.ENERC;
    let CHOTDF =req.body.CHOTDF;
    let PROCNP = req.body.PROCNP;
    let FAT = req.body.FAT;
    let params = [FOOD, ENERC,CHOTDF, PROCNP, FAT];
    connection.query(sql, params,
        (err,rows,fields) => {
            console.log(err);
            console.log(rows);
            res.send(rows);
        });
});

app.delete('/api/customers/:id',(req,res)=>{
    let sql = 'UPDATE FOOD SET isSelected = 0 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields)=>{
            res.send(rows);
        }
    )
})
app.get('/api/customers/:id',(req,res)=>{
    let sql = 'UPDATE FOOD SET isSelected = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields)=>{
            res.send(rows);
        }
    )
})
app.listen(port, () => console.log(`Listening on port ${port}`));