//roll dice
function rolldice(){
    const numofdice=document.getElementById("numofdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimages=document.getElementById("diceimages");
    const values=[];
    const images=[];
     for(i=0; i<numofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        console.log(value);
        values.push(value);
        images.push(`<img src="dice/d${value}.png"alt="dice: ${value}">`);
     }
    diceresult.textContent=`dice:${values.join(',')}`;
    diceimages.innerHTML=images.join('');
}