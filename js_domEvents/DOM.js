// This will go through the features of DOM events

// //Able to keep JS at the top - Waits for DOM(HTML) to load
//
document.addEventListener("DOMContentLoaded", function() {
//
//   //Access the button
//   var myButton = document.getElementById("myButton");
//
//   //Add event listener for myButton
//   myButton.addEventListener("click", handleClick);
//
//   //handleClick function
//   function handleClick() {
//     console.log("Button was clicked");
//   }
//
//   //Access the Form
//   var myForm = document.getElementById("myForm");
//   var name = "";
//
//   //Add Listener to Form
//   myForm.addEventListener("submit", function(event) {
//     //Prevents the default action of what its attached to
//     event.preventDefault();
//
//     var firstNameField = document.getElementById("firstName");
//
//     if(!firstNameField.value) {
//       console.log("Please enter a name");
//       firstNameField.style.backgroundColor = "red"
//     } else {
//       name = firstNameField.value;
//       firstNameField.style.backgroundColor = "lightgreen"
//     }
//     console.log(name);
//   })

  // -- EVENT BUBBLING AND CAPTURING --

  //Capturing is when JS works out what events are in the tree from top to bottom within nests.
  //DOM events then go up the tree (they bubble up).
  //If you add true, they will execute on the capture phase

  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  var div3 = document.getElementById("div3");

  div1.addEventListener("click", function(event) { //Will print 1
    event.stopPropagation();
    console.log("Div 1 was clicked")
  })

  div2.addEventListener("click", function(event) { //Will print 2, 1 because its within div1
    event.stopPropagation();
    console.log("Div 2 was clicked")
  })

  div3.addEventListener("click", function(event) { // Will print 3, 2, 1 because its within div2 which is within div1
    event.stopPropagation();
    console.log("Div 3 was clicked")
  })
});
