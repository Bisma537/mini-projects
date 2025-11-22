//random number generator
const b = document.getElementById("myb");
const lo = document.getElementById("l1");
const lt = document.getElementById("l2");
const lth = document.getElementById("l3");
const min = 1;
const max = 6;
let num1;
let num2;
let num3;

b.onclick = function(){
    num1= Math.floor(Math.random() * max) + min;
    num2 = Math.floor(Math.random() * max) + min;
    num3 = Math.floor(Math.random() * max) + min;
    lo.textContent = num1;
    lt.textContent = num2;
    lth.textContent = num3;
}
