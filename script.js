let img=[];

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
    // document.body.appendChild(Block[i]);

    imgCanvas[i] = document.createElement('img');
    imgCanvas[i].className = "imgCanvas"+i+" imgCanvas";
    Block[i].appendChild(imgCanvas[i]);

    titleText[i] = document.createElement('div');
    titleText[i].className = "titleText"+i+" titleText";
    Block[i].appendChild(titleText[i]);

    let infoCanvas = document.createElement('div');
    infoCanvas.className = "infoCanvas";
    Block[i].appendChild(infoCanvas);
//name
    name[i] = document.createElement('div');
    name[i].className = "name"+i+" area";
    infoCanvas.appendChild(name[i]);

    let fasM = document.createElement('i');
    fasM.className = "fas fa-male";
    name[i].appendChild(fasM);

    nameText[i] = document.createElement('p');
    nameText[i].className = "nameText"+i;
    name[i].appendChild(nameText[i]);
//date
    date[i] = document.createElement('div');
    date[i].className = "date"+i+" area";
    infoCanvas.appendChild(date[i]);

    let fasC = document.createElement('i');
    fasC.className = "fas fa-calendar-alt";
    date[i].appendChild(fasC);

    dateText[i] = document.createElement('p');
    dateText[i].className = "dateText"+i;
    date[i].appendChild(dateText[i]);
//view
    view[i] = document.createElement('div');
    view[i].className = "view"+i+" area";
    infoCanvas.appendChild(view[i]);

    let fasE = document.createElement('i');
    fasE.className = "fas fa-eye";
    view[i].appendChild(fasE);

    viewText[i] = document.createElement('p');
    viewText[i].className = "viewText"+i;
    view[i].appendChild(viewText[i]);
//description
    description[i] = document.createElement('div');
    description[i].className = "description"+i;
    infoCanvas.appendChild(description[i]);

    descriptionText[i] = document.createElement('p');
    descriptionText[i].className = "descriptionText"+i+" descr";
    description[i].appendChild(descriptionText[i]);

}


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
// setInterval(function (){
//     load();
// },2);






///////////////

window.onload = function load() {
    let ul = document.createElement('ul');
        ul.setAttribute('id','slides');
        document.body.appendChild(ul);
    if (window.screen.availWidth>320 && window.screen.availWidth<920) {
        for (let i=0; i<5; i++){
            let li=document.createElement('li');
            if (i==0) {
                li.className = "slide showing";
            }
            else {
                li.className = "slide";
            }
            ul.appendChild(li);
            li.appendChild(Block[i]);
        }
        var slides = document.querySelectorAll('#slides .slide');
        var currentSlide = 0;

        nextBtn.onclick = function() {
            nextSlide();
        };
        previousBtn.onclick = function() {
            previousSlide();
        };
        function nextSlide() {
            goToSlide(currentSlide+1);
        };
        function previousSlide() {
            goToSlide(currentSlide-1);
        };
        function goToSlide(n) {
            slides[currentSlide].className = 'slide';
            currentSlide = (n+slides.length)%slides.length;
            slides[currentSlide].className = 'slide showing';
        };
    }
    else if (window.screen.availWidth>920 && window.screen.availWidth<1220)
    {
        let count = 0;
        for (let i=0; i<4; i++){
            let li=document.createElement('li');
            if (i==0) {
                li.className = "slide showing";
            }
            else {
                li.className = "slide";
            }
            ul.appendChild(li);
            li.appendChild(Block[count++]);
            li.appendChild(Block[count++]);
        }
        var slides = document.querySelectorAll('#slides .slide');
        var currentSlide = 0;

        nextBtn.onclick = function() {
            nextSlide();
        };
        previousBtn.onclick = function() {
            previousSlide();
        };
        function nextSlide() {
            goToSlide(currentSlide+1);
        };
        function previousSlide() {
            goToSlide(currentSlide-1);
        };
        function goToSlide(n) {
            slides[currentSlide].className = 'slide';
            currentSlide = (n+slides.length)%slides.length;
            slides[currentSlide].className = 'slide showing';
        };
    }
    else if (window.screen.availWidth>1220) {
        let count = 0;
        for (let i=0; i<2; i++){
            let li=document.createElement('li');
            if (i==0) {
                li.className = "slide showing";
            }
            else {
                li.className = "slide";
            }
            ul.appendChild(li);
            li.appendChild(Block[count++]);
            li.appendChild(Block[count++]);
            li.appendChild(Block[count++]);
            li.appendChild(Block[count++]);
        }
    }
    ul.addEventListener('click', function (e){
        console.log(e.pageX);
        const kash = e.pageX;
        // ul.style.left=e.pageX+'px';
        setTimeout( function () {
            if(e.pageX>kash) {
                nextSlide();
            }
            else {
                previousSlide();
            }
        }, 0);
    });

///////////////






///////////////







        var slides = document.querySelectorAll('#slides .slide');
        var currentSlide = 0;
        nextBtn.onclick = function() {
        nextSlide();
        };
        previousBtn.onclick = function() {
        previousSlide();
        };
        function nextSlide() {
        goToSlide(currentSlide+1);
        };
        function previousSlide() {
        goToSlide(currentSlide-1);
        };
        function goToSlide(n) {
        slides[currentSlide].className = 'slide';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'slide showing';
        };
}



    
// (function loop(){
//     requestAnimFrame(loop);
//     checkScreenSize();
// })();


let previousBtn =  document.createElement('button'),
    nextBtn =  document.createElement('button');

previousBtn.setAttribute('id','controls');
previousBtn.innerHTML = "Previous";

nextBtn.setAttribute('id','controls');
nextBtn.innerHTML = "Next";
document.body.appendChild(previousBtn);
document.body.appendChild(nextBtn);

btnSearch.addEventListener('click', function() {
    // console.log(window.screen.availWidth);
    if (search.value) {
        let xmlHttp = new XMLHttpRequest(),
            count = 0;
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                GetId(JSON.parse(xmlHttp.responseText), count);
        }
        xmlHttp.open("GET", 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=8&q='+search.value, true); 
        xmlHttp.send(null);
    }
    else {
        alert('Please enter text');
    }
});

function GetId (data) {
    for (let key in data.items) {
        getVideoStatById(data.items[key].id.videoId, key);
    }
};

function getVideoStatById (id,count) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            full(JSON.parse(xmlHttp.responseText),count);
    }
    xmlHttp.open("GET", 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id='+id+'&part=snippet,statistics', true);  
    xmlHttp.send(null);
};

function full (data, count) {
    requestAnimationFrame (function () {
        // console.log(data.items[0]);
        let dateOf = new Date(Date.parse(data.items[0].snippet.publishedAt));
        titleText[count].innerHTML = data.items[0].snippet.title;
        imgCanvas[count].src = data.items[0].snippet.thumbnails.medium.url;
        nameText[count].innerHTML = data.items[0].snippet.channelTitle.substring(0,20)+"...";
        dateText[count].innerHTML = dateOf.getFullYear()+"-"+(dateOf.getMonth()+1)+"-"+dateOf.getDate();
        viewText[count].innerHTML = data.items[0].statistics.viewCount;
        descriptionText[count].innerHTML = data.items[0].snippet.description.substring(0,25)+"...";
    })    
};
// addEvent(window, "resize", function(event) {
//     console.log('resized');
//   });
