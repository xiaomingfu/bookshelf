
$(".hightlight").css("width", "200px");
$("#third").css("border","1px solid orange");
$("div:first-of-type").css("color","pink");
$("li").addClass("correct");
$("li").toggleClass("correct");


// jQuery Event
$("button").click(function(){
    $(this).css("background", "pink");
});

$("button").click(function(){
    var text = $(this).text();
    console.log("You clicked " + text);
});

$("input").keypress(function(event){
    if(event.which === 13){
        alert("You hit Enter!")
    }
});
$("input").on("keypress", function(){
    console.log("Pressed!");
});
$("button").on("mouseenter",function(){
    $(this).css("color","blue");
});

// jQuery Effect
$("button").on("click", function(){
    // $(".effect").fadeOut("slow", function(){
    //     // $(this).remove();
    // });
    // $(".effect").fadeIn("fast");
    // $(".effect").fadeToggle(500);
    // $(".effect").slideUp();
    // $(".effect").slideDown();
    $(".effect").slideToggle();
});
