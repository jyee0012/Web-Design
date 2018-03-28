// Enter JavaScript for the exercise here...
var itemNum = 1;
document.querySelector('.frm-transactions').addEventListener('submit', function(evt) {

    // create variables 
    var desc, type, amount, errorText, 
    tr, tdDesc, tdType, tdAmount, tdTool;

    // assign variables to values or vice versa
    desc = evt.target.elements['description'].value;
    type = evt.target.elements['type'].value;
    amount = evt.target.elements['currency'].value;
    errorText = '';

    // validation
    if (desc.trim() == '') {
        desc = 'Item ' + itemNum;
    }
    if (type == '') {
        errorText += 'Please choose a transaction type. ';
    }
    if (amount == '') {
        amount = 0;
    }
    if (Number(amount) < 0) {
        errorText += 'Please provide a positive number.';
    }
    // throw error message
    document.querySelector('.error').innerHTML = errorText;

    // if valid
    if (errorText == '') {
        // create required elements
        tr = document.createElement('tr');
        tdDesc = document.createElement('td');
        tdType = document.createElement('td');
        tdAmount = document.createElement('td');
        tdTool = document.createElement('td');
        var trashIcon = document.createElement('i');

        // set attributes
        tr.setAttribute('class', type);
        tdDesc.textContent = desc;
        tdType.textContent = type;
        tdAmount.setAttribute('class', 'amount');
        tdAmount.textContent = '$' + Math.round(amount* 100)/100;
        tdTool.setAttribute('class', 'tools');
        trashIcon.setAttribute('class', 'delete fa fa-trash-o');

        // build table row
        tdTool.appendChild(trashIcon);
        tr.appendChild(tdDesc);
        tr.appendChild(tdType);
        tr.appendChild(tdAmount);
        tr.appendChild(tdTool);
        
        // add the table row to the table
        document.querySelector('tbody').appendChild(tr);
        
        // clear form
        evt.target.reset();
    }
    console.log(desc + ':' + type + ':' + amount);
    evt.preventDefault();
});