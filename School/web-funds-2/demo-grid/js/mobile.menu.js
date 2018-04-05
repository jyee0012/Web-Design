(function () {
    trace = console.log
    var mobileMenu = document.querySelector("[role='mobile-controls']");
    var openMenuButton = document.querySelector("[role='open-menu-button']");
   
    function onRequestNavigationMenu(e) {
        trace(e)
      }
    var menuViewState = false;
    
    

    function configUI(){
     
    }

    function configListeners(){
        openMenuButton.addEventListener('click', onRequestNavigationMenu)
    }

    function onRequestNavigationMenu(e) {
       if(menuViewState){
          menuViewState = false;
          TweenLite.to(mobileMenu, 1, {top:"-60%", ease: Power4.easeOut});
       }else{
           menuViewState = true;
           TweenLite.to(mobileMenu, 1, {top:"0", ease: Power4.easeOut});
       }
      }
   
    configUI();
    configListeners();





})()