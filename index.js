var express = require('express');
var body = require('body-parser');
const path = require('path');
var dbcon=require('./db/dbCon')
var bodyParser = require('body-parser');
var userRouter = require('./routers/user');
var shopeRouter = require('./routers/shope');
var BagaRouter = require('./routers/baga');
var CityRouter = require('./routers/city');
var NotiRouter = require('./routers/noti');
var DeptRouter = require('./routers/dept');





var app = express();

app.use('/uploads',express.static(__dirname+'/uploads'));
app.use([bodyParser.urlencoded({ extended: false }), express.json()]);
var port = process.env.PORT || 8000;
app.listen(port, (req, res) => {
    console.log("server is running at port " + port);
})


app.use('/', userRouter);
app.use('/', shopeRouter);
app.use('/', BagaRouter);
app.use('/', CityRouter);
app.use('/', NotiRouter);
app.use('/', DeptRouter);