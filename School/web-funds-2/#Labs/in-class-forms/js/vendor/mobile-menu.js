(function () {
    trace = console.log
    var mobileMenu = document.querySelector("[role='mobile-controls']");
    var openMenuButton = document.querySelector("[role='open-menu-button']");
    var closeMenu =  document.querySelectorAll("[role='url-request']")
   
 
    var menuViewState = false;
    
    

    function configUI(){
     
    }

    function configListeners(){
        openMenuButton.addEventListener('click', onRequestNavigationMenu)
    }

    function onRequestNavigationMenu(e) {
       closeMenu.forEach( function(item){
          item.addEventListener('click', onCloseMenu)
       })
       if(menuViewState){
          menuViewState = false;
          TweenLite.to(mobileMenu, 1, {top:"-60%", ease: Power4.easeOut});
       }else{
           menuViewState = true;
           TweenLite.to(mobileMenu, 1, {top:"0", opacity:1, ease: Power4.easeOut});
       }
      }

      function onCloseMenu(e){
     
        var url =  e.currentTarget.dataset.url;
           TweenLite.to(mobileMenu, 1, {top:"-60%",opacity:0, ease: Power4.easeOut,  onComplete: myFunction, onCompleteParams: [url] });
      }

      function myFunction(url){
          menuViewState = false;
            window.location.href = url;
      }
   
    configUI();
    configListeners();





})()