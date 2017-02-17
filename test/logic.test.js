const chai = require('chai');
const expect = require('chai').expect
const logic = require('../server/controllers/logic')

describe('Check App logic', function(){
  it('expect to return object when connected', function(){
    expect(logic).to.be.a('object')
  })
  it('expect to get number from train', function(){
    expect(logic.train()).to.be.a('number')
  })
  it('expect logic.train to have hunger fatigue thirst awesomeness property', function(){
    expect(logic.train()).to.have.property('hunger');
    expect(logic.train()).to.have.property('thirst');
    expect(logic.train()).to.have.property('fatigue');
    expect(logic.train()).to.have.property('awesomeness');
  })
  it('expect to get number from eat', function(){
    expect(logic.eat()).to.be.a('number')
  })
  it('expect logic.eat to have hunger thirst property', function(){
    expect(logic.eat()).to.have.property('hunger');
    expect(logic.eat()).to.have.property('thirst');
  })
  it('expect to get number from sleep', function(){
    expect(logic.sleep()).to.be.a('number')
  })
  it('expect logic.sleep to have hunger thirst fatigue property', function(){
    expect(logic.sleep()).to.have.property('hunger');
    expect(logic.sleep()).to.have.property('thirst');
    expect(logic.sleep()).to.have.property('fatigue');
  })
  it('expect to get number from drink', function(){
    expect(logic.drink()).to.be.a('number')
  })
  it('expect logic.drink to have thirst property', function(){
    expect(logic.drink()).to.have.property('thirst');
  })
  it('expect to get number from rest', function(){
    expect(logic.rest()).to.be.a('number')
  })
  it('expect logic.rest to have thirst property', function(){
    expect(logic.rest()).to.have.property('fatigue');
  })
})
