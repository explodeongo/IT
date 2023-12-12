$(document).ready(function(){
    $("#button1").click(function(){
        $("ul li:first").toggle();
    })
    $("#button2").click(function(){
        $("ul li:last").toggle();
    })
    $("#button3").click(function(){
        $(".a").toggle();
    })
    $("#button4").click(function(){
        $("#test3").toggle();
    })
    $("#button5").click(function(){
        $("p").toggle();
    })
    $("div").click(function(event) {
        if (!($(this).hasClass("division2") || $(this).hasClass("division3") || $(this).hasClass("division4"))) {
            return;
        }
        var borderColour = $(this).css("border-color");
        $(this).parent().css("background-color", borderColour);
        event.stopPropagation();
    });
    $("#button6").click(function(){
        $("ul li:even").toggle();
    })
    $("#button7").click(function(){
        $("ul li:odd").toggle();
    })
    $("#button12").click(function(){
        $("*").toggle();
    })
    $("#button8").click(function(){
        var name=prompt("Please enter index value (0-7)");
        if (name >= 0 && name <=7){
            $("ul li:eq(" + name + ")").toggle();
        }
    })
    $("#button9").click(function(){
        var name=prompt("Please enter index value (0-7)");
        if (name >= 0 && name <=7){
            $("ul li:gt(" + name + ")").toggle();
        }
    })
    $("#button10").click(function(){
        var name=prompt("Please enter index value (0-7)");
        if (name >= 0 && name <=7){
            $("ul li:lt(" + name + ")").toggle();
        }
    })
    $("#button11").click(function(){
        $(".anim").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '300px'
        });
    });
    $("#dem_focus").focus(function(){
        $("#span_text").css("display", "inline").fadeOut(1500);
    });
    $("#button13").click(function(){
        $(".par").children().css({"color": "red", "border": "2px solid red"});
    })
    $("#button14").click(function(){
        var name = prompt("Please enter value of child (0-3)");
        console.log(name)
        if (name >= 0 && name <=3){
            $(".ggp :nth-child("+name+")").css("border-color", "red");
        }
    })
    $("#button15").click(function(){
        $(".chld").parent().css({"color": "black", "border": "3px solid black"});
    })
    $("#button16").click(function(){
        $("#test7").show();
    })
    $("#button17").click(function(){
        $("#test7").hide();
    })
    $("#test5:visible").css({"background-color": "yellow"});
    
    
    
})
