// TODO: in data/todo-items.json, add a deadline date property to each todo item

var xhr = new XMLHttpRequest(); // 1

function renderTodos(todos) {
	var todoList = $('<ul>');

	todos.forEach(function (todo) {
		// TODO: render the completed property as a checkbox input
		todoList.append('<li>' + todo.desc + '</li>');
	});
	// TODO: update to use DOM API and not a string (i.e. not innerHTML)
	$('.todo-view').empty().append(todoList);
}

$('.btn-todos-load').on('click', function (evt) {
	$.getJSON(evt.target.href, renderTodos);
	evt.preventDefault();
});
