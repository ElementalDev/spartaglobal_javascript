alert("Please choose the type of calculator you would like to use.");
calcMenu();

//This is the menu of the calculator. The parameter determines whether the user wants to play or not?
function calcMenu() {
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
      default: throw alert("This is not an option, Please refresh and try again");
    }
}
