console.log("started files ");
var fs=require('fs');

console.log(process.cwd());

fs.readFile(process.cwd()+"/Input.txt",function(err,data){
if(err)
  console.log(err);
 console.log("Asynchronous read: " + data.toString());
});

var data = fs.readFileSync(process.cwd()+"/Input.txt");
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");
