console.log('starting app.js');
//fs--> fileSystem
const fs= require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');
var UtilityFile =require('./UtilityFile.js');



/*fs.appendFile('greeting.txt','hello '+os.userInfo().username);
console.log(os.userInfo().username);
*/
/*
console.log("Hi i am from UtilityFile "+UtilityFile.name+ " and my age is "+UtilityFile.age);
console.log("sum of "+UtilityFile.add(2,3));
console.log("sub of "+UtilityFile.sub(2,3));
console.log("Mul of "+UtilityFile.mul(2,3));
*/

// lodash utility function
/*console.log("i am string is a ?:: "+_.isString("i am string"));
console.log(UtilityFile.add(3,5)+" is a ?"+_.isString(UtilityFile.add(3,5)));
var array=[2,4,1,2,4,1];
console.log(_.uniq(array));///*/

// run time argmunets from cmd in two ways's

//console.log(module);
//console.log(process.argv);
//console.log(process.argv[2]);
//console.log("process args : "+process.argv);
var condition=process.argv[2];
//var condition=yargs.argv;

if(condition==='add'){
  console.log('adding the variables');
var result =UtilityFile.add2(parseInt(process.argv[3]),parseInt(process.argv[4]));
  console.log(result);
}else if(condition==='sub'){
  console.log('sub the variables');
  console.log(UtilityFile.sub(process.argv[3],process.argv[4]));
}
















//
