import {createElementByMobile} from "./mobile_size";
import {createElementByLaptop} from "./laptop_size";
import {createElementByPC} from "./PC_size";
function deleteElem(Block,btns) {
    let ul = document.querySelector('#slides');
    if (window.screen.availWidth>320 && window.screen.availWidth<920) {
        if (ul) ul.remove();
        createElementByMobile(Block,btns );
    }
    else if (window.screen.availWidth>920 && window.screen.availWidth<1220) {
        if (ul) ul.remove();
        createElementByLaptop(Block,btns);
    }
    else if (window.screen.availWidth>=1221) {
        if (ul) ul.remove();
        createElementByPC(Block,btns);
    }
};

export default deleteElem;