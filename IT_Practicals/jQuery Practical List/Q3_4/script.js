// Event handler for the "Get Parent" button
$("#parentBtn").click(function() {
    // Get the direct parent of the #child element
    var parentElement = $("#child").parent();
    parentElement.addClass("highlight");
});

// Event handler for the "Get Parents" button
$("#parentsBtn").click(function() {
    // Get all ancestors of the #child element
    var ancestorElements = $("#child").parents();
    ancestorElements.addClass("highlight");
});

// Event handler for the "Get Closest" button
$("#closestBtn").click(function() {
    // Get the closest ancestor that matches the selector
    var closestElement = $("#child").closest("#grandparent");
    closestElement.addClass("highlight");
});