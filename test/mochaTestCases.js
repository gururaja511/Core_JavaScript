var UtilityFile =require('../UtilityFile.js');
var assert = require('assert');

describe("describe first mocha testcase",function(){
it("Describing how to execute mocha testcaes1",function(){

  console.log("here is the points how mocha will work");
  console.log("1) first we have to maintain 'test' folder as mandotery");
  console.log("2) we have to main 'scripts': {' 'test': 'mocha' } in package.json");
  console.log("to run --> npm test");


});
it("validating add function testcaes2",function(){

console.log("sum of "+UtilityFile.add(2,3));
assert.equal(UtilityFile.add(2,3), '5', 'sum verifiction');

});

});
