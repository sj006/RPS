var gamestate ;

var rock ;
var paper;
var scissor; 

var bot_canchoose;
var player_choose ;
var bot_choose ;
var stat ;
var count;

function setup(){
rock = createSprite(70,350,100,50);
rock.tint = "white";
paper = createSprite(200,350,100,50);
paper.tint = "white";
scissor = createSprite(330,350,100,50);
scissor.tint = "white";

bot_canchoose = ["✊","🖐","✌"];

player_choose = "";
bot_choose = "";
stat = "";
count = 0;

gamestate = "choose"

}



function draw() {
  background("#10c8c5");
  drawSprites();
  
  
  
 
  fill('#e9be70');
  rect(50,150,100,100);
  rect(250,150,100,100);
  textAlign(CENTER);
  textFont(BOLD);
  textSize(20);
  fill("black");
   text("V/S",200,200);
   
   fill("red");
   text("You",100,130);
   fill("blue");
   text("Bot",300,130);
   
   //for rock
   
   text("✊",70,355);
   
   //for paper
    text("🖐",200,355);
        
   //for scissor
    text("✌",330,355);
  
  
 
  
  if(gamestate == "choose"){
    if(mouseIsOver(rock) && mouseWentDown("leftButton")){
      player_choose = "✊";
    }
    if(mouseIsOver(paper) && mouseWentDown("leftButton")){
      player_choose = "🖐";
    }
    if(mouseIsOver(scissor) && mouseWentDown("leftButton")){
      player_choose = "✌";
    }
  }
  



  if(player_choose != "" && gamestate == "choose"){
    gamestate = "choosed";
    var t = Math.round(Math.random(0, 2)*(bot_canchoose.length-1));
    bot_choose = bot_canchoose[t];
    console.log(t);
  }
  
  if(gamestate == "choosed"){
    if(player_choose == bot_choose){
     stat  = "It's a tie!";
    
  }else if(player_choose == "✊" && bot_choose ==  "🖐"){
     stat  = "Bot won!";
    
  }else if(player_choose == "✊" && bot_choose ==  "✌"){
     stat  = "You won!";
    
  }else if(player_choose == "🖐" && bot_choose ==  "✌"){
     stat  = "Bot won!";
    
  }else if(player_choose == "🖐" && bot_choose ==  "✊"){
     stat  = "You won!";
    
  }else if(player_choose == "✌" && bot_choose ==  "🖐"){
     stat  = "You won!";
    
  }else if(player_choose == "✌" && bot_choose ==  "✊"){
     stat  = "Bot won!";
    
  }
  textSize(20);
  fill("white");
  text("[Reseting...]",200,90);
  count ++;
  
  if(count>100){
    gamestate = "choose";
    player_choose = "";
    bot_choose = "";
    stat = "";
    count = 0;
  }
   }
  textSize(30);
  text(player_choose,100,210);
  //bot
  text(bot_choose,300,210);
   fill("black");
      textSize(50);
      text(stat,200,50);
   
  textSize(13);
  text("Made by MOOD",350,395);
  
}
