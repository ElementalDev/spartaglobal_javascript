// This will go through the features of DOM

// -- GetElementById --

var wrapperDiv = document.getElementById("wrapper");
wrapperDiv.style.backgroundColor = "blue";

// -- GetElementsByTagName --

var lis = document.getElementsByTagName("li"); //Returns an array of elements with tag of li
lis[1].innerHTML = "Im an LI and I've changed";

// -- querySelector --

var selected = document.querySelectorAll("li.selected"); //Returns an array of lists where class = selected
for (var i = 0; i < selected.length; i++) {
 selected[i].style.color = "red"
}

// -- Creating elements --

var ptag = document.createElement("p");

ptag.innerHTML = "A brand new p tag"

document.body.appendChild(ptag); //Will insert in the bottom of the HTML

var ul = document.getElementById("list");
var listItem = document.createElement("li");
listItem.innerHTML = "New list item JS";

ul.appendChild(listItem);//Will insert at the bottom of the ul tag

//Turn every other list item into a different color

for (var i = 0; i < lis.length; i++) {
  var className = i % 2 == 0 ? "even" : ""; //Mini if statement (Ternery)
  var li = lis[i];

  li.className = className;
}

var countSpan = document.getElementById("count");

countSpan.innerHTML = lis.length;
