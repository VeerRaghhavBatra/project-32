const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
 if(backgroundImg){
     background(backgroundImg)
 }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    responsejson = await response.json();
    //console.log(responsejson);
    var time = responsejson.datetime;
    console.log(time);
    var hour = time.slice(11,13);
    console.log(hour);

    
    if(hour>=06 && hour<07){
        backgroundImg = loadImage("sunrise1.png");
    }
    else if(hour>=07 && hour<09) {
        backgroundImg = loadImage("sunrise2.png");
    }
    else if(hour>=09 && hour<10) {
        backgroundImg = loadImage("sunrise3.png");
    }
    else if(hour>=10 && hour<11) {
        backgroundImg = loadImage("sunrise4.png");
    }
    else if(hour>=11 && hour<12) {
        backgroundImg = loadImage("sunrise5.png");
    }
    else if(hour>=12 && hour<13) {
        backgroundImg = loadImage("sunrise6.png");
    }
    else if(hour>=13 && hour<16) {
        backgroundImg = loadImage("sunset7.png");
    }
    else if(hour>=16 && hour<17) {
        backgroundImg = loadImage("sunset8.png");
    }
    else if(hour>=17 && hour<18) {
        backgroundImg = loadImage("sunset9.png");
    }
    else if(hour>=18 && hour<19) {
        backgroundImg = loadImage("sunset10.png");
    }
    else if(hour>=19 && hour<22) {
        backgroundImg = loadImage("sunset11.png");
    }
    else{
        backgroundImg = loadImage("sunset12.png");
    }


}
