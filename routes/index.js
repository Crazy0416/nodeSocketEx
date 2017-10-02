var express = require('express');
var router = express.Router();
var moment = require('moment');

var cnt = 0;

router.use(function(res, req, next) {
    console.log('\n' + moment().format());
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

module.exports = router;
