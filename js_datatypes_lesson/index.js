// Each datatype has extra info and actions
//A name - String
//Bank balance - float
//Shop open - boolean

//Strings are characters
//String eg
var stringEg1 = 'Hello';
var stringEg2 = "Don't do that. You'll break it";

console.log("String");

var myString = "hello";

console.log("The following are manipulations of " + myString)

//Operators
//Concatenation
console.log(myString + " Everyone")

//Properties
//Character count
console.log(myString.length);

//Methods
//Find this character in string
console.log(myString.indexOf("e"));

//take out this bit of string (starting from 0)
console.log(myString.substr(2, 4));

//Numbers is self explanitory
//Numbers eg

var numberEg = 5;
var decEg = 5.5;
var expoEg = 123e5;

console.log("Numbers");

var myNumber = 10;

//add
console.log(myNumber + 3);
//subtract
console.log(myNumber - 2);
//multiply
console.log(myNumber * 4);
//divide
console.log(myNumber / 5);
//increment
myNumber++
console.log(myNumber);

//Methods
console.log(isFinite(myNumber));


//Booleans are just true false
//Bool eg
var boolEg = true;

//Arrays are containers of variables.
//In JS they can store different datatypes
//Array eg

var arrEg = [5,6,7,"a","b"];

console.log("Arrays");

var myArray = [5,6,7,"a","b"];

// Properties
// how many items in the array
console.log(myArray.length);

// Operators
// set a value in a specific position
myArray[2] = 8;
console.log(myArray);
// print 2 arrays side by side
console.log(myArray + ["more" , "stuff"]);
// adds both arrays together and then prints them
console.log(myArray.concat(["more" , "stuff"]));

// Methods
// add another value to the end
myArray.push("I'm at the end");
console.log(myArray);
// remove and return the last element from an array
console.log(myArray.pop());
console.log(myArray);
// reverse an array
myArray.reverse();
console.log(myArray);

//Objects are a collection of data that us properties and methods (WILL BE DONE IN ANOTHER LESSON).

//Type coersion - Turning a datatype into another
console.log("Type Coersion")

var myString = "5";
var myDecimalString = "2.5";
var myNumber = 3;

// change string to integer
console.log(parseInt(myString) + myNumber );

// change string to decimal ( float )
console.log( parseFloat(myDecimalString) + myNumber );

// change decimal to integer ( remove the point )
console.log( parseInt(myDecimalString) + myNumber );
