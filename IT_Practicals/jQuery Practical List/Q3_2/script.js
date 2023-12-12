$(document).ready(function(){
    // Event handlers for the buttons
    $("#beforeBtn").click(function() {
        $("#target").before("<h2>Before Target</h2>");
    });

    $("#afterBtn").click(function() {
        $("#target").after("<h2>After Target</h2>");
    });

    $("#appendBtn").click(function() {
        $("#target").append("<p>Appended Content</p>");
    });

    $("#prependBtn").click(function() {
        $("#target").prepend("<p>Prepended Content</p>");
    });

    $("#removeBtn").click(function() {
        $("#target").remove();
    });

    $("#addBtn").click(function() {
        var newElement = $("<div>New Element</div>");
        var existingElements = $("p");
        var combinedSet = existingElements.add(newElement);
        $("body").append(combinedSet);
    });

});