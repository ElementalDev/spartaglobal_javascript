// This document will demonstrate scope

// Whats available to call? - this is Scope

// -- LEXICAL SCOPE --

// "Code can see out but cant see in"

// EXAMPLE

// var outsideVariable = 5; // In the global scope, Can be used by any function.
//
// function doSomething() {
//   console.log(outsideVariable);
// }
//
// doSomething();

// function doSomething () {
//   var insideVariable = 5; // This is in the local scope. It cannot be accessed by anything but this function.
// }
//
// doSomething();
//
// console.log(insideVariable);

// function firstFunction() {
//   console.log("Im in the first function");
// }
//
// function secondFunction() {
//   firstFunction(); // This will be able to access this function to use it
//   console.log("Im in the second function");
// }
//
// secondFunction();

// -- NESTED FUNCTIONS --

// EXAMPLE

function joinStringsAndPrint(string1, string2) {
  var newString = string1 + string2;

  function printString(string) {
    console.log(string);
  }
  
  printString(newString);
  return newString;
}

var string1 = "Hello, ";
var string2 = "World!";

joinStringsAndPrint(string1, string2);

//Cant use printString here because from here we can't see in
