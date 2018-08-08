// This document will demonstrate how to use loops in JS

// // -- FOR LOOP --

// for (var i = 0; i < 10; i++) {
//   console.log("This is loop " + i);
// }
// //var i = 0 - Counter variable | Starting point
// // i < 10 - Condition of loops | How many Loops
// // i++ - Incrementer

// // ARRAY EXAMPLE
//
// var myArray = ["Richard", "Is a", "Golfer"];
//
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// -- WHILE LOOPS --

// // EXAMPLE
//
// var i = 0
//
// while (i < 5) {
//   console.log("This loop has run " + i + " times");
//   i++;
// }
//
// // Will run infinitely if there is no incrementer

// -- DO-WHILE LOOPS --

// // EXAMPLE
//
// var number;
//
// do {
//   number = Math.random()
//   console.log(number);
// } while (number < 0.5);
//
// // Will always run the code once

// -- FOR IN --

// OBJECT EXAMPLE

var myObject = new Object();

myObject.a = "1";
myObject.b = "2";
myObject.c = "3";

for (var key in myObject)
{
  console.log(key);
  console.log(myObject[key]);
}
