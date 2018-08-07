var num1 = prompt("Please insert your first number");
var operator = prompt("What would you like to do? (+, -, *, /)");
var num2 = prompt("Please insert your second number");

if (operator == "+")
{
  alert("Result: " + parseInt(num1) + parseInt(num2) + " please refresh");
}
else if (operator == "-")
{
  alert("Result: " + parseInt(num1) - parseInt(num2) + " please refresh");
}
else if (operator == "*")
{
  alert("Result: " + parseInt(num1) * parseInt(num2) + " please refresh");
}
else if (operator == "/")
{
  alert("Result: " + parseInt(num1) / parseInt(num2) + " please refresh");
}
else
{
  alert("This is not a valid operation, please refresh and try again");
}
