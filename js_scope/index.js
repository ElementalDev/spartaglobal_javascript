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

// function joinStringsAndPrint(string1, string2) {
//   var newString = string1 + string2;
//
//   function printString(string) {
//     console.log(string);
//
//     //Q3 - Will work
//     console.log(newString);
//
//     //Q4 - Will work
//     console.log(string1 + string2);
//   }
//
//   printString(newString);
//   return newString;
// }
//
// var string1 = "Hello, ";
// var string2 = "World!";
//
// joinStringsAndPrint(string1, string2);
//
// //Q1 - Will not run
// printString("run from outside joinString")
//
// //Q2 - Will not run
// console.log("newString");

//Cant use printString here because from here we can't see in

// -- GLOBAL SCOPE --

// This is REALLY bad practice, It can be accessed anywhere, could clash, could be changed unintentionally etc.

// var i = 0; // This is GLOBAL
// i = 0; // This is also GLOBAL
//
// function doSomething() {
//   var i = 0; // This is local
// }

// -- CLOSURES --

// This is whatever a function can see when it was declared. i.e. global variables/functions + local variables/functions etc.

// EXAMPLE

// // Passing functions as variables
//
// function sayHello() {
//   console.log("Hello");
// }
//
// function funcCaller(functionToRun) {
//   functionToRun();
// }
//
// funcCaller(sayHello);

//Declaration - Helps to find out closure
// function onTimerComplete() {
//   console.log("Timer finished");
// }
//
// setTimeout(onTimerComplete, 3000);

// COUNTER EXAMPLE

// function createCounter() {
//   var total = 0;
//
//   return function() {
//     total++;
//     return total;
//   }
// }
//
// var counter = createCounter();
//
// counter();
// counter();
// counter();
//
// var total = counter();
//
// console.log(total);

// FOR EXAMPLE

// for (var i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, (i * 1000));
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout((function(j) {
//     console.log(j);
//   })(i), (i * 1000));
// }
