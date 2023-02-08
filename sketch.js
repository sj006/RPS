prompt("This game don't support Mobiles📵");

var gamestate ;

var rock ;
var paper;
var scissor; 
var start;

var bot_canchoose;
var player_choose ;
var bot_choose ;
var stat ;
var count,round,maxround;
var player_won,bot_won;

function setup(){
rock = createSprite(70,350,100,50);
rock.tint = "orange";
paper = createSprite(200,350,100,50);
paper.tint = "orange";
scissor = createSprite(330,350,100,50);
scissor.tint = "orange";
start = createSprite(200,370,200,50);
start.tint = "green";

bot_canchoose = ["✊","🖐","✌"];

player_choose = "";
bot_choose = "";
stat = "";
count = 0;
player_won = 0;
bot_won = 0;
round = 1;
maxround = 3;

gamestate = "menu"

}



function draw() {
  background("#10c8c5");


  if(touches.length > 0){
    touches = [];
    prompt("This game don't support Mobiles📵");

  }

if(mouseIsOver(rock)){
  rock.scale = 1.07;
}else{
  rock.scale = 1;
}
if(mouseIsOver(paper)){
  paper.scale = 1.07;
}else{
  paper.scale = 1;
}
if(mouseIsOver(scissor)){
  scissor.scale = 1.07;
}else{
  scissor.scale = 1;
}
if(mouseIsOver(start)){
  start.scale = 1.07;
}else{
  start.scale = 1;
}




  drawSprites();
   textAlign(CENTER);
  textFont('Verdana');
   strokeWeight(1.5);
  if(gamestate == "menu"){

    rock.y = 300;
    paper.y = 300;
    scissor.y = 300;
    start.visible = true;
    rock.visible = true;
   paper.visible = true;
   scissor.visible = true;

stat = "";
player_won = 0;
bot_won = 0;
round = 1;
    stroke("black");
  textSize(30);
  fill("black");
  text("The RPS-Game",200,50);
  textSize(20);
  text("Match info:",98,125);
  text("Opponent: Bot",115,155);
    text("Rounds:"+ maxround,90,180);
    text("Select rounds:",90,260);
    text("Start",200,380);
    text("3",70,305);
   
   
     text("5",200,305);

     text("7",330,305);

     if(mouseIsOver(rock) && mouseWentDown("leftButton")){
      maxround = 3;
    }
    if(mouseIsOver(paper) && mouseWentDown("leftButton")){
      maxround = 5;
    }
    if(mouseIsOver(scissor) && mouseWentDown("leftButton")){
      maxround = 7;
    }
    if(mouseIsOver(start) && mouseWentDown("leftButton")){
      gamestate = "choose";
    }

  }
  
 

  if(gamestate == "choose" || gamestate == "choosed"){
    start.visible = false;
    rock.y = 350;
    paper.y = 350;
    scissor.y = 350;

if(round>maxround){
  round == maxround;
}


  fill('#e9be70');
  rect(50,150,100,100);
  rect(250,150,100,100);
 
 
  stroke("black");
  textSize(20);
  fill("black");
   text("V/S",200,200);
   text("Round:"+(round),50,30);
   
   stroke("red");
   fill("red");
   text("You",100,130);
   textSize(15);
   text("You:"+player_won,40,50);

   textSize(20);
   stroke("blue");
   fill("blue");
   text("Bot",300,130);
   textSize(15);
   text("Bot:"+bot_won,40,70);
   
   textSize(20);
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
   // console.log(t);
  }
  
  if(gamestate == "choosed"){
    if(player_choose == bot_choose){
     stat  = "It's a tie!";
    
  }else if(player_choose == "✊" && bot_choose ==  "🖐"){
     stat  = "Bot won this round!";
    
  }else if(player_choose == "✊" && bot_choose ==  "✌"){
     stat  = "You won this round!";
    
  }else if(player_choose == "🖐" && bot_choose ==  "✌"){
     stat  = "Bot won this round!";
    
  }else if(player_choose == "🖐" && bot_choose ==  "✊"){
     stat  = "You won this round!";
    
  }else if(player_choose == "✌" && bot_choose ==  "🖐"){
     stat  = "You won this round!";
    
  }else if(player_choose == "✌" && bot_choose ==  "✊"){
     stat  = "Bot won this round!";
    
  }
  textSize(15);
  fill("white");
  stroke("white");
  text("[Reseting...]",200,100);
  fill("black");
   stroke("black");
      textSize(25);
      text(stat ,200,80);
  count ++;
  
  if(count>100){
    if(round<maxround){
    gamestate = "choose";
    round+=1;
   console.log(round);
    }else if(round >= maxround){
      gamestate = "end"
    }
    if(stat == "Bot won this round!"){
        bot_won+=1;
    }else if(stat == "You won this round!"){
      player_won+=1;
  }
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
   
  
  }


   if(gamestate == "end"){
    if(player_won>bot_won){
      stat = "You won the match!"
    }else if(player_won<bot_won){
      stat = "Bot won the match!"
    }else if(player_won==bot_won){
      stat = "Its a tie match!"
    }
    stroke("black");
  textSize(20);
  fill("black");
    text("Round:"+(round),50,30);

    textSize(15);
   stroke("blue");
   fill("blue");
   text("Bot:"+bot_won,40,70);

   stroke("red");
   fill("red");
   textSize(15);
   text("You:"+player_won,40,50);

    fill("yellow");
   stroke("black");

   start.visible = true;
   rock.visible = false;
   paper.visible = false;
   scissor.visible = false;
   
      textSize(35);
      text(stat ,200,200);
      textSize(25);
      fill("black");
      text("Menu",200,380);
      if(mouseIsOver(start) && mouseWentDown("leftButton")){
             gamestate = "menu";
      }

   }
  
  
   
   



  textSize(10);
  fill("black");
  stroke("black");
  text("Made by MOOD",350,395);
  
}
