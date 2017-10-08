var express = require('express');
var router = express.Router();
var moment = require('moment');

cnt = 0;
emotion = 0;
router.use(function(res, req, next) {
    console.log('\n' + moment().format());
    console.log(req.headers);
    next();
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

router.get('/tmp/:value', function(req, res){
  console.log("value : " + req.params.value);
  var time = moment().format();
  cnt++;
  var sendString = 'Time : ' + time + " / count : " + cnt + " / data : " + req.params.value;
  res.send(sendString);
})

router.get('/data/:value', function(req, res){
    emotion=req.params.value;
    console.log("emotion : " + emotion);
    //res.sendFile(__dirname + '/svgPage.html');
    io.emit("ChangeData", emotion);
    res.send("ok");
});

router.get('/homepage', function(req, res){
    res.sendFile(__dirname + '/svgPage.html');
});


module.exports = router;
