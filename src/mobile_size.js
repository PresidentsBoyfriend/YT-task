import {create} from "./blockCreate";

let currentSlide = 0;
let slides;
function createElementByMobile (Block,btns) {
    
    let ul = document.createElement('ul');
    ul.setAttribute('id','slides');
    document.body.insertBefore(ul, btns)
    for (let i=0; i<8; i++){
        let li=document.createElement('li');
        if (i==0) {
            li.className = "slide showing";
        }
        else {
            li.className = "slide";
        }
        ul.appendChild(li);
        create(li, i, "mobile", Block);
    }
    return slides = document.querySelectorAll('#slides .slide');
};
function nextSlideMobile() {
    goToSlide(currentSlide+1);
};
function previousSlideMobile() {
    goToSlide(currentSlide-1);
};
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
};

export {createElementByMobile, previousSlideMobile, nextSlideMobile};