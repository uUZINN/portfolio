import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function work() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".parallax__item__bike", {
        xPercent: 50,
        ease: "none",
        duration: 0.1,
        scrollTrigger: {
            trigger: ".parallax__item__bike",
            start: "top-=500",
            end: "bottom",
            scrub: true
        }
    })

    gsap.utils.toArray(".parallax__item__desc").forEach(item => {
        gsap.to(item, {
            yPercent: -30,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                markers: false,
                scrub: 0.5
            }
        });
    });

    const ani2 = gsap.timeline();
    ani2.from(".main_mobile .i1", { y: -200, autoAlpha: 0, borderRadius: 200 })
        .from(".main_mobile .i2", { y: 200, autoAlpha: 0, borderRadius: 200 })
        .from(".main_mobile .i3", { y: -200, autoAlpha: 0, borderRadius: 200 })

    ScrollTrigger.create({
        animation: ani2,
        trigger: ".main_mobile",
        start: "top-=250",
        end: "+=2000",
        scrub: true,
        pin: true,
    })

}

