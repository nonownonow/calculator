import { expect } from 'chai/index.mjs'
import { add, subtract, multiply, divide } from '../src/index.js'

describe('calculator', () => {
  describe('add', () => {
    it('add', () => {
      expect(add(9, 3)).to.equal(12)
    })
  })
  describe('substract', () => {
    it('substract', () => {
      expect(subtract(9, 3)).to.equal(6)
    })
  })
  describe('multiply', () => {
    it('multiply', () => {
      expect(multiply(9, 3)).to.equal(27)
    })
  })
  describe('divide', () => {
    it('divide', () => {
      expect(divide(9, 3)).to.equal(3)
    })
  })
})
