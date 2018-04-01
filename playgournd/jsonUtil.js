const fs=require('fs');


var getNodes = () =>{
return JSON.parse(fs.readFileSync('jsonFile.json'));
};

var getNode=(title)=>{
var nodes=getNodes();
debugger;
var expNode=nodes.filter((node)=>{
if(node.title===title){
  return node;
}
});
return expNode[0];
}

var saveNotes=(notes)=>{
console.log('writtern notes to file ');
console.log(notes);
fs.writeFileSync('jsonFile.json',JSON.stringify(notes));
  }


var removeNode=(title)=>{
var nodes=getNodes();
var removeDuplicates=nodes.filter((node)=>{
  //console.log(node.title);
  if(node.title!==title)
  return node;
                                      });
            saveNotes(removeDuplicates);
  };

var update=(title,body)=>{
var nodes=getNodes();

var update=nodes.filter((node)=>{
  if(node.title===title){
    node.title=title;
    node.body=body;
    node.new=body;
    return node;
  }else{
    return node;
  }
});
saveNotes(nodes);
};


var addNote=(title,body)=>{
var nodes=[];
var node={"title":title,"body":body};// or {title,body};

try{
//var stringJson=fs.readFileSync('jsonFile.json');
nodes=getNodes();//JSON.parse(stringJson);
}catch(e){}

var duplicateNodes=nodes.filter((node)=>{
if(node.title===title){
  return node;
}
});// nodes.filter((node)=>node.title===title);

if(duplicateNodes.length===0){
nodes.push(node);
saveNotes(nodes);
//fs.writeFileSync('jsonFile.json',JSON.stringify(nodes));
}
};



module.exports={
  getNodes,
  saveNotes,
  addNote,
  removeNode,
  update,
  getNode
  };
