const h1 = document.querySelector("section.authorities div.text h1");
const h2 = document.querySelector("section.authorities div.text h2");
const grayImage = document.querySelector("section.authorities img.grayImage");
const colorImage = document.querySelector("section.authorities img.colorImage");
const background = document.querySelector("section.authorities");

const tabOfQuotations = ["If you don't believe in yourself no one will do it for you", "If a person has no dreams, they no longer have any reason to live"];
const tabOfAuthorities = ['Kobe Bryant', 'Ayrton Senna'];
const tabOfGrayImages = ['images/kobe_black.png', 'images/ayrton_black.png'];
const tabOfColorImages = ['images/kobe_color.png', 'images/ayrton_color.png'];
const tabOfBgImages = ['C:/Users/krisu/Desktop/Dokumenty/Projekty/Personal%20Web%20Page/images/court.jpg', 'C:/Users/krisu/Desktop/Dokumenty/Projekty/Personal%20Web%20Page/images/yas_marina.jpg'];

let counter = 1;
let interval = 8000;

function ChangeAnimatedObject(){
    h1.textContent = '"' + tabOfQuotations[counter] + '"';
    h2.textContent = tabOfAuthorities[counter];
    grayImage.src = tabOfGrayImages[counter];
    colorImage.src = tabOfColorImages[counter];
    background.style.backgroundImage = "url("+tabOfBgImages[counter]+")";
    counter++;

    if(counter == 2){
        counter = 0;
    }
    
}

setInterval(ChangeAnimatedObject, interval);

