song ="";

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

    function modelLoaded(){
        console.log('poseNet inicializado');
    }

    function gotPoses(results){
        if(results.length > 0){

            console.log(results);
            scoreRightWrist = results[0].pose.keypoints[10].score;
            scoreLeftWrist = results[0].pose.keypoints[9].score;

            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;

            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
        }
    }

function draw(){
    image(video, 0, 0, 400, 400);

    fill("red");
    stroke("white");

    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);

        if(rightWristY > 0 && rightWristY <= 100){
            document.getElementById("speed").innerHTML = "Velocidade = 0.5x";
            song.rate(0.5);
        }
        else if(rightWrist > 100 && rightWrist <= 200){
            document.getElementById("speed").innerHTML = "Velocidade = 1.0x";
            song.rate(1.0);
        }
        else if(rightWrist > 200 && rightWrist <= 300){
            document.getElementById("speed").innerHTML = "Velocidade = 1.5x";
            song.rate(1.5);
        }
        else if(rightWrist > 300 && rightWrist <= 400){
            document.getElementById("speed").innerHTML = "Velocidade = 2.0x";
            song.rate(2.0);
        }
        else if(rightWrist > 400 ){
            document.getElementById("speed").innerHTML = "Velocidade = 2.5x";
            song.rate(2.5);
        }
    }
    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimais = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song.setVolume(volume);
    }
}

function comecar(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function parar(){
    song.stop();
}