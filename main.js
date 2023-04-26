function preload(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video.hide();
}
console.log("aaaaa")

Webcam.set({
    width:350,
    height: 300,
    image_format: 'png',
    png_quality:90,
});


function take_snapshot()
{
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
Webcam.attach('#camera');

function draw(){
    image(video, 0, 0, 640, 480);
}

function take_snapshot(){
    save('student_name.png');
}

