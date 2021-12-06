! function () {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {

        var hoverDistort = new hoverEffect({
            parent: document.querySelector('.Hero_Right_Inner_1'),
            intensity: 1,
            speedIn: 4,
            speedOut: 4,
            angle: Math.PI / 6,
            image1: '/App/FrontEnd/Assets/Images/About_Us_1.jpg',
            image2: '/App/FrontEnd/Assets/Images/About_Us_2.jpg',
            displacementImage: '/App/FrontEnd/Assets/Images/Image_Hover/Hover_Image.png'
        });
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        const timeline = gsap.timeline();
        timeline.to(".Animate", {
            delay: 1,
            duration: 1,
            opacity: 0
        });
        timeline.to(".Loading_Animation", {
            delay: 1,
            duration: 1,
            y: "100%",
            ease: "power4.out"
        });
        timeline.to(".Loading_Animation", {
            zIndex: -1
        });
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        var scroll = new LocomotiveScroll({
            el: document.querySelector('#js-scroll'),
            smooth: true,
            inertia: 0.45,
            smartphone: {
                smooth: true
            },
            tablet: {
                smooth: true
            }
        });
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        const items = document.querySelectorAll('.Items')
        items.forEach((el) => {
            const image = el.querySelector('img')

            el.addEventListener('mouseenter', (e) => {
                gsap.to(image, {
                    autoAlpha: 1
                })
            })

            el.addEventListener('mouseleave', (e) => {
                gsap.to(image, {
                    autoAlpha: 0
                })
            })

            el.addEventListener('mousemove', (e) => {
                gsap.set(image, {
                    x: e.offsetX - 50
                })
            })
        });
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    })
}();