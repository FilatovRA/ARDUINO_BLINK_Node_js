const http = require("http");
  
http.createServer(function(request, response){
     
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
    if(request.url === "/turnON" || request.url === "/"){
        response.write("<h2>turnON</h2>");
        Blink("1");
    }
    else if(request.url == "/turnOFF"){
        response.write("<h2>turnOFF</h2>");
         Blink("0");
    }
    else if(request.url == "/contact"){
        response.write("<h2>Contacts</h2>");
    }
    else{
       
    }
    response.end();
}).listen(3001);

function Blink(ArgumentBlink) {
	// body...

var execSync = require('child_process').execSync;



var cmd = "echo "+ ArgumentBlink+" > /dev/ttyACM0";

var options = {
  encoding: 'utf8'
};

execSync(cmd, options);
}