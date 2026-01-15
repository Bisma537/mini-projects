const display=document.getElementById("display");
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";

    }
}
function cleardisplay(){
display.value="";
}
function appendtodisplay(Input){
    display.value += Input;
}