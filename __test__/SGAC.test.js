import {SuperGalacticAgeCalculator} from '../src/SuperGalacticAgeCalculator.js'

describe('SuperGalacticAgeCalculator', () => {
  test('should create an empty SuperGalacticAgeCalculatorObject of type object', () => {
    let sgac = new SuperGalacticAgeCalculator()

    expect((typeof sgac)).toEqual("object");
  });

});