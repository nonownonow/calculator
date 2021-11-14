import { expect } from 'chai/index.mjs'
import { add } from '../src/stringCalculator.js'

describe('stringCalculator', () => {
  describe('add', () => {
    it('null', () => {
      expect(add(null)).to.equal(0)
    })
    it('empty', () => {
      expect(add('')).to.equal(0)
    })
    it('single numeric', () => {
      const res = add('1')
      expect(res).to.equal(1)
    })
    it('split ,', () => {
      const res = add('1,2')
      expect(res).to.equal(3)
    })
    it('split :', () => {
      const res = add('1,2:3')
      expect(res).to.equal(6)
    })
    it('set custom split among characters // and \\n', () => {
      expect(add('//;\n1;2;3')).to.equal(6)
    })
    it('error', () => {
      try {
        add('-1,2,3')
      } catch (e) {
        expect(e.message).to.equal('runtimeError')
      }
    })
  })
})
