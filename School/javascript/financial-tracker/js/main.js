// Enter JavaScript for the exercise here...
var itemNum = 1;
document.querySelector('.frm-transactions').addEventListener('submit', function(evt) {

    // create variables 
    var desc, type, amount, errorText, 
    tr, tdDesc, tdType, tdAmount, tdTool;

    // assign form elements values to variables
    desc = evt.target.elements['description'].value;
    type = evt.target.elements['type'].value;
    amount = evt.target.elements['currency'].value;
    errorText = '';

    // validation
    if (desc.trim() == '') {
        desc = 'Item ' + itemNum;
    }
    if (type == '') {
        errorText += 'Please choose a transaction type. \n';
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
        var amountText = parseFloat(amount).toFixed(2);
        // set attributes
        tr.setAttribute('class', type);
        tdDesc.textContent = desc;
        tdType.textContent = type;
        tdAmount.setAttribute('class', 'amount');
        tdAmount.textContent = '$' + amountText;
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
        itemNum++;
        // clear form
        evt.target.reset();

        // add value to total debits and credits
        changeCreditDebit(type, amount);
    }
    evt.preventDefault();
});

document.querySelector('.transactions').addEventListener('click', function(evt) {
    var type, amount;
    type = evt.target.parentNode.parentNode.classList[0];
    amount = parseFloat(evt.target.parentNode.parentNode.querySelector('.amount').innerHTML.replace('$','')) * -1;
    if (evt.target.classList.contains('delete')) {
        if (confirm('Are you sure you wish to delete this transaction?')) {
            evt.target.parentNode.parentNode.remove();
            changeCreditDebit(type, amount);
        }
    }
});

function changeCreditDebit(type, amount) {
    // create variables to store total debit and total credit
    var totalDebits, totalCredits, tCreds, tDebs;

    // store the values into variables
    totalDebits = document.querySelector('.right .debits');
    totalCredits = document.querySelector('.right .credits');
    tCreds = parseFloat(totalCredits.innerHTML.replace('$',''));
    tDebs = parseFloat(totalDebits.innerHTML.replace('$',''));

    
    if (type == 'debit') {
        tDebs += parseFloat(amount);
    } else if (type == 'credit') {
        tCreds += parseFloat(amount);
    }

    totalCredits.innerHTML = '$' + parseFloat(tCreds).toFixed(2);
    totalDebits.innerHTML = '$' + parseFloat(tDebs).toFixed(2);
}
var idleTime = 0;
var idle = setInterval(refreshPage, 60000); // every minute
// reset when mouse moves
document.addEventListener('mousemove', function(evt) {
    idleTime = 0;
})
// resets when key is pressed
document.addEventListener('keypress', function(evt) {
    idleTime = 0;
})
// refresh page function
function refreshPage() {
    idleTime++;
    if (idleTime > 1){
        alert('The page will now refresh')
        location.reload(true);
    }
}