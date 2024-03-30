var tl = gsap.timeline() ;





tl.from("#nav-bar img , #mid-nav-bar h3 , #end-nav-bar " ,{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3
})

tl.from("#left p",{
    opacity:0,
    duration:0.2
})

tl.from("#left h1" ,{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.5
})



tl.from("#right img",{
    scale:0.5,
    opacity:0,
    duration:0.5
})


tl.from("#bottom-text",{
    x:-500,
    opacity:0,
    duration: 0.2,
    stagger:0.3
})




gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start:"top 60%"
    }

})


