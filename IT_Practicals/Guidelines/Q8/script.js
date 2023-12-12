$(document).ready(function () {
    // Function to redesign the page
    function redesignPage() {
        // Add more styling and layout changes as needed
        $("#content").css({
            "background-color": "#e6f7ff",
            "padding": "30px",
            "border-radius": "12px",
            "box-shadow": "0 0 15px rgba(0, 0, 0, 0.2)"
        });

        $("h1, h2, p").css({
            "color": "#333"
        });

        $("body").css({
            "font-family": "Arial, sans-serif",
            "background-color": "#f4f4f4",
            "margin": "0",
            "padding": "0",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
            "height": "150vh",
        });

        $("#styleButton").css({
            "margin-top": "20px",
            "padding": "10px",
            "font-size": "16px",
            "cursor": "pointer",
        })
    }

    // Event listener for the style button
    $("#styleButton").on("click", function () {
        redesignPage();
    });
});
