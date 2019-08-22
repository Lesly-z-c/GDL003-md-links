/*const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});
// aqui termina el ejemplo 
*/

//const mdLinks = require('../index.js');
/*
describe('mdLinks', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLinks('../README.md')).toBe(true);
    console.log('FIX ME!');
  });

});


//const FileMd = require('../index.js');
const leerLinks = require('../index.js');

 describe('ReadFile', () => {
   it('should read the second argument written in the terminal', () => {
     expect(leerLinks(null, "hola")).toBe(true);
   })
 })

 */
// test que valida .md por callback, pero con function inutil 
/*
 const leerLinks = require('../index.js');

 describe('ReadFile', () => {
   it('should read the second argument written in the terminal', () => {
     expect(leerLinks(null, "hola")).toBe(true);
   })
 })
*/

const validate_Links = require('../index.js');

describe('validate Links', () => {
  it('Should validate active or inactive links', () => {
    expect(validate_Links(true, false)).toBe(true);
  })
})
