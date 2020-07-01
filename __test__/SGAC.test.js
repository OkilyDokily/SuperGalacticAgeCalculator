import {SuperGalacticAgeCalculator} from '../src/SuperGalacticAgeCalculator.js'

describe('SuperGalacticAgeCalculator', () => {
  test('should create an empty SuperGalacticAgeCalculatorObject of type object', () => {
    const sgac = new SuperGalacticAgeCalculator()

    expect((typeof sgac)).toEqual("object");
  });

  test('should correctly multiply age by a decimal based value', () => {
    const sgac = new SuperGalacticAgeCalculator()


    expect(sgac.multiplyAge(4, 1.5)).toEqual(6);
  });

  test('should correctly multiply age according to planet', () => {
    const sgac = new SuperGalacticAgeCalculator()


    expect(sgac.mercuryAge(4)).toEqual(4 * .24);
    expect(sgac.venusAge(4)).toEqual(4 * .62);
    expect(sgac.marsAge(4)).toEqual(4 * 1.88);
    expect(sgac.jupiterAge(4)).toEqual(4 * 11.86);
  });

  test('return number of years left in life with a given life expectancy and age', () => {
    const sgac = new SuperGalacticAgeCalculator()
    
    expect(sgac.yearsLeft(10, 15)).toEqual(5);
  });

  test('return a life expectancy value for given demographics of sex, developed country and is american', () => {
    const sgac = new SuperGalacticAgeCalculator()
    
    expect(sgac.lifeExpectancy("male",true,true,true)).toEqual(75);
  
  });

  test('return a years of life left for given demographics on different planets', () => {
    const sgac = new SuperGalacticAgeCalculator()
    const age = 30;
    const lifeExpectancy = sgac.lifeExpectancy("male",true,true,true)
    expect(sgac.mercuryLifeLeft(lifeExpectancy, age)).toEqual(45 * .24);
    expect(sgac.venusLifeLeft(lifeExpectancy, age)).toEqual(45 * .62);
    expect(sgac.marsLifeLeft(lifeExpectancy, age)).toEqual(45 * 1.88);
    expect(sgac.jupiterLifeLeft(lifeExpectancy, age)).toEqual(45 * 11.86);
  });
});