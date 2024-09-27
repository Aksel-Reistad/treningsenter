const images = [
  'bilder/sterk-man.jpg',
  'bilder/sterk-man2.jpg',
  'bilder/sterk-man3.jpg'
];

let currentIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);

window.onload = changeBackground;

  
  
  
  
  
  
  
