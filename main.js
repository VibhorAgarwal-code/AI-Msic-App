ghungroo="";
bts="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function setup(){
    canvas=createCanvas(480,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
   // poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,480,480);
}

function preload(){
    ghungroo=loadSound("Ghungroo - War.mp3");
    bts=loadSound("Butter.mp3");
}
function modelLoaded(){
    console.log("Model is initialised");
}