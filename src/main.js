import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { SuperGalacticAgeCalculator} from './SuperGalacticAgeCalculator';

$(document).ready(function(){
  $("#howold").click(function(e){
    
    let sgac = new SuperGalacticAgeCalculator();
    let age = $("#age").val();
    let planet = $("input[name='planet']:checked").val();
    let ageFunction = sgac.ageFunctions[planet];
    let result = ageFunction(age);
    $("#results").text(result);
  });
});