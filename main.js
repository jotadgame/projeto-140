song = "";

function preload()
{
    song = loadSound("music.mp3");
}
scoreRightwrist = 0;
scoreLeftWeist= 0;

rightWristX = 0;
rightWristY = 0;

LeftWristX = 0;
LeftWristY = 0;
function setup() {
    canvas = crateCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.lot('poseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[19].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWritX = " + rightWristX +" rightWristY = "+ rightWristY);

        LeftWristX = results[0].pose.leftrist.x;
        leftWristY = results[0].pose.LeftWrist.y;
        console.log("leftWristX = " + leftWristX + "LeftWristY"+ leftWristY);


    }
}
function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX,rightWristY,20);

        if(rightWritY >0 && rightWristY <= 100)
        {
            document.getElementById("speed").innerHTML = "veloidade = 0.5x";
            song.rate(0.5);
        }
        else if(rightWristY > 100 && rightWristY <= 200)
        {
            document.getElementById("speed").innerHTML = "veloidade = 1x";
            song.rate(1);
        }
        else if(rightWristY >200 && rightWristY <= 300)
        {
            document.getElementById("speed").innerHTML = "veloidade = 1.5x";
            song.rate(1.5);
        }
        else if(rightWristY >200 && rightWristY <= 300)
        {
            document.getElementById("speed").innerHTML = "veloidade = 2x";
            song.rate(2);
        }
        else if(rightWristY >200 && rightWristY <= 300)
        {
            document.getElementById("speed").innerHTML = "veloidade = 2.5x";
            song.rate(2.5);
        }
    }
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        InNumberleftwristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftwristY);
        volume = remove_decimals/500;
        document.getElementById("volume").innerHTML = "volume = " + volume;
        song.setvolume(volume);
    }
}
function play()
{
    song.setvolume()
    song.play();
}