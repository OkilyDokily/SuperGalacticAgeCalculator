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

  test('should correctly multiply age according to planet', () => {
    let sgac = new SuperGalacticAgeCalculator()


    expect(sgac.mercuryAge(4)).toEqual(4 * .24);
    expect(sgac.venusAge(4)).toEqual(4 * .62);
    expect(sgac.marsAge(4)).toEqual(4 * 1.88);
    expect(sgac.jupiterAge(4)).toEqual(4 * 11.86);
  });
});