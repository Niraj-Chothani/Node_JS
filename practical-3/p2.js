var http = require("http"); 
var url = require("url"); 
var server = http.createServer(function (req, res) {   
    const queryObj = url.parse(req.url, true).query;   
    const num1 = queryObj.num1;   
    const num2 = queryObj.num2;   
    maxnum(num1, num2);   
    function maxnum(num1, num2) {     
        if (num1 > num2) {       
            res.write(`${num1} is greatest number.`);       
            res.end(); 
    } else if (num1 == num2) {       
        res.write(`${num1} and ${num2} is same number.`);       
        res.end();     } 
        else {       
            res.write(`${num2} is greatest number.`);       
            res.end(); 
    } 
  } });server.listen(8080); 
  console.log("Node.js web server at port 8080 is running.."); 
