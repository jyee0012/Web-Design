// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg','mountain3.jpg'];
var currentImg = 0;
document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

document.querySelector('.carousel').addEventListener('click', function (evt){
    var target = evt.target;
    if (target.classList.contains('control')){
        if (target.classList.contains('next')){
            currentImg++;
        } else if (target.classList.contains('prev')){
            currentImg--;
        }
        if (currentImg >= images.length){
            currentImg = 0;
        } else if (currentImg < 0){
            currentImg = images.length - 1;
        }
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
    }
});