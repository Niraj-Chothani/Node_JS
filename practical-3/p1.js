var http = require("http"); 
var server = http.createServer(function (req, res) 
{   
    if (req.url == "/") {     
        res.writeHead(200, { "Content-Type": "text/html" });     
        res.write("<html><body><p>This is Test.</p></body></html>");     
        res.end(); 
  }  
  else if (req.url == "/exam") {     
    res.write("<table border=2><tr> <th>Semester</th> <th>Subject</th></tr><tr><td>5th </td><td>Software Packages</td></tr><tr><td>4th</td><td>NOSQL</td> </tr></table>"); 
    res.end(); 
  }    
  else if (req.url == "/exam/regular_exam") { 
    res.writeHead(200, { "Content-Type": "text/html" });     
    res.write('<html><body><p>"Regular exam"</p></body></html>'); 
    res.end(); 
  }    
  else res.end("Invalid Request!!"); 
}); 
server.listen(5000); 
console.log("Node.js web server at port 5000 is running..");  
