var express = require('express');
var router = express.Router();
var moment = require('moment');

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
  res.send("hello world");
})

module.exports = router;
