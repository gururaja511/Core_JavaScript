console.log("staring UtilityFile!");
//console.log(module);
//module.exports.age=23;
var age=23;
var name ='GuruRaja';
var add= function(a,b){
  return (a+b);
};
var mul=(a,b) =>{
  return (a*b);
};

module.exports={
  age,
  name,
  add,
  sub,
  mul,add2
};

function add2(a,b){
  return (a+b);
}
function sub(a,b){
  return (a-b);
}
