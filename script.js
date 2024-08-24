var tl = gsap.timeline()

tl.from(".first", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})

tl.from(".second", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 2,
})

tl.from(".third", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})

// tl.from(".logo-img", {
//     y: 20,
//     opacity: 0,
//     duration: 0.5,
//     delay: 0.5,
// })

tl.from(".content", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: -1,
})

tl.from(".btn", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})

tl.from(".koala", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})

tl.from(".banner", {
    x: 1200,
    opacity: 0,
    duration: 3,
    delay: 1,
})