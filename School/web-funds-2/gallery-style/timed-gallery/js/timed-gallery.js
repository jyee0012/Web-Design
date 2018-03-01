"use strict";
(function () {
  // create references to each element of the galllery
  var slider = document.querySelector(".gallery");
  var slideOne = document.querySelector(".slide-1");
  var slideTwo = document.querySelector(".slide-2");
  var slideThree = document.querySelector(".slide-3");
  var slideView = document.querySelector(".slide-view");
  var slidesArray = document.querySelectorAll("[role=slide]");
  var timerIcon = document.querySelector(".timer");
  var maxSlideCount = slidesArray.length-1;
  var currentSlide = 0;
  var timerOn = true;
  var cycleTime;
 
 
//remove 
var outputValues = document.querySelectorAll(".output p span");
function galleryInit(){
  slideSetup();
  addListeners();
  startTimer();
  slideView.children[currentSlide].className = "current-slide";
 }


function addListeners() {
   //  add event listeners to each of the dots
   slideView.querySelectorAll("span").forEach(function(value, index) {
    value.dataset.index = index;
      value.addEventListener("click", function(event){
         loadSlides(event);
          if(timerOn){
            timerIcon.classList.add("timer-off");
            timerIcon.classList.remove("timer-on");
            timerOn=false;
            timerIcon.querySelector("i").innerHTML="&#xE426"
            stopTimer();
          }   
        
        
      });
     timerIcon.addEventListener("click", function(){
       checkTimerState();
     })
      
 });

}
function checkTimerState(){
  if(timerOn){
    timerIcon.classList.add("timer-off");
    timerIcon.classList.remove("timer-on");
    timerIcon.querySelector("i").innerHTML="&#xE426"
    timerOn=false;
   stopTimer();
  }else{
    timerIcon.classList.add("timer-on");
    timerIcon.classList.remove("timer-off");
    timerIcon.querySelector("i").innerHTML="&#xE425;"
    startTimer();
    timerOn=true;
   }
}
 //  timer event 
 function startTimer() {
  cycleTime = window.setInterval(changeSlide, 2000);

}

function stopTimer() {
 clearInterval(cycleTime);
}
  function changeSlide() {
    
    if(currentSlide < maxSlideCount){
      TweenLite.to(slidesArray[currentSlide], 2, { opacity: 0 });
    TweenLite.to(slidesArray[currentSlide+1], 2, { opacity: 1 });
    updateSlideView(currentSlide, currentSlide+1)
      currentSlide +=1;
    }else{
     TweenLite.to(slidesArray[currentSlide], 2, { opacity: 0 });
      updateSlideView(currentSlide, 0);
      currentSlide=0;
      TweenLite.to(slidesArray[currentSlide], 2, { opacity: 1 });
      
    }

  }
   
function loadSlides(event){
  var index = +event.currentTarget.dataset.index;
       if(currentSlide != index){
      
         TweenLite.to(slidesArray[index], 2, { opacity: 1 });
         TweenLite.to(slidesArray[currentSlide], 2, { opacity: 0 });
         updateSlideView(currentSlide, index)
         currentSlide =  index;
         console.log(currentSlide,  index)
        
       
       }
      
}

function  updateSlideView(oldSlide, newSlide) {
  slideView.children[oldSlide].className = "dot"
  slideView.children[newSlide].className = "current-slide"
}
  


 
    
    
    function slideSetup(){
       slidesArray.forEach(function(value, index) {
         if(index != currentSlide) {
           value.style.opacity=0;
         }
       }) 
    }

     
   
    
    
   galleryInit();
   

}())
