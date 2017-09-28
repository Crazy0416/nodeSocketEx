var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

router.get('/tmp', function(req, res){
  res.send("hello world");
})

module.exports = router;
