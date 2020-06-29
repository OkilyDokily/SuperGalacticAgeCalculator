import {SuperGalacticAgeCalculator} from '../src/SuperGalacticAgeCalculator.js'

describe('SuperGalacticAgeCalculator', () => {
  test('should create an empty SuperGalacticAgeCalculatorObject of type object', () => {
    let sgac = new SuperGalacticAgeCalculator()

    expect((typeof sgac)).toEqual("object");
  });

  test('should correctly multiply age by a decimal based value', () => {
    let sgac = new SuperGalacticAgeCalculator()


    expect(sgac.multipleAge(4, 1.5)).toEqual(6);
  });
});