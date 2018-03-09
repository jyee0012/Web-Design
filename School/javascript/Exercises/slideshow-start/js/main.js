// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
var currentImg = 0;
var idx;

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

// add the appropriate number of selector bullets
var imgTrackerDIV = document.querySelector('.image-tracker');
for(idx = 0; idx < images.length;idx++) {
    imgTrackerDIV.innerHTML += '<span class="control" data-idx="' + (idx) + '">&#8226</span> '
}

// highlight the first bullet as 'active'
var periodArray = document.querySelectorAll('.image-tracker span');
periodArray[currentImg].classList.add('active');
// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    var target = evt.target;
    if (target.classList.contains('control')) {
        periodArray[currentImg].classList.remove('active');
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
        } else {
        	// selector bullet clicked
            currentImg = Number(target.dataset.idx);
        }
        // if index is outside the array.
        if (currentImg >= images.length){
            currentImg = 0;
        } else if (currentImg < 0){
            currentImg = images.length - 1;
        }

        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        periodArray[currentImg].classList.add('active');
        
    }
}); 
// key presses
document.addEventListener('keydown', function(evt){
    var click = new MouseEvent('click', {
        bubbles: true
    });
    periodArray[currentImg].classList.remove('active');
    switch(evt.key) {
        case 'ArrowRight':
        document.querySelector('.next').dispatchEvent(click);
        break;
        case 'ArrowLeft':
        document.querySelector('.prev').dispatchEvent(click);
        break;
        default:
        break;
    }
})
