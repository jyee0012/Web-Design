var todo;
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function (evt){
    todo = JSON.parse(xhr.responseText);
});
xhr.open('GET','todo.json',true);
xhr.send();

document.querySelector('.output').innerHTML = todo.desc;