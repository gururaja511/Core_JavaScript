const fs=require('fs');


var firstJson={
  "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}

console.log(firstJson.employees[1].firstName);
