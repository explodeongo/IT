$(document).ready(function() {
    var link = $("#myLink");

    link.mouseover(function() {
        $("body").css("background-color", "green");
        link.text("I'm green now");
    });

    link.mouseout(function() {
        $("body").css("background-color", "red");
        link.text("I'm red now");
    });
});