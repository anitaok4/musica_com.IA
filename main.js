song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("Shine On You Crazy Diamond (Parts I-V).mp3");
    song1 = loadSound("Let You Go.mp3");
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video, 0, 0, 400, 400)
}
