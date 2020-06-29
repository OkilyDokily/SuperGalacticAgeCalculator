export class SuperGalacticAgeCalculator{
  constructor(){

  };

  multipleAge(age, decimal){
    return age * decimal;
  }

  mercuryAge(age){
    return this.multipleAge(age, .24)
  }

  venusAge(age){
    return this.multipleAge(age, .62)
  }

  marsAge(age){
    return this.multipleAge(age, 1.88)
  }

  jupiterAge(age){
    return this.multipleAge(age, 11.86)
  }

  yearsLeft(age, lifeExpectancy){
    return lifeExpectancy - age;
  }
};