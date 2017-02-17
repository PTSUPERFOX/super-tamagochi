const chai = require('chai');
const expect = require('chai').expect
const logic = require('../server/controllers/logic')
const chaiHTTP = require('chai-http')
const url = 'http://localhost:3000'
chai.use(chaiHTTP)

describe('Check App logic', function(){
  it('expect to return object when connected', function(){
    expect(logic).to.be.a('object')
  })
  it('expect to get number from train', function(){
    expect(logic.train().awesomeness).to.be.a('number')
  })
  it('expect logic.train to have hunger fatigue thirst awesomeness property', function(){
    expect(logic.train()).to.have.property('hunger');
    expect(logic.train()).to.have.property('thirst');
    expect(logic.train()).to.have.property('fatigue');
    expect(logic.train()).to.have.property('awesomeness');
  })
  it('expect to get number from eat', function(){
    expect(logic.eat().hunger).to.be.a('number')
  })
  it('expect logic.eat to have hunger thirst property', function(){
    expect(logic.eat()).to.have.property('hunger');
    expect(logic.eat()).to.have.property('thirst');
  })
  it('expect to get number from sleep', function(){
    expect(logic.sleep().fatigue).to.be.a('number')
  })
  it('expect logic.sleep to have hunger thirst fatigue property', function(){
    expect(logic.sleep()).to.have.property('hunger');
    expect(logic.sleep()).to.have.property('thirst');
    expect(logic.sleep()).to.have.property('fatigue');
  })
  it('expect to get number from drink', function(){
    expect(logic.drink().thirst).to.be.a('number')
  })
  it('expect logic.drink to have thirst property', function(){
    expect(logic.drink()).to.have.property('thirst');
  })
  it('expect to get number from rest', function(){
    expect(logic.rest().fatigue).to.be.a('number')
  })
  it('expect logic.rest to have thirst property', function(){
    expect(logic.rest()).to.have.property('fatigue');
  })
})
let userid = '58a6a370e86a213f2180c2be'

describe('Check App logic modify database', function(){
  it('expect training to be a function', function(){
    expect(logic.training).to.be.a('function')
  })
  it('expect training to be a change all status', function(done){
    chai.request(url)
    .get(`/api/users/${userid}/train`)
    .end(function (err, res) {
      expect(res.body.hunger).to.be.equal(98)
      expect(res.body.awesomeness).to.be.equal(2)
      expect(res.body.thirst).to.be.equal(98)
      expect(res.body.fatigue).to.be.equal(98)
      done()
    })
  })
})
