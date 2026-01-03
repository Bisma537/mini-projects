//
function updateclock(){
     const Now=new Date();
     let hours=Now.getHours();
     const dm=hours >= 12 ? "PM" : "AM";
     hours=hours % 12 || 12;
     hours=hours.toString().padStart(2,0);
     const min=Now.getMinutes().toString().padStart(2,0);
     const sec=Now.getSeconds().toString().padStart(2,0);
     const time=`${hours}:${min}:${sec} ${dm}`;
     document.getElementById("clock").textContent=time;
}
updateclock();
setInterval(updateclock,1000);//work like a settimeout