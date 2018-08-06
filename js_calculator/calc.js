var num1 = prompt("Please insert your first number");
var operator = prompt("What would you like to do? (+, -, *, /)");
var num2 = prompt("Please insert your second number");

if (operator == "+")
{
  alert(parseInt(num1) + parseInt(num2));
}

if (operator == "-")
{
  alert(parseInt(num1) - parseInt(num2));
}

if (operator == "*")
{
  alert(parseInt(num1) * parseInt(num2));
}

if (operator == "/")
{
  alert(parseInt(num1) / parseInt(num2));
}
