$(document).ready(function(){

    let tl1 = gsap.timeline();

    /* 가로 모드
    gsap.registerPlugin(ScrollTrigger);
    let SECTIONS = gsap.utils.toArray("section");

        gsap.to(SECTIONS, {
        xPercent: -100 * ( SECTIONS.length -1 ),
        ease: "none",
        scrollTrigger: {
            trigger: '#main',
            end: ()=> "+=" + document.querySelector("#main").offsetWidth,
            pin: true,
            scrub: 1,
            snap: 1 / (SECTIONS.length -1),
        }
    });
    */

    gsap.from(".section1 .text_box h2",{ //움직여야 하는 요소 선택 / from은 역재생 to는 정상진행 
        scrollTrigger:{
            trigger:"#section1",  //시작,끝 범위 요소
            start:"-10% 50%", // 처음0%는 시작지점,50%는 내가 보는 시야 /start와 scroller-start가 맞나면 시작
            end: "-10% 50%", // 처음2%는 시작지점,50%는 내가 보는 시야
            //toggleActions:"restart none none none", //restart pause resume reverse
            scrub:4,
            markers:false, //시야 on/off 표시
        },
        x:-800,
        opacity:0,
    },1);

    gsap.from(".section1 .text_box .p1",{ 
        scrollTrigger:{
            trigger:"#section1", 
            start:"-5% 50%", 
            end: "-5% 50%", 
            scrub:4,
            markers:false, 
        },
        x:-1000,
        opacity:0,
    },1);

    gsap.from(".section1 .text_box .p2",{
        scrollTrigger:{
            trigger:"#section1",  
            start:"0% 50%", 
            end: "0% 50%",
            scrub:4,
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
            start:"-20% 50%", 
            end: "10% 50%", 
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
            end: "80% 50%", 
            scrub:6,
            markers:false,
        },
        height:0,
        opacity:0,
    },1);

    gsap.from(".section2 .line3",{ 
        scrollTrigger:{
            trigger:"#section2", 
            start:"-10% 50%", 
            end: "0% 50%", 
            scrub:6,
            markers:false,
        },
        width: 0,
        opacity:0,
    },1);

    gsap.from(".section2 p",{ 
        scrollTrigger:{
            trigger:"#section2", 
            start:"-40% 50%", 
            end: "-20% 50%", 
            scrub:4,
            markers:false,
        },
        y:100,
        opacity:0,
    },1);

    gsap.from(".section3 .item .img_box",{ 
        scrollTrigger:{
            trigger:"#section3", 
            start:"-20% 50%", 
            end: "10% 50%", 
            scrub:4,
            markers:false,
        },
        y:300,
        opacity:0,
    },1);

    gsap.from(".section3 .item .text_box",{ 
        scrollTrigger:{
            trigger:"#section3", 
            start:"-5% 50%", 
            end: "25% 50%", 
            scrub:4,
            markers:false,
        },
        y:300,
        opacity:0,
    },1);

    gsap.from(".section4 .img_box",{ 
        scrollTrigger:{
            trigger:"#section4", 
            start:"-20% 50%", 
            end: "20% 50%", 
            scrub:4,
            markers:false,
        },
        y:300,
        opacity:0,
    },1);

    gsap.from(".section4 .text_box h2",{ 
        scrollTrigger:{
            trigger:"#section4", 
            start:"-30% 50%", 
            end: "-10% 50%", 
            scrub:4,
            markers:false,
        },
        y:300,
        opacity:0,
    },1);

    gsap.from(".section4 .text_box p",{ 
        scrollTrigger:{
            trigger:"#section4", 
            start:"-25% 50%", 
            end: "-5% 50%", 
            scrub:4,
            markers:false,
        },
        y:400,
        opacity:0,
    },1);

    gsap.from(".section4 .line4",{ 
        scrollTrigger:{
            trigger:"#section4", 
            start:"-50% 50%", 
            end: "0% 50%", 
            scrub:6,
            markers:false,
        },
        height:0,
        opacity:0,
    },1);

    gsap.from(".section4 .line5",{ 
        scrollTrigger:{
            trigger:"#section4", 
            start:"20% 50%", 
            end: "100% 50%", 
            scrub:6,
            markers:false,
        },
        height:0,
        opacity:0,
    },1);

    gsap.from(".section5 p",{ 
        scrollTrigger:{
            trigger:"#section5", 
            start:"0% 50%", 
            end: "20% 50%", 
            scrub:6,
            markers:false,
        },
        y:200,
        opacity:0,
    },1);

    gsap.from(".section6 .line6",{ 
        scrollTrigger:{
            trigger:"#section6", 
            start:"-90% 50%", 
            end: "-30% 50%", 
            scrub:6,
            markers:false,
        },
        width:0,
        opacity:0,
    },1);

    gsap.from(".section6 .line7",{ 
        scrollTrigger:{
            trigger:"#section6", 
            start:"-70% 50%", 
            end: "-10% 50%", 
            scrub:6,
            markers:false,
        },
        width:0,
        opacity:0,
    },1);

});

