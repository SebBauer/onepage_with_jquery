'use strict';

$(function(){
    $("a[href^='#kotwica']").on("click", function(e){
        var target = $($(this).attr("href"));
        console.log(target);
        console.log(target.offset());
        
        if(target.length){
            e.preventDefault();
            console.log('a');
            $("html").animate({
                scrollTop: target.offset().top-46.4}, 1000);
        }
    });
});