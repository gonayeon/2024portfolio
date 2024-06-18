$(function(){
    $('#menuWrap').hover(function(){
        $(this).find('nav').stop().slideDown();
    },function(){
        $(this).find('nav').stop().slideUp();
    });
});

function headerNavSlide(element) {
    $(element).hover(function(){
        $(element).find('nav').stop().slideToggle();
    })
}