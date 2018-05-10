console.log("started comparator");

var intvalue=10;
var intstring="10";

defineEqualOperation(intvalue,intstring);

function defineEqualOperation(intvalue,intstring){
  console.log(intvalue==intstring);
  console.log(intvalue===intstring);
}

console.log("---------------");

var array=defineEqualOperationReturn(intvalue,intstring);

for (var x in array){
  console.log(array[x]);
}


function defineEqualOperationReturn(intvalue,intstring){
var arr=new Array();

arr[0]=(intvalue==intstring);
  arr[1]=(intvalue===intstring);
  return arr;
}
