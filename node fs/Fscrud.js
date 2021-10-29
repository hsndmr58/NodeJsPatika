const fs = require('fs');
fs.writeFile('employess.json','{"name":"Employee 1 Name","salary":2000}','utf-8',err=>{
    if(err) console.log(err)
})


fs.readFile('employess.json','utf-8',(err,data)=>{
    if(err) console.log(err);
    console.log(data)
})

fs.appendFile('employess.json','\n{"name":"Employee 2 Name","salary":3000}','utf-8',(err,data)=>{
    if(err) console.log(err)

}) 

fs.unlink('employess.json',(err)=>{
    if(err) console.log(err)
})