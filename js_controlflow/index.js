// //This JS file demonstrates different control flow methods
//
// // IF Statements
//
// /* Very like how we would say things in the english language:
//
// say an item costs £10:
//
//   - if you have £10 | how if statements evaluate it - TRUE
//     - you can buy it
//   - if you dont have £10 | how if statements evaluate it - FALSE || !TRUE
//     - you can't buy it
//
//     if the condition is met / is true, then the code will run. If its false then it won't.
// */
//
// //Example
//
// var amount_of_money = parseFloat(prompt("How much money do you have?"));
// var drinks_drunk = parseInt(prompt("How many drinks have you had already?")); // Used later
// var price_of_crisps = parseFloat(prompt("How much are the crisps?")); // Used later
//
// if(/* condition */ amount_of_money >= 10) {
//   /* code */
//   console.log("Another drink please!");
// }
//
// // This will run the code inside if user inputs more than or equal to 10 as it will evaluate to true.
// // If it was lower then 10, it will be false and the code inside the if statement would be ignored.
//
// // You can use else to execute some code if none of the above conditions within the if statement are TRUE
//
// //Example
//
// if(amount_of_money >= 10) {
//   console.log("Another drink please!");
// } else {
//   console.log("I'm off home!");
// }
//
// // Now if the user inputs anything less that 10, it will execute the code in the else statement
//
// //Sometimes you need to do something if there is another condition met after the first failed
//
// //Example
//
// if(amount_of_money >= 10) {
//   console.log("Another drink please!");
// }
// else if (amount_of_money > 5) {
//   console.log("Just some crisps then");
// }
// else {
//   console.log("I'm off home!");
// }
//
// // Now if a user inputs something more than 5, it will evaluate the else if.
//
// //Comparative operators
//
// // > - More than
// // < - Less than
// // >= - More than or equal to
// // <= - Less than or equal to
//
// //Logical operators
//
// // && - AND - just & is bitwise
// // || - OR - just | is bitwise
// // ! - NOT
//
// //Example
//
// if(amount_of_money >= 10 && drinks_drunk < 3) {
//   console.log("Another drink please!");
// }
// else if ((amount_of_money > 5  && amount_of_money < 10) || price_of_crisps == 0) {
//   console.log("Just some crisps then");
// }
// else {
//   console.log("I'm off home!");
// }
//
// // So now if you have more than £10 and have had less than 3 drinks then you can have another
// // If you have more than £5 but less than 10 or the crisps are free, then you can have some crisps
// // Anything else, then you go home
//
// // Switch statements
//
// // Switch is useful when your if statements become too long and you want to condense them into something a little neater.
//
// //IF version
// var name = "tim"
//
// if (name === "bob") {
//   console.log("hi bob");
// }
// else if (name === "tim") {
//   console.log("hi tim");
// }
// else if (name === "steve") {
//   console.log("hi steve");
// }
//
// // Switch version
// switch (name) {
//   case "bob":
//     console.log("hi bob");
//     break;
//   case "tim":
//     console.log("hi tim");
//     break;
//   case "steve":
//     console.log("hi steve");
//     break;
//   default:
//     console.log("hi default person");
// }
//
// // Break statements are required because otherwise it will execute all of the code until it finds a break
// // Or until the switch statement ends.
