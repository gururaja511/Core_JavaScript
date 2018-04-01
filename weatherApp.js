const request=require('request');
// two arguments , 1 option (object) 2 is callback function
//https://maps.googleapis.com/maps/api/geocode/json?address=anantapur
//https://www.npmjs.com/package/request
/*request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=anantapur',
  json:true
},(error, response, body)=>{
console.log(JSON.stringify(body,undefined,2));//JSON.stringify(javaScriptObj,<filter prop (undefined) >, spaces in display);
});*/

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=anantapur',
  json:true
},(error, response, body)=>{
console.log(JSON.stringify(response,undefined,2));//JSON.stringify(javaScriptObj,<filter prop (undefined) >, spaces in display);
});
