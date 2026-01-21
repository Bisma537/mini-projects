const images = document.querySelectorAll(".img");
let index = 0;

function showImage(i){
  images.forEach(img => {
    img.style.display = "none";
  });

  images[i].style.display = "block";
}

showImage(index);

function next(){
  index++;

  if(index >= images.length){
    index = 0;
  }

  showImage(index);
}

function prev(){
  index--;

  if(index < 0){
    index = images.length - 1;
  }

  showImage(index);
}
