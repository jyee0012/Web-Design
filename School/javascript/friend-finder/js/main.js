// Your code here...
var friends, friendDetails;
var xhr = new XMLHttpRequest(), friendXHR = new XMLHttpRequest();;
xhr.addEventListener('load', function (evt) {
    friends = JSON.parse(xhr.responseText);
});
xhr.open('GET', 'friends/friends.json', true);
xhr.send();

document.querySelector('.content').addEventListener('click', function (evt) {
    if (evt.target.dataset.id != null) {
        loadFriendDetails(evt.target.dataset.id);
    }
    evt.preventDefault();
});


document.querySelector('#menu').addEventListener('click', function (evt) {
    if (evt.target.parentNode.classList.contains('friends')) {
        removeContent();
        friendListing();
        evt.target.parentNode.classList.add('pure-menu-selected');
    }
    evt.preventDefault();
});
function loadFriendDetails(id) {
    friendXHR.addEventListener('load', function (evt) {
        friendDetails = JSON.parse(friendXHR.responseText);
        removeContent();
        showFriendDetails();
    });
    friendXHR.open('GET', 'friends/' + id + '.json', true);
    friendXHR.send();
}

function removeContent() {
    var content = document.querySelector('.content');
    if (content.childNodes.length > 0) {
        content.removeChild(content.childNodes[0]);
    }
}

function friendListing() {
    var container, heading, list, listitems = [], links = [];
    //create required elements
    container = document.createElement('div');
    heading = document.createElement('span');
    list = document.createElement('ul');

    //set attributes
    container.setAttribute('class', 'pure-menu custom-restricted-width');
    heading.setAttribute('class', 'pure-menu-heading');
    heading.textContent = 'Friends';
    list.setAttribute('class', 'pure-menu-list');
    for (var i = 0; i < friends.length; i++) {
        listitems[i] = document.createElement('li');
        links[i] = document.createElement('a');
        links[i].setAttribute('href', '#');
        links[i].setAttribute('class', 'pure-menu-link');
        links[i].setAttribute('data-id', friends[i].id);
        links[i].textContent = friends[i].firstName + ' ' + friends[i].lastName;
        listitems[i].setAttribute('class', 'pure-menu-item')
        listitems[i].appendChild(links[i]);
        list.appendChild(listitems[i])
    }
    // build elements
    container.appendChild(heading);
    container.appendChild(list);
    // add element to document
    document.querySelector('.content').appendChild(container);
}

function showFriendDetails() {
    var container, identity, img, name, email, emailSpan, home, homeSpan, list, bio;
    // create required elements
    container = document.createElement('div');
    identity = document.createElement('div');
    img = document.createElement('img');
    name = document.createElement('h2');
    list = document.createElement('ul');
    email = document.createElement('li');
    home = document.createElement('li');
    emailSpan = document.createElement('span');
    homeSpan = document.createElement('span');
    bio = document.createElement('p');
    // set attributes
    container.setAttribute('class', 'friend');
    identity.setAttribute('class', 'identity');
    img.setAttribute('src', 'img/' + friendDetails.avatar);
    img.setAttribute('class', 'photo');
    name.setAttribute('class', 'name');
    name.textContent = friendDetails.firstName + ' ' + friendDetails.lastName;

    emailSpan.setAttribute('class', 'label');
    homeSpan.setAttribute('class', 'label');
    emailSpan.textContent = 'email:';
    homeSpan.textContent = 'hometown:';
    email.appendChild(emailSpan);
    home.appendChild(homeSpan);
    email.textContent = ' ' + friendDetails.email;
    home.textContent = ' ' + friendDetails.home;

    bio.setAttribute('class', 'bio');
    bio.textContent = friendDetails.bio;
    // build elements
    list.appendChild(email);
    list.appendChild(home);
    identity.appendChild(img);
    identity.appendChild(name);
    identity.appendChild(list);
    container.appendChild(identity);
    container.appendChild(bio);
    // add elements to document
    document.querySelector('.content').appendChild(container);
}