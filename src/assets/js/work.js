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

    const ani3 = gsap.timeline();
    ani3.to(".circle .c1, .circle .c3, .circle .c5", { rotation: 180 });

    const ani4 = gsap.timeline();
    ani4.to(".circle .c2, .circle .c4, .circle .c6", { rotation: -180 });


    const masterTimeline = gsap.timeline();
    masterTimeline.add(ani3, 0).add(ani4, 0);

    ScrollTrigger.create({
        animation: masterTimeline,
        trigger: ".circle",
        start: "top top", // 시작 시점
        end: "+=2800",
        toggleActions: "none none none none",
        scrub: true,
        markers: true,
        pin: true,
        endTrigger: ".end-trigger",
    });

}

