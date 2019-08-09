$("input").bind("enterKey", function (e) {
    var val = $("input").val();
    var li = "<li>" + val + "</li>";
    $("ul").append(li);
});
$("input").keyup(function (e) {
    if (e.keyCode == 13) {
        $(this).trigger("enterKey");
        $("input").val("");
    }
});

$("i").on("click", function(){
    $("input").toggle();
});

$("span").on("click", function(){
    $(this).parent().remove();
});

$("li").hover(function(){
    $(this).children().css("width", "40px");
    $(this).children().css("opacity","1");
},function(){
    $(this).children().css("width", "0");
    $(this).children().css("opacity","0");
});