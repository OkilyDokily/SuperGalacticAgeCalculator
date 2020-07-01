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
    
   

    let result = ageFunction.call(sgac,age);
    $("#results").text(result);
  });

  $("#lifeleft").click(function(e){
    e.preventDefault();
    let sgac = new SuperGalacticAgeCalculator();
    let age = parseInt($("#age").val());
    let planet = $("input[name='planet']:checked").val();
   
    let lifeExpectancyFunction = sgac.lifeExpectancyFunctions[planet];

    let gender = $("input[name='gender']:checked").val();
   
    let isDeveloped = $("input[name='developed']").is(':checked');
 
    let isAmerican = $("input[name='american']").is(':checked');

    let doesExercize = $("#input[exercize]").is(':checked');
    let lifeExpectancy = sgac.lifeExpectancy(gender,isDeveloped, isAmerican, doesExercize);
    let result = lifeExpectancyFunction.call(sgac,lifeExpectancy ,age);
    $("#results").text(result);
    debugger;
  });
});