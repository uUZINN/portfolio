import { work } from "./work.js";
import { smooth } from "./smooth.js";
import { circle } from "./circle.js";
import { link } from "./link.js";
import { setFlowBanner } from "./setFlowBanner.js";


window.addEventListener("load", function () {
    circle();
    work();
    link();
    smooth();
    setFlowBanner();
})