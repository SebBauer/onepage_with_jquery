'use strict';

$(function(){
    const pageHeight = $(window).height() / 2;
    
    $(window).on("scroll", function(){
        const YOffset = $(window).scrollTop();
        
        if(YOffset > pageHeight){
            $("#to_top").fadeIn(1000);
        }
        
        else{
            $("#to_top").fadeOut(1000);
        }
    });
    const topPage = $(top).height();

        $("#to_top a").on("click", function(){
        $("html").animate({
            scrollTop: 0
            
        },1000);
            
            
          
    });
});

//$(function(){ // <- Czeka na załadowanie całego DOM
//    const pageHeight = $(window).height() / 2;
//    //console.log(pageHeight);
//    
//    $(window).on("scroll", function(){
//        const YOffset = $(window).scrollTop(); // Sprawdzamy w którym miejscu jest nasza strona (przy przewijaniu)
//        //console.log(YOffset);
//        
//        if(YOffset > pageHeight){
//            $("#to_top").fadeIn(1000);
//        }
//        else {
//            $("#to_top").fadeOut(1000);
//        }
//    })
//});