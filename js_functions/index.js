// // This is a JS file to demostrate functions

// // DRY - (D)on't (R)epeat (Y)ourself

// //Writing basic functions
// var result = 5 + 10;
// var result2 = 1 + 2;

// console.log(result);

// // Declaring a function

// // Named function
// function addNumbers(/* Parentheses for parameters */) {
//   var functionResult = 5 + 10;
//   console.log(functionResult);
// }

// // Unnamed/Variable function (See distinction later)
// var addNumbers2 = function() {
//   var functionResult2 = 5 + 10;
//   console.log(functionResult2);
// }

// // Calling the function

// addNumbers();
// addNumbers2();

// // Hoisting
// makeNoise();

// //This works because the declaration is hoisted to the top
// function makeNoise() {
//   alert("how annoying - we will never use these in our games");
// }


// Parameters
// function addNumbersTogether(number1, number2) {
//   var result = number1 + number2;
//   console.log(result);
// }

// // Pass in arguments when calling
// addNumbersTogether(1, 5);
// // It is now reusable
// addNumbersTogether(10, 5);

// Returns
function addNumbersWithReturn(number1, number2) {
  var result = number1 + number2;
  //Sends the result to whatever had called the function
  return result;
}

var answer1 = addNumbersWithReturn(1, 3);
