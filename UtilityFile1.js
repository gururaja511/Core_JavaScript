console.log("staring UtilityFile!");

var modules=module.exports={};

//console.log(module);
//module.exports.age=23;
modules.age=23;
modules.name ='GuruRaja';
modules.add= function(a,b){
  return (a+b);
};
modules.mul=(a,b) =>{
  return (a*b);
};
modules.sub=(a,b)=>{
  return (a-b);
}

modules.forLoop(iv,limit){
for(var i=iv;i<=limit;i++){
  console.log(" Iteration : "+i );
}

}
