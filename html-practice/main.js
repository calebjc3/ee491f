$(document).ready(function() {
  console.log("ready")
  $("#button").click(function(){
    $("body").css("background-color", "aquamarine");
  });
  
  console.log("ready")
  $("#button2").click(function(){
    $("body").toggleClass("navbar");
  });
});