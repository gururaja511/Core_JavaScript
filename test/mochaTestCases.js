var UtilityFile =require('../UtilityFile.js');
var UtilityFile1 =require('../UtilityFile1.js');
var assert = require('assert');

describe("describe first mocha testcase",function(){
it("Describing how to execute mocha testcaes1",function(){

  console.log("here is the points how mocha will work");
  console.log("1) first we have to maintain 'test' folder as mandotery");
  console.log("2) we have to main 'scripts': {' 'test': 'mocha' } in package.json");
  console.log("to run --> npm test");

  console.log("Accesing the UtilityFile variables "+ UtilityFile1.age);

});
it("validating add function testcaes2",function(){

console.log("sum of "+UtilityFile.add(2,3));
assert.equal(UtilityFile.add(2,3), '5', 'sum verifiction');

});

it("validating add function testcaes2 with another way of export",function(){

console.log("sum of 2nd way "+UtilityFile1.add(2,3));
assert.equal(UtilityFile1.add(2,3), '5', 'sum verifiction');

});
});
