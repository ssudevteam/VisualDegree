const myDiv = document.getElementById("hero");
const image = new Image();

image.onload = function () {
  myDiv.style.backgroundImage = `url(../website/assets/images/hero_c.png)`; // Set the background image once it's loaded
  myDiv.classList.add("loaded"); // Add a CSS class to trigger the fade-in effect
};

image.src = "../website/assets/images/hero_c.png"; // Load the image
