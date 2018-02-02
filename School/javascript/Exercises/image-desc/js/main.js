// find the text that links to the image
var featureLink = document.querySelector('.link');

// add an event on the variable and do the function.
featureLink.addEventListener('click', function (evt) {
    // prevent the default event when clicking on the link
    evt.preventDefault();
    // find the img
    var featureImg = document.querySelector('img.feature');
    // change the img properties
    featureImg.src = featureLink.href;
    featureImg.alt = featureLink.title; // featureImg.setAttribute("alt", featureLink.title);
    featureImg.classList.remove('hidden');
});
// when move hovers over img it will change the text below it to the title of the image.
document.querySelector('img').addEventListener('mouseenter', function (evt){
    document.querySelector('.feature.title').innerHTML = document.querySelector('img').alt;
});
// when move leaves the img it will change the text below it to an empty string.
document.querySelector('img').addEventListener('mouseleave', function (evt){
    document.querySelector('.feature.title').innerHTML = "";
});