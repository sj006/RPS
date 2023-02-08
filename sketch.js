prompt("If you on mobile double tap on game screen. It will auto set the game window");

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
  createCanvas(window.width*1.2,window.height*1.2)
rock = createSprite(width/4-20,350,100,50);
rock.tint = "orange";
paper = createSprite(width/2,350,100,50);
paper.tint = "orange";
scissor = createSprite(3*width/4 +20,350,100,50);
scissor.tint = "orange";
start = createSprite(width/2 ,height -30,200,50);
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

    rock.y = height-150;
    paper.y = height-150;
    scissor.y = height-150;
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
  text("The RPS-Game",width/2,50);
  textSize(20);
  text("Match info:",98,125);
  text("Opponent: Bot",115,155);
    text("Rounds:"+ maxround,90,180);
    text("Select rounds:",90,280);
    text("Start",width/2,height-23);
    text("3",width/4-20,height-145);
   
   
     text("5",width/2,height-145);

     text("7",3*width/4+20,height-145);

     if((mouseIsOver(rock) && mouseWentDown("leftButton")) ){
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

    
for (var i = 0; i<touches.length ;i++){
      if(touches[i].x > rock.x-(rock.width/2) && touches[i].x < rock.x+(rock.width/2) && touches[i].y > rock.y-(rock.height/2)  && touches[i].y < rock.y+(rock.height/2)){
      maxround = 3;
      console.log("?");
      }
      if(touches[i].x > paper.x-(paper.width/2) && touches[i].x < paper.x+(paper.width/2) && touches[i].y > paper.y-(paper.height/2)  && touches[i].y < paper.y+(paper.height/2)){
        maxround = 5;
        }
        if(touches[i].x > scissor.x-(scissor.width/2) && touches[i].x < scissor.x+(scissor.width/2) && touches[i].y > scissor.y-(scissor.height/2)  && touches[i].y < scissor.y+(scissor.height/2)){
          maxround = 7;
          }
          if(touches[i].x > start.x-(start.width/2) && touches[i].x < start.x+(start.width/2) && touches[i].y > start.y-(start.height/2)  && touches[i].y < start.y+(start.height/2)){
            gamestate = "choose";
            }
      }

  }
  
 

  if(gamestate == "choose" || gamestate == "choosed"){
    start.visible = false;
    rock.y = height-100;
    paper.y = height-100;
    scissor.y = height-100;

if(round>maxround){
  round == maxround;
}


  fill('#e9be70');
  rect(width/8+15,150,100,100);
  rect(width/1.6,150,100,100);
 
 
  stroke("black");
  textSize(20);
  fill("black");
   text("V/S",width/2,200);
   text("Round:"+(round),50,30);
   
   stroke("red");
   fill("red");
   text("You",width/8+15+50,130);
   textSize(15);
   text("You:"+player_won,40,50);

   textSize(20);
   stroke("blue");
   fill("blue");
   text("Bot",width/1.6+50,130);
   textSize(15);
   text("Bot:"+bot_won,40,70);
   
   textSize(20);
   //for rock
   
   text("✊",width/4-20,height-95);
   
   //for paper
    text("🖐",width/2,height-95);
        
   //for scissor
    text("✌",3*width/4+20,height-95);
  
  
 
  
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

    for (var i = 0; i<touches.length ;i++){
      if(touches[i].x > rock.x-(rock.width/2) && touches[i].x < rock.x+(rock.width/2) && touches[i].y > rock.y-(rock.height/2)  && touches[i].y < rock.y+(rock.height/2)){
        player_choose = "✊";
     // console.log("?");
      }
      if(touches[i].x > paper.x-(paper.width/2) && touches[i].x < paper.x+(paper.width/2) && touches[i].y > paper.y-(paper.height/2)  && touches[i].y < paper.y+(paper.height/2)){
        player_choose = "🖐";
        }
        if(touches[i].x > scissor.x-(scissor.width/2) && touches[i].x < scissor.x+(scissor.width/2) && touches[i].y > scissor.y-(scissor.height/2)  && touches[i].y < scissor.y+(scissor.height/2)){
          player_choose = "✌";
          }
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
  text("[Reseting...]",width/2,height-380);
  fill("black");
   stroke("black");
      textSize(25);
      text(stat ,width/2,height - 400);
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
  text(player_choose,width/8+15+50,210);
  //bot
  text(bot_choose,width/1.6+50,210);
   
  
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
      text(stat ,width/2,height/2);
      textSize(25);
      fill("black");
      text("Menu",width/2,height - 20);
      if(mouseIsOver(start) && mouseWentDown("leftButton")){
             gamestate = "menu";
      }

      for (var i = 0; i<touches.length ;i++){
       
            if(touches[i].x > start.x-(start.width/2) && touches[i].x < start.x+(start.width/2) && touches[i].y > start.y-(start.height/2)  && touches[i].y < start.y+(start.height/2)){
              gamestate = "menu";
              }
        }
  

   }
  
  
   
   



  textSize(10);
  fill("black");
  stroke("black");
  text("Made by MOOD",width - 50,height - 5);
  if(touches.length > 0){
    touches = [];
   
    //prompt("This game don't support Mobiles📵");

  }
  
}
