// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (num1, num2) {
  return  num1 * num2;
}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result

function addThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers

function smallestNumber(num1, num2) {
    return Math.min(num1, num2);
}

// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// 5. Write a function called 'reverseString' that returns the reverse a string

function reverseString(revString) {
  return revString.split("").reverse().join("");
}

// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter

function disemvowel(vowelString) {
  return vowelString.replace(/[aeiou]/gi, '');
}

// 7. Write a function called 'removeOdd' that removes all ODD number from an array

function removeOdd(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++)
  {
    if (!(arr[i] % 2)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 8. Write a function called 'removeEven' that removes all EVEN number from an array

function removeEven(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] % 2) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length

function longestString(arr) {

  var longest = "";

  for (var i = 0; i < arr.length; i++) {

    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]

function allElementsExceptFirstThree(arr) {
  arr = arr.reverse();
  for (var i = 0; i < 3; i++) {
    arr.pop();
  }

  return arr.reverse();

  // Another solution: return arr.splice(0, 3)
}

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}

function convertArrayToAnObject(arr) {

// Couldn't figure out during time. This is the solution afterwards.

  var newArr = {};

  if ((arr.length % 2) == 0) {
    for (var i = 0; i < arr.length; i++) {
      newArr[arr[i]] = arr[i+1]
      i++;
    }
  }
  return newArr;
}

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules

// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz(num) {

  if ((num % 3) == 0 && (num % 5) == 0) {
    return "FizzBuzz";
  }
  else if ((num % 5) == 0) {
    return "Buzz";
  }
  else if ((num % 3) == 0) {
    return "Fizz";
  }
  else {
    return num;
  }
}
