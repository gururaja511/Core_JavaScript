var fs =require("fs");


setTimeout(function(){
  var data=fs.readFileSync("inputFile1.txt");
  console.log("This is sync data -->"+data.toString());
  console.log("Synchronous read ends");
},3000);



fs.readFile("inputFile1.txt",function(error,data){
if(error) return console.log(error);
console.log("This is Asynchronous data"+data.toString());
  console.log("Asynchronous ends");
})


setTimeout(function(){
myCallBackFunction(2,function(val,data){
console.log(val,data);
});
},1000);

function myCallBackFunction(value,callbackd){
  if(value==1)
  {
    callbackd(1,true);
  }else {
    callbackd(0,false);
  }
}//---
callBackFunction (2, function ( err, response ){
     console.log(err,response)
})

// callbackfunction
function callBackFunction(data, callback){
  callback("ddd","result") //if not error
//callback(error, "") //if error
}


getUser(31, function(userObject){
  console.log(userObject);
});




//sync program
function getUser (id,callback){
var user = {
  id: id,
  name :'Vikram'
  };
  callback(user);
};
