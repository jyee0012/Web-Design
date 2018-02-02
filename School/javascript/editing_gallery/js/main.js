// Enter your JavaScript for the solution here...

document.querySelectorAll('.thumbnails img').forEach(function(element) {
    element.addEventListener('click', function(evt){
        evt.preventDefault();
        var image = document.querySelector('.editor img');
        var newSrc = element.src //find the src tag of the image and replace the _thumbs with ""
        newSrc = newSrc.replace('_thumb',"");
        image.src = newSrc;
        image.alt = element.alt;
        image.title = element.title;
    });
}, this);
// find a way to retrieve the submit button and attach an event on it.
//document.querySelector('input').getAttribute("type");