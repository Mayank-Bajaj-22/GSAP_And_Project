// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// for only 1 element
// var h1Text = document.querySelector("#firsth1").textContent
// var splitedText = h1Text.split("")

// var clutter = ""
// splitedText.forEach(function(elem){
//     clutter += `<span>${elem}</span>`
// })
// document.querySelector("#firsth1").innerHTML = clutter

// gsap.to("#page2 h1 span",{
//     color: "#E3E3C4",
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 10%",
//         scrub:1,
//     }
// })

var allH1 = document.querySelectorAll("#page2 h1")
allH1.forEach(function(elem){
    var clutter = ""
    var h1Text = elem.textContent
    var splitedText = h1Text.split("")
    splitedText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter
})

gsap.to("#page2 h1 span",{
    color: "#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top -10%",
        scrub:2,
    }
})