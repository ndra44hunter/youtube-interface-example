/* interaktif / ux untuk video controller (timer (garis merah pada video)) */
let pixel =0;
let persen =0;
document.querySelector(".range-container").addEventListener("mousemove",e => {
    pixel = e.clientX - 13;

    if(pixel>document.querySelector(".range1").offsetWidth){
        document.querySelector(".range2").style.width = pixel+"px";
    }

    console.log()
});

document.querySelector(".range-container").addEventListener("click", () => {
    document.querySelector(".range1").style.width = pixel+"px";
    document.querySelector(".range-bullet").style.left = pixel-4+"px"
});

/* interaktif untuk icon play dan pause */
document.querySelector(".play-pause").addEventListener("click", e => {
    const plays = [
        document.querySelector(".play-child:nth-child(1)"),
        document.querySelector(".play-child:nth-child(2)")
    ];

    if(plays[0].classList[1]=="play"){
        // console.log("halo");
        plays[0].classList.replace("play","pause");
        plays[1].classList.replace("play","width-0");
    } else {
        plays[0].classList.replace("pause", "play");
        plays[1].classList.replace("width-0", "play");
    }
})

document.querySelector(".next").addEventListener("mousedown",()=> {
    document.querySelector(".next").style.paddingBottom = "7px";
});

document.querySelector(".next").addEventListener("mouseup", ()=> {
    document.querySelector(".next").style.paddingBottom = "0";
});

document.querySelector(".previous").addEventListener("mousedown",()=> {
    document.querySelector(".previous").style.paddingBottom = "7px";
});

document.querySelector(".previous").addEventListener("mouseup", ()=> {
    document.querySelector(".previous").style.paddingBottom = "0";
});

document.querySelector(".volume").addEventListener("click", ()=> {
    const volume_i = document.querySelector(".volume i") 
    if(volume_i.classList[1]=="bi-volume-down") {
        volume_i.classList.replace("bi-volume-down","bi-volume-mute");
    } else {
        volume_i.classList.replace("bi-volume-mute","bi-volume-down");
    }
});

const controller2 = [
    document.querySelector(".subtitle"),
    document.querySelector(".setting"),
    document.querySelector(".miniplayer"),
    document.querySelector(".movie"),
    document.querySelector(".cast"),
    document.querySelector(".fullscreen"),
];

controller2.forEach(e => {
    e.addEventListener("mousedown", target=> {
        e.style.height = "20px";
    });
    e.addEventListener("mouseup", target=> {
        e.style.height = "24px";
    });

});



console.log(window.innerWidth);