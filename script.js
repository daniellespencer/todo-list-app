// check off the specific todos by clicking
$("li").click(function(event){
    $(this).toggleClass("completed");
    
});

//click on x to delete todo
$("span").click(function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});