var intro = document.querySelector("h1");
var vsco = document.querySelector("#vsco");
var lis = document.querySelectorAll(".icons");

window.addEventListener("scroll",function(){

    var header =  document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0)

});

const logo = document.querySelectorAll('#logo path');
console.log(logo);
for (let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".soFar",{
    x:-100
})

gsap.to(".soFar",{
    scrollTrigger:{
        trigger:".soFar",
        toggleActions:"restart pause none none"
    },
    x:50
});


gsap.from("#oneSf",{
    x:-100
})

gsap.to("#oneSf",{
    scrollTrigger:{
        trigger:"#oneSf",
        toggleActions:"restart pause none none"
    },
    x:50
});



gsap.from("#twoSf",{
    x:-100
})

gsap.to("#twoSf",{
    scrollTrigger:{
        trigger:"#twoSf",
        toggleActions:"restart pause none none"
    },
    x:50
});

gsap.from(".ltr",{
    x:-100
})

gsap.to(".ltr",{
    scrollTrigger:{
        trigger:".ltr",
        toggleActions:"restart pause none none"
    },
    x:2
});

gsap.from(".rtl",{
    x:100
})

gsap.to(".rtl",{
    scrollTrigger:{
        trigger:".rtl",
        toggleActions:"restart pause none none"
    },
    x:-2
});