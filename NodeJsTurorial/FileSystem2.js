var fs=require("fs");

setTimeout(function(){
var data=fs.readFileSync("inputfile1.txt");

console.log(data.toString());
},1000);

fs.readFile("inputfile1.txt",function(err,data){
  if(err) return err;
console.log("this is ashync");
  console.log(data.toString());
});


//fs.writeFileSync('inputfile1.txt',"Writing with file code");
//fs.appendFileSync('inputfile1.txt',"Writing with file code");
fs.appendFile("inputfile1.txt","callback writinr ",function(err){
if(err)  return err;
  console.log("wirte successfully");
});
