const express = require('express');
const  app = express();
const  fs = require('fs');

app.get('/', function(req,res){
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    var rs = fs.createReadStream("video1.mp4");
    rs.pipe(res);
});

app.listen(3000, function(){
    console.log("the server is listening ");
})