//variables
let video
let t = 'Please keep your face inside the circle';
let neutral = 'Neutral';
let happy = 'Happy';
let sad = 'Sad';
let shocked = 'Shocked';
let angry = 'Angry';
let x = 'X';
let check = ""; // create check variable
let faces = [false,false,false,false,false]





let classifier;





function preload(){
classifier =
ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QrXgxrZkv/');
}





function setup() {
createCanvas(640, 480); //canvas size
video = createCapture(VIDEO); //capture video output
video.size(width, height);
video.hide();



flippedVideo = ml5.flipImage(video)
classifier.classify(flippedVideo, gotResults);
}





function draw() {
image(flippedVideo, 0, 0, width, height); //draws camera output onto page



noFill(); //allows circle to be transparent
strokeWeight(8); //size of cirle outline
ellipse(320, 300, 330, 330); //size and shape of circle



strokeWeight(5); //size outline for speech bubble
fill(255, 255, 255); //colour of box
rect(110, 10, 470, 60); // size and shape of bubble



fill(50);
textSize(25); //text size
text(t, 130, 28, 600, 30); //text postion



noFill();
strokeWeight(3);
rect(10,100,20,20);



fill(50);
textSize(20);
text(neutral, 35, 100, 60, 20);



noFill();
strokeWeight(3);
rect(10,140,20,20);



fill(50);
textSize(20);
text(happy, 35, 140, 60, 20);



noFill();
strokeWeight(3);
rect(10,180,20,20);



fill(50);
textSize(20);
text(sad, 35, 180, 60, 20);



noFill();
strokeWeight(3);
rect(10,220,20,20);



fill(50);
textSize(20);
text(shocked, 35, 220, 60, 20);



noFill();
strokeWeight(3);
rect(10,260,20,20);



fill(50);
textSize(20);
text(angry, 35, 260, 60, 20);





if(faces[0] == true) // if check was set Neutral in the gotResults function, then print it
text(x, 13, 100, 60, 20);

if (faces[1] == true)
text(x, 13, 140, 60, 20);

if (faces[2] == true)
text(x, 13, 180, 60, 20);

if (faces[3] == true)
text(x, 13, 220, 60, 20);

if (faces[4] == true)
text(x, 13, 260, 60, 20);



// TODO: create other IFs for the remaining face expressions
}





function gotResults(error, results) {
if (error) console.error(error);



console.log(results[0].label);
console.log(results[0].confidence);



//if(results[0].label == "Eraser" && results[0].confidence > 0.70)
// console.log("that is it");





if (results[0].confidence > 0.7 && results[0].label == "Neutral") // set variable check to true
//check = "Neutral"
faces[0] = true
if(results[0].confidence > 0.7 && results[0].label == "Happy")
//check = "Happy"
faces[1] = true
if(results[0].confidence > 0.7 && results[0].label == "Sad")
//check = "Sad"
faces[2] = true
if(results[0].confidence > 0.7 && results[0].label == "Shocked")
//check = "Shocked"
faces[3] = true
if(results[0].confidence > 0.7 && results[0].label == "Angry")
//check = "Angry"
faces[4] = true



// TODO: create other IFs for the remaining face expressions



flippedVideo = ml5.flipImage(video)
classifier.classify(flippedVideo, gotResults);
}
