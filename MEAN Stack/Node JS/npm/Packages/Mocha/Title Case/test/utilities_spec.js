import {expect} from 'chai';
import gatherNamesOf from './../utilities.js';

describe('gatherNamesOf', () => {
  let people;
  let names;

  beforeEach (() => {
    people = [{name: 'Günter'}, {name: 'Marceline'}, {name: 'Simon'}]
    names = gatherNamesOf(people)
  })

  it('should return an array', () => {
    expect(names).to.be.an('array')
  })

  it('should give me output the same length as the input', () => {
    expect(names.length).to.equal(people.length)
  })

  it('should give me the name of the object passed in', () => {
    expect(names[0]).to.equal(people[0].name)
  })
})
