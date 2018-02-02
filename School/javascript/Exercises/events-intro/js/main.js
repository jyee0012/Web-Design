// v1
// 1. select the target element
var targetImg = document.querySelector('img.feature');
var targetText = document.querySelector('p.feature');
// 2. create the event listener function
function featureClickHandler(evt){
    targetText.classList.remove('hidden');
}
// 3. add event listener
targetImg.addEventListener('click', featureClickHandler);

// v2
function featureClickHandler(evt){
    document.querySelector('p.feature').classList.remove('hidden');
}

document.querySelector('img.feature').addEventListener('click', featureClickHandler);

// v3
document.querySelector('img.feature').addEventListener('click', function (evt){
    document.querySelector('p.feature').classList.remove('hidden');
});