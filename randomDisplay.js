/*
FILE NAME: randomDisplay.js
WRITTEN BY: Michelle Duan
WHEN: May, 2015
         
PURPOSE: Create a rotating display for homepage.html
*/


//create an array containing the photographs to be displayed in the slideshow
var photos = ["Glass/584.jpg","Glass/LibenskyFreeThrough1copy.jpg","Glass/AnnWolffDoubleHeadcopy.jpg",
"Glass/MyersBlackVessel2copy.jpg", "Glass/KyoheiFujitaBlueBox6copy.jpg","Glass/DanClaymancopy.jpg"];

//array of artist names to match photos by index number
var artists = ["Unknown", "Jaroslava Brychtova & Stanislav Libensky", "Ann Wolff", "Joel Phillip Myers", 
"Kyohei Fujita", "Dan Clayman"]

var i = 0; /*initiating the loop*/

//function to swap photos in the rotating display every 3 seconds
function swapPhoto()
{
   var name = document.getElementById("name");
   name.innerHTML=artists[i];
   document.slide.src = photos[i];
   if(i<photos.length-1) { i++; }
   else { i = 0;}
   setTimeout("swapPhoto()",3000);
}
window.onload=swapPhoto;