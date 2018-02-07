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
        document.querySelector('.title').innerHTML = image.title;
        var tagArray = element.getAttribute("data-tags").split(" ");
        // document.querySelector('.tags').innerHTML = tags;
    });
}, this);
document.querySelector('form').addEventListener('submit', function(evt){
    evt.preventDefault();
    var input = evt.target.elements.tag.value;
    var error = document.querySelector('.error');
    if (input.trim() == ""){
        error.innerHTML = 'Please enter a proper tag';
        error.classList.remove('hidden');
    }
    else{
        error.classList.add('hidden');
        var dataTag;
        var image = document.querySelector('.editor img');
        document.querySelectorAll('.thumbnails img').forEach(function(element){
            if (element.alt == image.alt)
            {
                dataTag = element;
            }
        });
        input = input.replace(" ", "-");
        var dataTags = dataTag.getAttribute("data-tags"); 
        dataTag.setAttribute('data-tags', dataTags +' '+ input);
        // document.querySelector('.tags').innerHTML = dataTag.getAttribute("data-tags");
        evt.target.elements.tag.value = "";
    }
});
function showTags(){

}
// find a way to retrieve the submit button and attach an event on it.
//document.querySelector('input').getAttribute("type");