import $ from 'jquery';
import {SuperGalacticAgeCalculator} from './SuperGalacticAgeCalculator';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#howold").click(function(e){
    e.preventDefault();
    let sgac = new SuperGalacticAgeCalculator();
    let age = parseInt($("#age").val());
    let planet = $("input[name='planet']:checked").val();
    let ageFunction = sgac.ageFunctions[planet];
    
    if(!(isNaN(age)) && !(planet == undefined)){
      let result = ageFunction.call(sgac,age);
      $("#results").text(`You would be ${result} years old on ${planet}`);
    }
    else{
      $("#results").text("Please specify an age and pick a planet");
    }
  });

  $("#lifeleft").click(function(e){
    e.preventDefault();
    let sgac = new SuperGalacticAgeCalculator();
    let age = parseInt($("#age").val());
    let planet = $("input[name='planet']:checked").val();
    
    let gender = $("input[name='gender']:checked").val();
    let isDeveloped = $("input[name='developed']").is(':checked');
    let isAmerican = $("input[name='american']").is(':checked');
    let doesExercize = $("#input[exercize]").is(':checked');
    
    if(!(isNaN(age)) && !(planet == undefined) && !(gender== undefined)){
      let lifeExpectancy = sgac.lifeExpectancy(gender,isDeveloped, isAmerican, doesExercize);
      let lifeExpectancyFunction = sgac.lifeExpectancyFunctions[planet];
      let result = lifeExpectancyFunction.call(sgac,lifeExpectancy ,age);
      if(result >= 0){
        $("#results").text(`You have ${result} years left to live on ${planet}`);
      }
      else{
        $("#results").text(`You have lived ${result * -1} years past your life expectancy on ${planet}`);
      }
    }
    else{
      $("#results").text("Please specify your age, the planet, and a gender");
    }
    
  });
});