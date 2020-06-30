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

  lifeExpectancy(sex, developed, isAmerican, exercisesRegularly){
    if(isAmerican){
      developed = true;
    }
    let total = 0;

    if (sex === "male"){
      total += 70;
    }
    else if(sex === "female"){
      total += 80;
    }
    if(!developed && !isAmerican){
      total -= 15
    }
    if(isAmerican){
      total -= 5;
    }
    if(exercisesRegularly){
      total += 10;
    }
    return total;
  }

  mercuryLifeLeft(lifeExpectancy, age){
    let difference = lifeExpectancy - age;
    return this.multipleAge(difference, .24);
  }

  venusLifeLeft(lifeExpectancy, age){
    let difference = lifeExpectancy - age;
    return this.multipleAge(difference, .62)
  }

  marsLifeLeft(lifeExpectancy, age){
    let difference = lifeExpectancy - age;
    return this.multipleAge(difference, 1.88)
  }

  jupiterLifeLeft(lifeExpectancy, age){
    let difference = lifeExpectancy - age;
    return this.multipleAge(difference, 11.86)
  }
};