const fs=require('fs');


var firstJson={
  "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}

console.log(firstJson.employees[1].firstName);
console.log(firstJson.employees.length);

for(x in firstJson.employees){
  console.log("for "+JSON.stringify(firstJson.employees[x]));
}
var i=0;
var s=0;

if(i===s)
console.log("fine");
else
console.log("not fine");
