function setup(){
    canvas = createCanvas(900,550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/eEw2fYNf3/model.json', modelLoaded);
}
function modelLoaded(){
    console.log("model Loaded!");
}
function draw(){
image(video,0,0,900,550);
classifier.classify(video, gotResult);
}
function gotResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_accuracy_name").innerHTML = results[0].confidence.toFixed(3);
}
}
function back(){
    window.location = "index.html";
}