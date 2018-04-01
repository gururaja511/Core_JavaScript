console.log('Starting app');
//callback function
setTimeout(()=>{
  console.log('Inside of callback');
},2000);

setTimeout(()=>{console.log('Second setTimeout');},0);

console.log('Finishing app');
