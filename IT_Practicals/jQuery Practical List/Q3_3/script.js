// Event handler for the "Set Attribute" button
$("#attrBtn").click(function() {
    $("#target").attr("style", "font-size:30px;");
});

// Event handler for the "Remove Attribute" button
$("#removeAttrBtn").click(function() {
    $("#target").removeAttr("style");
});

// Event handler for the "Add Class" button
$("#addClassBtn").click(function() {
    // Add the 'highlight' class to the target element
    $("#target").addClass("highlight");
});

// Event handler for the "Remove Class" button
$("#removeClassBtn").click(function() {
    // Remove the 'highlight' class from the target element
    $("#target").removeClass("highlight");
});