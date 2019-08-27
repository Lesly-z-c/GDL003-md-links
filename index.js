const fs = require('fs');
const fetch = require("node-fetch");
const pathName = process.argv[2];
//let regex = /https?:\S+\w/g

const read = (pathName) => {
  return new Promise(function(reject, resolve) {
  fs.readFile(pathName,'utf-8',(err, data) => {
    if (err) {
      console.log('error :' , err);
      return reject
    }else {
      console.log("Markdown file is found"); 
     //print_links (data) 
       return resolve
    }
  });
})
}

/*
const print_links = (data) => {
  return new Promise(function(reject, resolve){
if(regex.test(data)){
const alllinks= ( data.match(regex).map(link => link));
  return resolve
}else{
  console.log('no content links ');
  return reject
}
  }
  )}
  */

//let alllinks = link => link;
  const validate_Links =  function () {
    fs.readFile(pathName,'utf-8',(err, data) => {
    const alllinks = (data.match(/https?:\S+\w/g).map(link => link)); 
    console.log(alllinks.length) 
    for (let i = 0; i<alllinks.length; i++){
      fetch(alllinks[i])
    .then(function(response) {
      if(response.status ===200 ){
        console.log(`status ${response.status}  link${alllinks[i]} ` )

      } 
      return response;
    }).catch((err) => {
      console.log(err.message)
      return err
    })
    }})
  }


read(pathName).then(() => {
  print_links()
})

validate_Links();

module.exports = read, validate_Links;
