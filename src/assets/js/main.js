import { work } from "./work.js";
import { smooth } from "./smooth.js";
import { circle } from "./circle.js";
import { setFlowBanner } from "./setFlowBanner.js";


window.addEventListener("load", function () {
    circle();
    work();
    smooth();
    setFlowBanner();
})