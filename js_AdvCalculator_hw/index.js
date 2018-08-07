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
      BMICalc();
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

//This function is the advanced calculator
function AdvCalc() {
  var operation = prompt("What operation would you like to perform? (pow or sqrt)");
  var num1 = 0;
  var num2 = 0;
  var result = 0;

  if (operation == "pow")
  {
    num = parseFloat(prompt("Number: "));
    pow = parseFloat(prompt("To the power of: "));
    result = PowerOf(num, pow);
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

//This function is the BMI calculator
function BMICalc() {
  var measurementType = prompt("Metric or Imperial? (imp/met)");
  var weight = parseFloat(prompt("What is your weight (imp: lbs | met: kg)?"));
  var height = parseFloat(prompt("What is your height? (imp: ins | met: m)"));
  var result = 0;
  var category = ["Underweight", "Normal", "Overweight", "Obese"];

  alert("Please note that BMI is a guideline and doesn't take muscle mass into account when working out category");

  result = CalcBMI(weight, height, measurementType);

  alert("Your BMI is: " + result);

  if (result >= 16 && result < 18.5) {
    alert(category[0]);
  }
  else if (result >= 18.5 && result < 25) {
    alert(category[1]);
  }
  else if (result >= 25  && result < 30) {
    alert(category[2]);
  }
  else if (result > 35) {
    alert(category[3]);
  }
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

//This function is the BMI calculator.
function CalcBMI(weight, height, measurementType) {

  if (measurementType == "met") {
    return weight / (Math.pow(height, 2));
  }
  else if (measurementType == "imp") {
    return 703 * (weight / (Math.pow(height, 2)))
  }
}

function useAgain() {
  var choice = prompt("Would you like to use BAIT Calculator again? (y/n)");

  if (choice == "y"){
    return true;
  }
  else if (choice == "n") {
    return false;
  }
  else if (choice == null) {
    return false;
  }
  else {
    alert("This is not an option. Please refresh and try again")
  }
}
