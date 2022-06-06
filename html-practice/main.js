$(document).ready(function() {
  console.log("ready!");
  $("button").html("Click Here")
  $("button").on("click", function( event ) {
    ($("p").toggle("important"));
  });

  console.log("ready!");
  $("#toggle").html("Show Navbar")
  $("#toggle").on("click", function( event ) {
    $("#toggle").toggle("slow");
  });
}); 