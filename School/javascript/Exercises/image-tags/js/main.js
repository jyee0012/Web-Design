// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be updated with the tag that was entered by the user. 
// Do not overwrite any existing tags, simply add each additional tag onto the already existing list. 
// A tag cannot be empty (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden class from the p.feature.error element. 
// If the form is submitted correctly, then ensure that the p.feature.error element is hidden.
document.querySelector('.feature.frm').addEventListener('submit', function(evt){
    evt.preventDefault();
    var tags = evt.target.elements.tags.value;
    var errorMsg = document.querySelector('.feature.error');
    var displayTag = document.querySelector('.tags');
    if (tags.trim() == '') {
        errorMsg.innerHTML = 'Please enter an actual tag.';
        errorMsg.classList.remove('hidden');
    } else if (tags.includes(' ')) {
        errorMsg.innerHTML = 'Your tags cannot contain spaces.';
        errorMsg.classList.remove('hidden');
    } else {
        errorMsg.classList.add('hidden');
        displayTag.innerHTML = displayTag.innerHTML +'#'+tags+' ';
    }
});