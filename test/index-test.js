

var index = require("../index.js")

describe('what-is-a-test', () =>{
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect("74").toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect("74").toBeLessThan("40")
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})

