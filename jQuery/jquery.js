//This document will demonstrate jQuery

//  $() contains all of the properties and methods of js

$(function(event){
  console.log("DOM is ready")

  //Find element by id
  //var count = document.getElementById("count")
  var count = $("#count");

  console.log(count);

  //Find element by tag
  //var count = document.getElementsByTagName("li")
  var items = $("li");

  console.log(items);

  //Find element by class
  //var count = document.querySelectorAll("li.done")
  var done = $("li.done");

  console.log(done);

  //Create a new element
  //var li = document.createElement("li");
  var li = $("<li>New item</li>");
  var liTop = $("<li>New item top</li>");

  $("#list").prepend(liTop);
  $("#list").append(li);

  //jQuery goodness
  //for (...;....;...){}
  var todos = ["one", "two", 3, "four"];

  $(todos).each(function(index, todo) {
    console.log(todo)
  })

  //Change class colour and innerHTML
  $(".done").html("5").css("color", "red")

  //Event Listeners
  $("#myButton").on("click", function() {
    $(".done").html(Math.random() * 100).css("color", "yellow")
  })
})
