$(document).ready(function(){

    let tl1 = gsap.timeline();


                
    gsap.from(".section1 .text_box h2",{ //움직여야 하는 요소 선택 / from은 역재생 to는 정상진행 
        scrollTrigger:{
            trigger:"#section1",  //시작,끝 범위 요소
            start:"-10% 50%", // 처음0%는 시작지점,50%는 내가 보는 시야 /start와 scroller-start가 맞나면 시작
            end: "-10% 50%", // 처음2%는 시작지점,50%는 내가 보는 시야
            //toggleActions:"restart none none none", //restart pause resume reverse
            scrub:3,
            markers:false, //시야 on/off 표시
        },
        x:-800,
        opacity:0,
    },1);

    gsap.from(".section1 .text_box .p1",{ 
        scrollTrigger:{
            trigger:"#section1", 
            start:"-10% 50%", 
            end: "-10% 50%", 
            scrub:4,
            markers:false, 
        },
        x:-1000,
        opacity:0,
    },1);

    gsap.from(".section1 .text_box .p2",{
        scrollTrigger:{
            trigger:"#section1",  
            start:"-10% 50%", 
            end: "-10% 50%",
            scrub:5,
            markers:false, 
        },
        x:-1200,
        opacity:0,
    },1);

    gsap.from(".section1 .img_box",{ 
        scrollTrigger:{
            trigger:"#section1", 
            start:"-10% 50%", 
            end: "-10% 50%", 
            scrub:5,
            markers:false,
        },
        x:200,
        opacity:0,
    },1);

    gsap.from(".section1 .img2_box",{ 
        scrollTrigger:{
            trigger:"#section1", 
            start:"-10% 50%", 
            end: "-10% 50%", 
            scrub:5,
            markers:false,
        },
        y:200,
        opacity:0,
    },1);

    gsap.from(".section1 .line1",{ 
        scrollTrigger:{
            trigger:"#section1", 
            start:"-10% 50%", 
            end: "-10% 50%", 
            scrub:3,
            markers:false,
        },
        height:0,
        opacity:0,
    },1);

    gsap.from(".section1 .line2",{ 
        scrollTrigger:{
            trigger:"#section1", 
            start:"30% 50%", 
            end: "30% 50%", 
            scrub:10,
            markers:false,
        },
        height:0,
        opacity:0,
    },1);


});

