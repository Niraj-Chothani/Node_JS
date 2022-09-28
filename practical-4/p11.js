var http = require('http')
var url = require('url')
http.createServer(function(req,res){
    var obj = url.parse(req.url,true)
    console.log(`sxsrf = ${obj.query['sxsrf']}`)
}).listen(8001);