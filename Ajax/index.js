$(function(){

// AJAX (Asyncronous JavaScript and XML)
//
// Sends data from webpage to server and viceversa
//
//   on dom ready

//Vanilla

  // // create a new instance
  // var request = new XMLHttpRequest(); //use for requesting data from a server
  //
  // // setup a GET request to the chuck norris api
  // request.open("GET", "http://api.icndb.com/jokes/random"); //Trying to get something from site

  // // GET - Gets data
  // // POST - Insert a record
  // // PUT - Update a record
  // // DELETE - remove a record

  //
  // // set the callback function
  // request.addEventListener("load", function() {
  //   var data = JSON.parse(this.responseText);
  //
  //   console.log(data);
  // });

  // send the request
  // request.send();

//jQuery

  setInterval(function(){

    $.get('http://api.icndb.com/jokes/random' , function(data){
      console.log(data);
      // grab the joke from the data
      var joke = data.value.joke;

      // grab the joke title element and set the html
      $('#joke').html(joke);
    });

    // $.post('http://api.icndb.com/jokes/random' , function(data){
    //
    //   console.log(data);
    //   // grab the joke from the data
    //   var joke = data.value.joke;
    //
    //   // grab the joke title element and set the html
    //   $('#joke').html(joke);
    // });

    // //Alternative
    // $.ajax({
    //   method: "POST",
    //   url: 'http://api.icndb.com/jokes/random',
    //   data: {data: 'To Send'},
    // })
    //
    //   .done(function(msg){
    //     alert("Data saved" + msg);
    //
    //   })
  } , 5000);
});
