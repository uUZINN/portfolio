import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function work() {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(".parallax__item__bike", {
        xPercent: 130,
        ease: "none",
        duration: 0.1,
        scrollTrigger: {
            trigger: ".parallax__item__bike",
            start: "top-=700",
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

    // 전체 배경 변경
    let bg = gsap.timeline({
        scrollTrigger: {
            start: 0,
            end: "max",
            markers: true,
            scrub: true
        }
    });

    bg.to("body", { "--bg-color": "#192928" });
    bg.to("body", { "--bg-color": "#10252B" });
    bg.to("body", { "--bg-color": "#08212F" });

}

