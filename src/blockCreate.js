function create(li,y, type, Block, nextBtn, previousBtn) {
    switch (type) {
        case "mobile":
            li.appendChild(Block[y]);
            break;
        case "laptop":
            y=y*2;
            li.appendChild(Block[y++]);
            li.appendChild(Block[y++]);
            break;
        case "PC":
            y=y*4;
            li.appendChild(Block[y++]);
            li.appendChild(Block[y++]);
            li.appendChild(Block[y++]);
            li.appendChild(Block[y++]);
            break;
        default:
            break;
    }
};
function GetLink (search, Block) {
    if (search) {
        let xmlHttp = new XMLHttpRequest(),
            count = 0;
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                GetId(JSON.parse(xmlHttp.responseText), Block);
        }
        xmlHttp.open("GET", 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=8&q='+search, true); 
        xmlHttp.send(null);
    }
    else {
        alert('Please enter text');
    }

    function GetId (data, Block) {
        for (let key in data.items) {
            getVideoStatById(data.items[key].id.videoId, key, Block);
        }
    };

    function getVideoStatById (id,count, Block) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                full(JSON.parse(xmlHttp.responseText),count, Block);
        }
        xmlHttp.open("GET", 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id='+id+'&part=snippet,statistics', true);  
        xmlHttp.send(null);
    };

    function full (data, count, Block) {
        requestAnimationFrame (function () {
            let dateOf = new Date(Date.parse(data.items[0].snippet.publishedAt));
            Block[count].children[1].innerHTML = data.items[0].snippet.title;
            Block[count].children[1].href = "https://www.youtube.com/watch?v="+data.items[0].id;
            Block[count].children[0].src = data.items[0].snippet.thumbnails.medium.url;
            Block[count].children[2].children[0].children[1].innerHTML = data.items[0].snippet.channelTitle.substring(0,20)+"...";
            Block[count].children[2].children[1].children[1].innerHTML = dateOf.getFullYear()+"-"+(dateOf.getMonth()+1)+"-"+dateOf.getDate();
            Block[count].children[2].children[2].children[1].innerHTML = data.items[0].statistics.viewCount;
            Block[count].children[2].children[3].children[0].innerHTML = data.items[0].snippet.description.substring(0,60)+"...";
        })    
    };
};

export {create, GetLink};