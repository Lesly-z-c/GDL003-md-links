#!/usr/bin/env node

import mdLinks from "./index";

const args = process.argv;

function main(){
      mdLinks.readPath(args)
            .then((data)=>{
                console.log(data, 'holaa');
                console.log('ok-->', 'Markdown file found');
            })
            .catch((err)=>{
                console.log('err---', err)
            });  
}

main(args);

