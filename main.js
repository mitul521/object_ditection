objectDetector="";
img="";
status="";
object=[];
function preload(){
    img=loadImage("bedroom.png");
}
function setup(){
  canvas=  createCanvas(800,800);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
}
function draw(){
if(status !=""){
   image(img,0,0,800,800);
  objectDetector.detect(img,gotresult)
 for (var i= 0; i<object.length; i++) {
    document.getElementById("status").innerHTML="Status:object detected ";
    document.getElementById("number_objects").innerHTML="number of objects detected are "+object.length;
    fill(255,0,0);
    percent=floor(object[i].confidence*100);
    text(object[i].label+ ' '+percent+'%',object[i].x,object[i].y);
noFill();
stroke("#FF0000");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
console.log("draews");
}
 }
  }
function modelloaded(){
  console.log("model is on");
  status=true;
 objectDetector.detect(img,gotresult);
}
function gotresult(error,result){
  if(error){
    console.log("ERROR");
  }
  else{
    console.log(result);
    object=result;
  }
}