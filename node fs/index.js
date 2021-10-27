const fs = require('fs');

//Dosya Okumak
fs.readFile('password.txt','utf-8',(err,data)=>{
    if(err) console.log(err);
    console.log(data)
    console.log('Dosya Okundu..')
})

//Dosya Yazmak

fs.writeFile('deneme.json','{"name":"hasan","age":28}','utf-8',err=>{
    if(err) console.log(err)
})

//Veri Eklemek

fs.appendFile('deneme.txt','\nYeni Satır','utf-8',(err,data)=>{
    if(err) console.log(err)

})

//Silme

fs.unlink('deneme.txt',(err)=>{
    if(err) console.log(err)
})

//Klasör Oluştur

//fs.mkdir('uploads/img',{recursive:true},err=>{
 //   if(err) console.log(err)
//})

fs.rmdir('uploads',{recursive:true},err=>{
    if(err) console.log(err)
})