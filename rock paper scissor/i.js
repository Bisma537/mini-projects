const choices=['rock' ,'paper', 'scissor'];
const playerdisplay=document.getElementById("playerdisplay");
const computerdisplay=document.getElementById("computer");
const resultdisplay=document.getElementById("resultdisplay");
function pg(playerchoices){
    const computerchoices=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerchoices===computerchoices){
        result="IT'S A TIE";
    }
    else{
        switch(playerchoices){
            case "rock":
                result=(computerchoices==="scissors") ? 'you win': 'you lose';
                break;
            
            case "paper":
                result=(computerchoices==="rock") ? 'you win': 'you lose';
                break;
            case "scissors":
                result=(computerchoices==="paper") ? 'you win': 'you lose';
                break;
        }     
    }
    playerdisplay.textContent=`player:${playerchoices}`;
    computerdisplay.textContent=`computer:${computerchoices}`;
    resultdisplay.textContent=result;
}

