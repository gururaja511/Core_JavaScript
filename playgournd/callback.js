//sync program
var getUser = (id,callback) =>{
var user = {
  id: id,
  name :'Vikram'
  };
setTimeout(()=>{
    callback(user);
},3000);
// or   callback(user);
};

getUser(31, (userObject)=>{
  console.log(userObject);
});
