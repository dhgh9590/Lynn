$(document).ready(function(){

    let nowScrollTop;
    let lastScrollTop = 0;

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();

        if(scrollTop != 0){
            $("#nav").addClass("active");
        }else{
            $("#nav").removeClass("active");
        }

        nowScrollTop = true;

        setInterval(function(){
            if(nowScrollTop){
                nowScrollTop = false;
                hasScroll();
            }
        }, 1000);
    });

    function hasScroll(){
        let scrollTop = $(this).scrollTop();

        if( scrollTop > lastScrollTop ){
            $("#nav").addClass("hide");
        } else{
            $("#nav").removeClass("hide");
        }

        lastScrollTop = scrollTop;
    }


});