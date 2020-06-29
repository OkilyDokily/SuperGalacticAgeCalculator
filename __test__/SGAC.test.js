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

  test('return number of years left in life with a given life expectancy and age', () => {
    let sgac = new SuperGalacticAgeCalculator()
    
    expect(sgac.yearsLeft(10, 15)).toEqual(5);
  });

  test('return a life expectancy value for given demographics of sex, developed country and is american', () => {
    let sgac = new SuperGalacticAgeCalculator()
    
    expect(sgac.lifeExpectancy("male",true,true,true)).toEqual(75);
  });

});