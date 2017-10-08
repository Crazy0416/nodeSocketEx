module.exports = function(io){
  io.on('connection', function(socket){
    console.log("connection : " + socket.id);
    //socket.on('sMsg', function(data){
      io.emit('ChangeData', 400);
      //console.log("data" + JSON.stringify(data));
    //})
  })
};
