import {create} from "./blockCreate";

let currentSlide = 0;
let slides;
function createElementByPC (Block,btns) {
    let count = 0;
    let ul = document.createElement('ul');
    ul.setAttribute('id','slides');
    ul.className ='PC'; 
    document.body.insertBefore(ul, btns)
    for (let i=0; i<2; i++){
        let li=document.createElement('li');
        if (i==0) {
            li.className = "slide showing";
        }
        else {
            li.className = "slide";
        }
        ul.appendChild(li);
        create(li, i, "PC", Block);
    }
    return slides = document.querySelectorAll('#slides .slide');
};
function nextSlidePC() {
    goToSlide(currentSlide+1);
};
function previousSlidePC() {
    goToSlide(currentSlide-1);
};
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
};

export {createElementByPC, previousSlidePC, nextSlidePC};