var http = require('http')
const URL = require('url')

http.createServer(function(req,res){
    var obj = URL.parse('https://www.uvpce.ac.in:11/content/syllabus-it')
    console.log(`Host : ${obj.host}`)
    console.log(`Hostname :  ${obj.hostname}`)
}).listen(8000);