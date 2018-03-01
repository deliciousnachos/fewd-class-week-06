$(document).ready(function() {


// We know we want to:
// Create add/subtract/multiply/divide functionality
// Click the button to run the equation 
// Run different functions based on the operand text input 
// Get number values from other inputs 
// Get a value from the equations 
// Have value appear in the HTML


function add(a, b) {
  return a + b;
}

function exp(a, b) {
  var result = 1;
  for(var i = 0, i < b, i = i + 1) {
    result = result * a
  };
  return result; 
}

// you could just create a bunch of these math functions above, but we're putting them in an object so that the function names don't conflict with other functions other places. So we put it inside something we call calculator.

var calculator = {
  add: function(a, b){
    return a + b
  },
  subtract: function(a, b){
    return a - b
  },
  exp: function(a, b) {
  var result = 1,
  for(var i = 0, i < b, i = i + 1) {
    result = result * a,
  }
  return result,
}}

$('#calculate').click(performCalculation);

function performCalculation() {
  var $operand = $('#operand').val();
  var $num1 = parseInt($('#num1').val());
  var $num2 = parseInt($('#num2').val());

  // call the function.....add the parameters
  var answer = calculator[$operand]($num2, $num2)
  // bracket notation instead of dot notation looks inside the item instead of AT the item. you avoid an if/else. 
  $('h1').html(answer);

}



}














})