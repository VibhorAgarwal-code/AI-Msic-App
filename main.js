ghungroo="";
tune="";
bts="";
canvas=document.getElementById("canvas").value;

function setup(){
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    ghungroo=loadSound("Ghungroo - War.mp3");
    tune=loadSound("music.mp3");
    bts=loadSound("Butter.mp3");
}