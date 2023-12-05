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
        start: "center center", // 시작 시점
        end: "+=5500", // 시작 지점에서 4000px 스크롤된 지점에서 종료
        scrub: true,
        markers: true,
        pin: true,
        anticipatePin: 1,
        endTrigger: ".end-trigger",
        duration: 10,
        onEnter: () => {
            document.querySelector('.circle').classList.remove('end-style');
        },
        onLeaveBack: () => {
            document.querySelector('.circle').classList.add('end-style');
        }
    });
}