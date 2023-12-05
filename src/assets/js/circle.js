import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function circle() {
    gsap.registerPlugin(ScrollTrigger);

    const ani3 = gsap.timeline();
    ani3.to(".circle .c1, .circle .c3, .circle .c5", { rotation: 180 });

    const ani4 = gsap.timeline();
    ani4.to(".circle .c2, .circle .c4, .circle .c6", { rotation: -180 });

    const masterTimeline = gsap.timeline();
    masterTimeline.add(ani3, 0).add(ani4, 0);

    ScrollTrigger.create({
        animation: masterTimeline,
        trigger: ".circle",
        start: "+=2000 center",
        //end: "+=5500",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        endTrigger: ".end-trigger",
        duration: 10,
        onComplete: () => {
            document.querySelector('.circle').style.position = 'sticky !important';
        }
    });
}