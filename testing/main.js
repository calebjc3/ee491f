$(document).ready(function() {
    console.log("main.js loaded");
    $("button").on("click", function() {
        $(".page-header").toggleClass("black-bg");
    });
    $("p").click(function() {
        $("p").hide();
    })
    $("h1").click(function() {
        $("h1").css("background-color", "black");
    })
});