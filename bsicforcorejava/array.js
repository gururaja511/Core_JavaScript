
console.log("---------------------- array -----------------");
var arrayvn=[1,2,6,3,4,5];
for (array in arrayvn){
  console.log("array value "+array);
}

arrayvn.sort();
console.log("before push :"+arrayvn);
arrayvn.push("10");
console.log("after push :"+arrayvn);
arrayvn[arrayvn.length]=0;
console.log("index  push :"+arrayvn);

arrayvn[0]="appended";
console.log("added element at 0  push :"+arrayvn);


var arrayJson={};
var arrayNamed=[];
console.log("--------- array on named index---------");
arrayNamed["one"]="one value";
arrayNamed["two"]="two value";
arrayNamed["three"]="three value";

console.log(arrayNamed);
console.log("arrayNamed[\"three\"] : "+arrayNamed["three"]);
console.log("--------- array on named index  ends---------");
