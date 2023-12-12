$(document).ready(function(){
    $("#gethtml").click(function(){
        // Get the content of the element with id="content" using .html() and display it
        var originalContent = $("#content").html();
        console.log("Original HTML content:", originalContent); 
    })

    $("#sethtml").click(function(){
        // Set the content of the element with id="content" using .html()
        $("#content").html("New HTML Content");
    })

    $("#gettext").click(function(){
        // Get the text content of the element with id="content" using .text() and display it
        var textContent = $("#content").text();
        console.log("Text content:", textContent);
    })

    $("#replacewith").click(function(){
        // Replace the element with id="content" with a new element using .replaceWith()
        $("#content").replaceWith("<p id='replacement'>This is a replacement element</p>");
    })
    
    $("#remove").click(function(){
        // Remove the new element with id="replacement" using .remove()
        $("#replacement").remove();
    })

})
