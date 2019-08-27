const read = require('../index.js');

describe ('read be a function',  () => {
  test('Should be a err ', () => {
    read('prueba.md').then((data) => {
      expect(data).toBe('prueba')
    }).catch(err => err.message)
  })
})

const print_Links = require('../index.js');
describe ('print_links be a function ',  () => {
  test ('Should be a function ', () => {
    print_Links('prueba.md').then((data) => {
      expect(data).toBe('function ')
    })
  })
  test('Should be a links' , () => {
    print_Links('prueba.md') .then((data)=> {
      expect(data).toBe('https://es.wikipedia.org/wiki/Markdown')
    })
  })
})
/*
const validate_links = require('../index.js');
describe ('Should be a function', () => {
  test ('Should be a function ', () => {
    validate_links('prueba.md').toBe('function')
    })
  })
*/
