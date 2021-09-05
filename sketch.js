//Create variables here
var dog , happyDog, foodS, foodStack;
var db;
var food = 20
var button1 , button2
function preload()
{
	//load images here
dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog1 = createSprite(350,200,20,20) ;
  dog1.addImage(dog);
  dog1.scale = 0.2;

  db = firebase.database();

  foodStack = db.ref('food');
  foodStack.on("value",readStack);
}


function draw() {  
background(46, 139, 87)
textSize(20)
fill("white")
text("Food Remaning :" + food,200,90)

if(keyWentDown(UP_ARROW)){
  writeStack(foodS)
  dog1.addImage(happyDog)
  food = food-1
}
/*button1 = createButton("play")
button1.position(650,200);*/


  drawSprites();
  //add styles here
  textSize(20)
  fill("red")
text("Note: Press Up Aroow To Feed Drago Milk",50,50)
}

  function readStack(data) {
foodS = data.val()

}

 function writeStack(x){
if(x<=0){
x=0

}else
{
  x = x -1
}


db.ref('/').update({Food:x})


}

