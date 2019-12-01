const fs = require('fs');
const fetch = require("node-fetch");
const pathName = process.argv[2];
const directory = process.argv;
//let regex = /https?:\S+\w/g

const readPath = (pathName) => {
  return new Promise(function(reject, resolve) {
  fs.readFile(pathName,'utf-8',(err, data) => {
    if (err) {
      reject(err);
    }else if(data.length > 0){
        resolve  
      }else{
        resolve(null);
      }
    
  });
})
}

const obj = {
    broken: 0,
    ok: 0,
}

const showStats =  () => {
  setTimeout(() => {
     console.log( 'validation statistics' , obj)
}, 3200)
}
const validateLinks =  function () {
    fs.readFile(pathName,'utf-8',(err, data) => {
    const alllinks = (data.match(/https?:\S+\w/g).map(link => link)); 
    //console.log('total links found', alllinks.length) 
    for(let i = 0; i < alllinks.length; i++){
      fetch(alllinks[i])
    .then(function(response) {
      if(response.status ===200 ){
        console.log(` ✓ Ok | active ${response.status} | ${alllinks[i]} | \n  ${pathName} |${directory}`)
        //console.log(Object.keys(alllinks[i]))
        obj.ok++
        return data
        
      }else if(response.status ===404 )
        console.log(` ✖ No | broken ${response.status} | ${alllinks[i]} | \n  ${pathName} |${directory}`)
        obj.broken++
       
        showStats()
        
      return broken;
      
      
    }).catch((err) => {
      obj.broken++
      console.log(err.message)
      return err
    })
    }})
}
/*
 const printLinks = (data) => {
  return new Promise(function(reject, resolve){
if(regex.test(data)){
const alllinks= ( data.match(regex).map(link => link));
validate_links(alllinks);  
return resolve
}else{
  console.log('no content links ');
  return reject
}
}

  )}
  

 
readPath(pathName).then(() => {
  printLinks()+
})
*/
validateLinks();
readPath(pathName);




module.exports = readPath, validateLinks, obj;
