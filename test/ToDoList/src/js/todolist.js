//Check Off Specific Todos By Clicking
$("ul").on("click","li",function(event){
    $(this).toggleClass("selected");
});

//Click on trash icon to delete li
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Type in input to add new li
$("input[type=text]").on("keypress", function(event){
    if(event.which === 13){
        var textInput = $(this).val();
        $("ul").append("<li><span>X</span>" + textInput + "</li>");
        $(this).val('');   
    }  
});

$(".fa-plus").on("click", function(){
    $("input[type='text'").fadeToggle();
});

