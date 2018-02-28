function updateOutput () {
    var output = document.querySelector('.output');
    var list = '<ul>';
    var num = 10;
    // user input on how many list items there are.
    for(var count = 0; count < num; count++){
        list = list + '<li>' + 'Item ' + (count + 1) + '</li>';
    }
    list = list + '</ul>';
    output.innerHTML = list;
}
// updateOutput();

function colorOddRed (){
    var list = document.querySelectorAll('li');
    for(var count = 0; count < list.length;count += 2){
        list[count].classList.add('stripe');
    }
}
// colorOddRed();

function todoLists(){
    var todoList = document.querySelector('.todo-list');
    var list = '<ul>';
    var num = prompt('How many items?', '');
    for(var count = 0; count < num;count++){
        list += '<li><input type="checkbox"><label contenteditable>Item ' + (count + 1) + '</label></li>';
    }
    list += '</ul>';
    todoList.innerHTML = list;
}
todoLists();