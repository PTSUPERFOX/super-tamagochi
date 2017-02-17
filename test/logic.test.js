const chai = require('chai');
const expect = require('chai').expect
const logic = require('../server/controllers/logic')

describe('Check App logic', function(){
  it('expect to return object when connected', function(){
    expect(logic).to.be.a('object')
  })
})
