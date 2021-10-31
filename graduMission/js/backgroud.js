const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgurl = `url(bg/${chosenImage})`;
document.body.style.backgroundImage = bgurl;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.height = "100vh";

