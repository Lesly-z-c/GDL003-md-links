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
  const obj = {
    broken: 0,
    ok: 0,
  }

  const showStats =  () => {
   // return Promise.all(validate_Links())
   setTimeout(() => {
     console.log(obj, 'holi')
   }, 3200)
  }
//let alllinks = link => link;
  const validate_Links =  function () {
    fs.readFile(pathName,'utf-8',(err, data) => {
    const alllinks = (data.match(/https?:\S+\w/g).map(link => link)); 
    console.log(alllinks.length) 
    for(let i = 0; i < alllinks.length; i++){
      fetch(alllinks[i])
    .then(function(response) {
      if(response.status ===200 ){
        console.log(`status ${response.status}  link${alllinks[i]} `)
        //console.log(Object.keys(alllinks[i]))
        obj.ok++
        return alllinks
      } 
      showStats()
      return response;
    }).catch((err) => {
      obj.broken++
      console.log(err.message)
      return err
    })
    }})
  }
 /*

const stats = () => {
  return new Promise(function(reject, resolve) {
    const alllinks2 = (data.match(/https?:\S+\w/g).map(link => link)); 
    if(response.status ===404) {
      console.log(Object.keys(alllinks2))
      return reject 
    } else(response.status ===200) 
        console.log(Object.keys(alllinks2))
        return resolve 
    
  })
}

*/
read(pathName).then(() => {
  print_links()
})

validate_Links();
/*showStats().then(() => {
  console.log('holi')
}).catch((err) => {
  console.log('holi error')
  return err.message
})*/
//stats();

module.exports = read, validate_Links;
