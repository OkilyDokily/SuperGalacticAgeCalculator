import $ from 'jquery';
import {SuperGalacticAgeCalculator} from './SuperGalacticAgeCalculator';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#howold").click(function(){
  
    let sgac = new SuperGalacticAgeCalculator();
    let age = $("#age").val();
    let planet = $("input[name='planet']:checked").val();
    let ageFunction = sgac.ageFunctions[planet];
    let result = ageFunction.call(sgac,age);
    $("#results").text(result);
  });

  $("#howold").click(function(){
    
    let sgac = new SuperGalacticAgeCalculator();
    let age = $("#age").val();
    let planet = $("input[name='planet']:checked").val();
    let lifeExpectancyFunction = sgac.lifeExpectancyFunctions[planet];

    let gender = $("#input[gender]:checked").val();
    
    let lifeExpectancy = sgac.lifeExpectancy(gender)
    let result = lifeExpectancyFunction.call(sgac,lifeExpectancy ,age);
    $("#results").text(result);
  });
});