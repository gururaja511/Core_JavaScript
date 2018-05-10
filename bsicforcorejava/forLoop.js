console.log("started for loop");
var person = {fname:"John", lname:"Doe", age:25};

console.log("person name is "+person.fname);
var text="";
for (x in person) {
    text += person[x]+" ";
}
console.log("total person json is : "+text);

console.log("---------------------- array -----------------");
var arrayvn=[1,2,6,3,4,5];
for (array in arrayvn){
  console.log("array value "+array);
}



forLoopMethod(2,10);


function forLoopMethod(i,limit){
var ii;
  for(ii=i;ii<limit;ii++){
    console.log("counter : "+add(ii,limit));
  }

console.log("--------------------"+i);
for(ii=i;ii<limit;ii=ii+2){
  console.log("adding :"+add(ii,limit));
}

}

function add(a,b){
  return (a+b);
}
