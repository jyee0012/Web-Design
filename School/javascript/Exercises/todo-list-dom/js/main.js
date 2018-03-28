/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	
	var div,
		checkbox,
		label,
		labelText,
		dnSpan,
		dn,
		upSpan,
		up,
		rt,
		rtSpan,
		todoText;

	todoText = evt.target.elements['todo-item'].value;

	dn = '\u21e9'; // Unicode value of down arrow
	up = '\u21e7'; // Unicode value of up arrow
	rt = '\u21e8';

	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText.trim() === '') {
		todoText = 'Todo ' + (todoCount);
	}

	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);
	dnSpan = document.createElement('span');
	upSpan = document.createElement('span');
	rtSpan = document.createElement('span');

	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');
	dnSpan.setAttribute('class', 'arrow dn');
	upSpan.setAttribute('class', 'arrow up');
	rtSpan.setAttribute('class', 'arrow rt');
	dnSpan.textContent = dn;
	upSpan.textContent = up;
	rtSpan.textContent = rt;

	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	div.appendChild(rtSpan);
	div.appendChild(dnSpan);
	div.appendChild(upSpan);

	// add the document fragment to the document for rendering
	todos.appendChild(div);

	// clear the form
	evt.target.reset();

	evt.preventDefault();
});

document.querySelector('.todo-list').addEventListener('click', function (evt) {
	//check for click on an arrow
	var targetTodo = evt.target.parentNode; 
	if (evt.target.classList.contains('arrow')) {
		// identify the type of arrow (i.e. down or up)
		if (evt.target.classList.contains('dn')) {
			siblingTodo = targetTodo.nextElementSibling;
			// insert the sibling before the target
			todos.insertBefore(siblingTodo, targetTodo);
		} else if (evt.target.classList.contains('up')) {
			siblingTodo = targetTodo.previousElementSibling;
			// insert the sibling before the target
			todos.insertBefore(targetTodo, siblingTodo);
		} else if (evt.target.classList.contains('rt')) {
			if(confirm('Are you sure you wish to remove this list item?'))
			{
				targetTodo.remove();
			}
		}
	}
});