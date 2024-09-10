const box = document.querySelector(".box");
const myMusic = new Audio('./Travis Scott - FE!N.mp3');
let currentColor = box.style.background;
document.addEventListener("keydown",press);
box.addEventListener("mouseover",hover);
box.addEventListener("mouseleave",out);
document.addEventListener("keydown",play);
document.addEventListener('keydown',stop);
document.addEventListener('keydown',move);
const moveAmount = 100;
let x = 0;
let y = 0;


function press(event){
    if(event.keyCode == 49){
        box.style.background = "red";
        currentColor = box.style.background;
    }else if(event.keyCode == 50){
        box.style.background = "green";
        currentColor = box.style.background;
    }else if(event.keyCode == 51){
        box.style.background = "blue";
        currentColor = box.style.background;
    }
        
}
function hover(){
    box.style.background = "black";
}
function out(){
    box.style.background = currentColor
}

function play(event){
    if(event.keyCode == 32){
        myMusic.play();
    }
}

function stop(event){
    if(event.keyCode == 32){
        myMusic.pause();
    }
}

function move(event){
   if(event.keyCode == 37){
    x -= moveAmount;
   }else if (event.keyCode == 39){
    x += moveAmount;
   }else if(event.keyCode == 38){
    y -= moveAmount;
   }else if (event.keyCode == 40){
    y += moveAmount
   }

   box.style.top = `${y}px`;
   box.style.left = `${x}px`;
}