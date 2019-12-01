const readPath = require('../index.js');

describe ('read be a function',  () => {
  test('Should be a err ', () => {
    readPath('prueba.md').then((data) => {
      expect(data).toBe(resolve)
    }).catch(err => err.message)
  })
})
/*
const validateLinks = require('../index.js');
describe("Shoul be a status 200", ()  => {
  test('Should validate links as status 200', () => {
    validateLinks('https://es.wikipedia.org/wiki/Markdkjnkjnj').toBe('function')
  })
})

*/
const validateLinks = require('../index.js');
describe ('vaidateLinks be a function ',  () => {
  test ('Should be a function ', () => {
    validateLinks('prueba.md').then((data) => {
      expect(data).toBe('function ')
    })
  })
  test('Should be a links' , () => {
    validateLinks('prueba.md') .then((data)=> {
      expect(data).toBe('https://es.wikipedia.org/wiki/Markdown')
    })
  })
})
