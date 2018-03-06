// Enter your JavaScript for the solution here...
var count = 1;
document.querySelector('.frm-control').addEventListener('input', function (evt) {
    if(document.querySelector('.frm-control').value == '')  {
        document.querySelector('.reset').classList.add('hidden');
    } else {
        document.querySelector('.reset').classList.remove('hidden');
    }
    document.querySelectorAll('.thumb-display').forEach(function(element) {
        var tags = element.querySelector('.tags').innerHTML;
        for(var i = 0; i < 4; i++){
            tags = tags.replace('#','');
        }
        var allTags = tags.split(' ');
        var hasTags = 0;
        allTags.forEach(function(tag) {
            if(tag.match(evt.target.value) != null) {
                hasTags++;
            }
        }, this);
        if (hasTags == 0){
            element.classList.add('hidden');
        } else{
            element.classList.remove('hidden');
        }
    }, this);
});



document.querySelector('.reset').addEventListener('click', function(evt) {
    evt.preventDefault();
    document.querySelectorAll('.thumb-display').forEach(function(element) {
        element.classList.remove('hidden');
    }, this);
    document.querySelector('.reset').classList.add('hidden');
    document.querySelector('.frm-control').value = '';
});