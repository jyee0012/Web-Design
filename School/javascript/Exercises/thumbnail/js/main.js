// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).
var trial = true;
// foreach loop that goes through all button elements
document.querySelectorAll('.thumbnail-sizes li').forEach(function(element) {
    // adds a click event listener to each of them
    if (!element.classList.contains('active') && !trial)
    {
        element.classList.add('hidden');
    }
    element.addEventListener('click', function (evt) { 
        // removes the already active button.
        document.querySelector('.active').classList.remove('active');
        // adds the active class to the clicked on button
        element.classList.add('active');
        // remove the size of the thumbnails
        var thumbnails = document.querySelector('.thumbnails');
        thumbnails.classList.remove(thumbnails.classList.item(1));
        // add the size class based on what is currently active
        if (trial){
            var size = element.classList.item(0);
            thumbnails.classList.add(size[size.length -2] + size[size.length -1])
        }
        else {
        switch (element.innerHTML)
        {
            case "Large":
            thumbnails.classList.add('sm');

            break;
            case "Small":
            thumbnails.classList.add('md');
            break;
            case "Medium":
            thumbnails.classList.add('lg');
            break;
        }
    }
    } )
}, this);
