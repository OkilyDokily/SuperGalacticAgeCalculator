export class SuperGalacticAgeCalculator{
  constructor(){
    this.ageFunctions = {"mercury":this.mercuryAge,"venus":this.venusAge,"mars":this.marsAge,"jupiter":this.jupiterAge};
    this.lifeExpectancyFunctions = {"mercury":this.mercuryLifeLeft,"venus":this.venusLifeLeft,"mars":this.marsLifeLeft,"jupiter":this.jupiterLifeLeft};
  }
  
  multiplyAge(age, decimal){
    return age * decimal;
  }

  mercuryAge(age){
    return this.multiplyAge(age, .24);
  }

  venusAge(age){
    return this.multiplyAge(age, .62);
  }

  marsAge(age){
    return this.multiplyAge(age, 1.88);
  }

  jupiterAge(age){
    return this.multiplyAge(age, 11.86);
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
      total -= 15;
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
    return this.multiplyAge(difference, .24);
  }

  venusLifeLeft(lifeExpectancy, age){
    let difference = lifeExpectancy - age;
    return this.multiplyAge(difference, .62);
  }

  marsLifeLeft(lifeExpectancy, age){
    let difference = lifeExpectancy - age;
    return this.multiplyAge(difference, 1.88);
  }

  jupiterLifeLeft(lifeExpectancy, age){
    let difference = lifeExpectancy - age;
    return this.multiplyAge(difference, 11.86);
  }

}