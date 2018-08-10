// This will go through the features of DOM events

//Able to keep JS at the top - Waits for DOM(HTML) to load

document.addEventListener("DOMContentLoaded", function() {

  //Access the button
  var myButton = document.getElementById("myButton");

  //Add event listener for myButton
  myButton.addEventListener("click", handleClick);

  //handleClick function
  function handleClick() {
    console.log("Button was clicked");
  }

  //Access the Form
  var myForm = document.getElementById("myForm");

  //Add Listener to Form
  myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("The form was submitted");
  })
});
