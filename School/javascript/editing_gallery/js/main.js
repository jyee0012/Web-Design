// Enter your JavaScript for the solution here...

document.querySelectorAll('.thumbnails img').forEach(function(element) {
    element.addEventListener('click', function(evt){
        evt.preventDefault();
        var image = document.querySelector('.editor img');
        var newSrc = element.src.split("_"); //find the src tag of the image and replace the _thumbs with ""
        //console.log(newSrc);
        //image.src = newSrc[0];
        image.alt = element.alt;
        image.title = element.title;
    });
}, this);