var ArgumentBlink = "1";
var execSync = require('child_process').execSync;



var cmd = "echo "+ ArgumentBlink+" > /dev/ttyACM0";

var options = {
  encoding: 'utf8'
};

console.log(execSync(cmd, options));