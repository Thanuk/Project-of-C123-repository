function preload(){

}

function setup(){
    canvas = createCanvas(500, 480);
    canvas.position(1200, 150);
    video = createCapture(VIDEO);
    video.position(500, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#4cd43f");
}

function modelLoaded(){
    console.log('Posenet is loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}