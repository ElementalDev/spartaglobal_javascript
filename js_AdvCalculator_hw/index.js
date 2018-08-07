do {
    alert("Please choose the type of calculator you would like to use.");
    CalcMenu();
    var userChoice = useAgain();
} while(userChoice == true)

//This is the menu of the calculator. The parameter determines whether the user wants to play or not?
function CalcMenu() {
  var option = prompt("(B)Basic | (A)Advanced | (I)BMI | (T)Trip")

  //Takes the users input and directs the code to the relevant function
  switch (option) {
    case "B":
      BasicCalc()
      break;
    case "A":
      AdvCalc();
      break;
    case "I":
      bmiCalc();
      break;
    case "T":
      tripCalc();
      break;
    default: alert("This is not an option. Please try again.");
  }
}

//This function is the basic calculator
function BasicCalc() {

  var operation = prompt("What operation would you like to perform? (+-*/)");
  var num1 = 0;
  var num2 = 0;
  var result = 0;

  if (operation == "+")
  {
    num1 = parseFloat(prompt("First Number: "));
    num2 = parseFloat(prompt("Second Number: "));
    result = Addition(num1, num2);
  }
  else if (operation == "-")
  {
    num1 = parseFloat(prompt("First Number: "));
    num2 = parseFloat(prompt("Second Number: "));
    result = Subtract(num1, num2);
  }
  else if (operation == "*")
  {
    num1 = parseFloat(prompt("First Number: "));
    num2 = parseFloat(prompt("Second Number: "));
    result = Multiply(num1, num2);
  }
  else if (operation == "/")
  {
    num1 = parseFloat(prompt("First Number: "));
    num2 = parseFloat(prompt("Second Number: "));
    result = Divide(num1, num2);
  }
  else {
    alert("This is not an operation, please refresh and try again.");
  }
  alert(result);
}

function AdvCalc() {
  var operation = prompt("What operation would you like to perform? (pow or sqrt)");
  var num1 = 0;
  var num2 = 0;
  var result = 0;

  if (operation == "pow")
  {
    num = parseFloat(prompt("Number: "));
    pow = parseFloat(prompt("To the power of: "));
    result = powerOf(num, pow);
  }
  else if (operation == "-")
  {
    num = parseFloat(prompt("Number: "));
    result = SquareRoot(num);
  }
  else {
    alert("This is not an operation, please refresh and try again.");
  }
  alert(result);
}

//This function performs addition
function Addition(number1, number2) {
  return number1 + number2
}

//This function performs subtraction
function Subtract(number1, number2) {
  return number1 - number2
}

//This function performs multiplication
function Multiply(number1, number2) {
  return number1 * number2
}

//This function performs division
function Divide(number1, number2) {
  return number1 / number2
}

//This function uses "Power of" operations
function PowerOf(number1, powerOf) {
  return Math.pow(number1, powerOf);
}

//This function performs square root operations
function SquareRoot(number1) {
  return Math.sqrt(number1);
}

//This function is the BMI calculator. It uses weight in kilograms and height in centimeters squared
function CalcBMI(weightKg, heightCm) {
  return weightKg * (Math.pow(heightCm, 2));
}

function useAgain() {
  var choice = prompt("Would you like to use BAIT Calculator again? (y/n)")

  if (choice == "y")
  {
    return true;
  }
  else if (choice == "n") {
    return false;
  } else {
    alert("This is not an option. Please refresh and try again")
  }
}
