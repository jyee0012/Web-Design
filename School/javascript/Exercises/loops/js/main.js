function updateOutput () {
    var output = document.querySelector('.output');
    var list = '<ol>';
    // user input on how many list items there are.
    list = list + '</ol>';
    output.innerHTML = list;
}
function userInput() {
    if (confirm('Add a list item?')){
        do{
            list = list + '<li>'
            var input = prompt('What to add?', '');
            list = list + input + '</li>'
        }while(confirm('Add another list item?'))
    }
}
updateOutput();