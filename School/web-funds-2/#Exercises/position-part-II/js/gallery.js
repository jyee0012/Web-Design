"use strict";
(function () {
  //create references to each slide and the slide container
  var slider = document.querySelector(".gallery");
  var slideOne = document.querySelector(".slide-1");
  var slideTwo = document.querySelector(".slide-2");
  var slideThree = document.querySelector(".slide-3");
  var slideView = document.querySelector(".slide-view")
  var slidesArray = document.querySelectorAll("[role=slide]");
  console.log(slidesArray)


  var leftButton = document.querySelector(".previous-slide");
  var rightButton = document.querySelector(".next-slide");
  var outputValues = document.querySelectorAll(".output p span");

  var maxSlideCount = slidesArray.length;
  var currentSlide = 0;
  var nextSlide = 0;
  var previousSlide = 0;


  var maxSlideCount = slidesArray.length;
  var currentSlide = 0;
  var nextSlide=0;
  var previousSlide=0;
  function updateGauges(){
    outputValues[0].innerHTML =  (currentSlide-1 <= 0 ) ? 0: currentSlide-1;
    outputValues[1].innerHTML = currentSlide;
    outputValues[2].innerHTML = (currentSlide+1 > 3 ) ? 3: currentSlide+1;
    }
    function initSlides(){
      hideSlides();
     slideView.children[currentSlide].className = "current-slide"
    }
    
    function hideSlides(){
       slidesArray.forEach(function(value, index) {
         if(index != currentSlide) {
          
          value.style.opacity=0;

         }
       }) 
    }

    function presentSlide(direction){
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
          TweenLite.to(slidesArray[currentSlide], 2, { opacity: 0 });
          slideView.children[currentSlide].className = "dot"
          TweenLite.to(slidesArray[currentSlide-1], 2, { opacity: 1 });
          slideView.children[currentSlide-1].className = "current-slide"
          currentSlide -= 1;
        }
      }
        
          
      
      
    }
    // send ouputValues
    leftButton.addEventListener("click", function(){
     
      presentSlide(-1);
       
       // TweenLite.to(slidesArray[0], 3, {opacity:0});
    

    })
   rightButton.addEventListener("click", function(){
   
      presentSlide(1);
    
    

   })
    
     
    initSlides();
   

}())
