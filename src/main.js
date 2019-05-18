import {createElementByMobile, previousSlideMobile, nextSlideMobile} from "./mobile_size";
import {createElementByLaptop, previousSlideLaptop, nextSlideLaptop} from "./laptop_size";
import {createElementByPC, previousSlidePC, nextSlidePC} from "./PC_size";
import deleteElem from "./remove";
import {GetLink} from './blockCreate';

let btns = document.createElement('div'),
    previousBtn =  document.createElement('button'),
    nextBtn =  document.createElement('button'),
    slides;

btns.className = 'btnsPlace';
previousBtn.setAttribute('id','controls');
previousBtn.innerHTML = "Previous";

nextBtn.setAttribute('id','controls');
nextBtn.innerHTML = "Next";


let Block = [],
    imgCanvas = [],
    titleText = [],
    name = [], nameText = [],
    date = [], dateText = [],
    view = [], viewText = [],
    description = [], descriptionText = [];
for (let i = 0; i < 8; i++) {
    Block[i] = document.createElement('div');
    Block[i].className = "Block"+i+" Block";
    
    imgCanvas[i] = document.createElement('img');
    imgCanvas[i].className = "imgCanvas"+i+" imgCanvas";
    Block[i].appendChild(imgCanvas[i]);

    titleText[i] = document.createElement('a');
    titleText[i].className = "titleText"+i+" titleText";
    Block[i].appendChild(titleText[i]);

    let infoCanvas = document.createElement('div');
    infoCanvas.className = "infoCanvas";
    Block[i].appendChild(infoCanvas);

    name[i] = document.createElement('div');
    name[i].className = "name"+i+" area";
    infoCanvas.appendChild(name[i]);

    let fasM = document.createElement('i');
    fasM.className = "fas fa-male";
    name[i].appendChild(fasM);

    nameText[i] = document.createElement('p');
    nameText[i].className = "nameText"+i;
    name[i].appendChild(nameText[i]);

    date[i] = document.createElement('div');
    date[i].className = "date"+i+" area";
    infoCanvas.appendChild(date[i]);

    let fasC = document.createElement('i');
    fasC.className = "fas fa-calendar-alt";
    date[i].appendChild(fasC);

    dateText[i] = document.createElement('p');
    dateText[i].className = "dateText"+i;
    date[i].appendChild(dateText[i]);

    view[i] = document.createElement('div');
    view[i].className = "view"+i+" area";
    infoCanvas.appendChild(view[i]);

    let fasE = document.createElement('i');
    fasE.className = "fas fa-eye";
    view[i].appendChild(fasE);

    viewText[i] = document.createElement('p');
    viewText[i].className = "viewText"+i;
    view[i].appendChild(viewText[i]);

    description[i] = document.createElement('div');
    description[i].className = "description"+i;
    infoCanvas.appendChild(description[i]);

    descriptionText[i] = document.createElement('p');
    descriptionText[i].className = "descriptionText"+i+" descr";
    description[i].appendChild(descriptionText[i]);
}

let placeOn = document.createElement('div');
placeOn.className = 'center';
let on_off = document.createElement('input');
on_off.className = 'i';
on_off.type = "checkbox";
document.body.appendChild(placeOn);


let searchBox = document.createElement('section');
searchBox.className = "searchBox";
document.body.appendChild(searchBox);

let search = document.createElement('input');
search.className = "search";
searchBox.appendChild(search);

let btnSearch = document.createElement('button');
btnSearch.className = "btnSearch";
searchBox.appendChild(btnSearch);
btnSearch.innerHTML = "Click";
searchBox.appendChild(on_off);
let check;
check = false;
on_off.addEventListener('click', () => {
    if (check == false) {
        document.body.style.backgroundColor = 'white';
        check = true;
    }
    else {
        document.body.style.backgroundColor = 'black';
        check = false;
    }
})

let status = false;

btnSearch.onkeydown = e => {
    if(e.key == "Enter") {
        GetLink(search.value, Block);
        document.body.appendChild(btns);
        btns.appendChild(previousBtn);
        btns.appendChild(nextBtn);
        requestAnimationFrame ( () => {
            getContent(status, btns);
            requestAnimationFrame( ()=> {
                status = true;
            });
        });
    }
};
btnSearch.addEventListener('click', function() {
    GetLink(search.value, Block);
    document.body.appendChild(btns);
    btns.appendChild(previousBtn);
    btns.appendChild(nextBtn);
    requestAnimationFrame ( () => {
        getContent(status, btns);
        requestAnimationFrame( ()=> {
            status = true;
        });
        
    });
});




    nextBtn.onclick = function() {
        if (window.screen.availWidth>320 && window.screen.availWidth<920) {
            nextSlideMobile(slides);
        }
        else if (window.screen.availWidth>920 && window.screen.availWidth<1220) {
            nextSlideLaptop();
        }
        else if (window.screen.availWidth>1220) {
            nextSlidePC();
        }
    };
    previousBtn.onclick = function() {
        if (window.screen.availWidth>320 && window.screen.availWidth<920) {
            previousSlideMobile(slides);
        }
        else if (window.screen.availWidth>920 && window.screen.availWidth<1220) {
            previousSlideLaptop();
        }
        else if (window.screen.availWidth>1220) {
            previousSlidePC();
        }
    };
    

window.addEventListener('resize', function() {
    deleteElem(Block,btns);
});

function getContent(status, nextBtn) {
    if (status == false) {
        if (window.screen.availWidth>320 && window.screen.availWidth<920) {
            createElementByMobile(Block, btns);
        }
        else if (window.screen.availWidth>920 && window.screen.availWidth<1220) {
            createElementByLaptop(Block, btns);
        }
        else if (window.screen.availWidth>1220) {
            createElementByPC(Block, btns);
        }
    }
};