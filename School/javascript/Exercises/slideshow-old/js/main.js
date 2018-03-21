// your js here...
var images = ['mountain1.jpg', 'mountain2.jpg','mountain3.jpg'];
var currentImg = 0;
document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

document.querySelector('.carousel').addEventListener('click', function (evt){
    var target = evt.target;
    if (target.classList.contains('control')){
        periodArray[currentImg].classList.remove('active');
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
        periodArray[currentImg].classList.add('active');
    }
});

var imgTrackerDIV = document.querySelector('.image-tracker');
for(var i = 0; i < images.length;i++) {
    imgTrackerDIV.innerHTML += '<span>&#8226</span> '
}
var periodArray = document.querySelectorAll('.image-tracker > span');
periodArray[currentImg].classList.add('active');
imgTrackerDIV.addEventListener('click',function(evt){
    for(var i = 0; i < periodArray.length;i++) {
        periodArray[i].addEventListener('click', function(evt){
            if(!periodArray[i].classList.contains('active')) {
                periodArray[currentImg].classList.remove('active');
                currentImg = i;
                document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
                periodArray[currentImg].classList.add('active');
            }
        });
    }
});
