'use strict';

$(function(){
    const sliderID = $("#slider");
    const eachSliderClassID = $(".slide");
    const slideCount = $(".slide").length;
    console.log(slideCount);
    const sliderWidth = slideCount * 100 + "%";
    console.log(sliderWidth);
    const oneSlideWidth = 100 / slideCount;
    console.log(oneSlideWidth);
    
    sliderID.css("width", sliderWidth);
    
    console.log($("#slider").css("width"));
    
    sliderID.find(eachSliderClassID).each(function(index){
        
        $(this).css({
            marginLeft: index * oneSlideWidth + "%",
            width: oneSlideWidth + "%",  
        });                                     
    });
    
    let currentSlider = 0;
    

    
    $("#prev").on("click", function(){
        slideAnimation(currentSlider--); 
    });
    
    $("#next").on("click", function(){
        slideAnimation(currentSlider++); 
        console.log(currentSlider);
        
    });
    
    function slideAnimation(){
        
    if(currentSlider == 0){
        $("#prev").css("display", "none");
    }
    
    else {
        $("#prev").fadeIn(1000);    
    }
        
    if(currentSlider == slideCount - 1){
        $("#next").css("display", "none");    
    }
        
    else {
        $("#next").fadeIn(1000);    
    }
        sliderID.animate({
            marginLeft: currentSlider * (-100) + "%"
        })
    }

});