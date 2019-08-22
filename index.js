const fs = require('fs');
const fetch = require("node-fetch");

//function to read an md file
  fs.readFile(process.argv[2],'utf-8',(err, data) => {
    if (err) {
      console.log('error :' , err);
      return false;
    }else {
      console.log("Markdown file is found"); 
     print_links (data) 
       return true;
    }
  });

   
 
// start the function to validate plain text links with regular expressions
  let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;

  function print_links(data){
    if(regex.test(data)){
      console.log("content links");
      console.log(data.match(regex).map(link => link));
      return true;

    }else {
      console.log("no content links");
      return false;
    }
  }

  const bringInf = function () {
    fetch('https://github.com/Lesly-z-c/GDL003-md-links')
    .then(function(response) {
      console.log(response.status)
      return response;
    }).catch((err) => {
      console.log(err.message)
      return err
    })
  }

  bringInf();





