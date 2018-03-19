"use strict";
(function () {
  // create references to each element of the galllery
  var slider = document.querySelector(".gallery");
  var slideOne = document.querySelector(".slide-1");
  var slideTwo = document.querySelector(".slide-2");
  var slideThree = document.querySelector(".slide-3");
  var slideView = document.querySelector(".slide-view");
  var slidesArray = document.querySelectorAll("[role=slide]");
 
  var maxSlideCount = slidesArray.length;
  var currentSlide = 0;
 
 
 
 


//  add event listeners to each of the dots
  slideView.querySelectorAll("span").forEach(function(value, index) {
    value.dataset.index = index;
      value.addEventListener("click", function(event){
         loadSlides(event);
      })
 })
   
function loadSlides(event){
  var index = +event.currentTarget.dataset.index;
       if(currentSlide != index){
         TweenLite.to(slidesArray[index], 2, { opacity: 1 });
         TweenLite.to(slidesArray[currentSlide], 2, { opacity: 0 });
         updateSlideView(currentSlide, index)
         currentSlide =  index;
       }
      
}

function  updateSlideView(oldSlide, newSlide) {
  slideView.children[oldSlide].className = "dot"
  slideView.children[newSlide].className = "current-slide"
}
  



 
    function galleryInit(){
     slideSetup();
     slideView.children[currentSlide].className = "current-slide"
    }
    
    function slideSetup(){
       slidesArray.forEach(function(value, index) {
         if(index != currentSlide) {
           value.style.opacity=0;
         }
       }) 
    }

    function crossFade(direction){
      if (direction === 1) {
        console.log(currentSlide)
        if (currentSlide < 2) {
          TweenLite.to(slidesArray[currentSlide], 2, { opacity: 0 });
          slideView.children[currentSlide].className = "dot"
          TweenLite.to(slidesArray[currentSlide + 1], 2, { opacity: 1 });
          slideView.children[currentSlide+1].className = "current-slide"
          currentSlide += 1;
        }
      } 

      if (direction === -1){
        console.log(currentSlide)
        if (currentSlide > 0) {
          TweenLite.to(slidesArray[+currentSlide], 2, { opacity: 0 });
          slideView.children[+currentSlide].className = "dot"
          TweenLite.to(slidesArray[currentSlide-1], 2, { opacity: 1 });
          slideView.children[currentSlide-1].className = "current-slide"
          currentSlide -= 1;
         
        }
      }
        
          
      
      
    }
 
    
    
   galleryInit();
   

}())
