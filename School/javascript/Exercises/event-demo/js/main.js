/*
    Demonstrate basic event listening/handling.
*/ 
// 1. select required element(s)
var button = document.querySelector('button');

// 2. create event the event handler function
function buttonHandler(evt) {
    // alert('From Button Handler');
    console.log('from Button Handler');
    console.log(evt);
}

// 3, add the function as an event listener
button.addEventListener('click', buttonHandler);

var naitLink = document.querySelector('.nait-link');

function naitLinkHandler(evt) {
    // alert('You suck, leave now.');
    var result = confirm('Are you sure you wish to leave?');
    if (!result){
        evt.preventDefault(); 
    }
}

naitLink.addEventListener('click',naitLinkHandler);