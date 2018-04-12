// Your code here...
var friends, friendDetails = [];
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function (evt) {
    friends = JSON.parse(xhr.responseText);
});
xhr.open('GET', 'friends/friends.json', true);
xhr.send();

document.querySelector('.pure-menu-link').addEventListener('click', function (evt) {
    console.log(evt.target);
});
// xhr.addEventListener('load', function (evt) {
//     friendDetails[0] = JSON.parse(xhr.responseText);
// });
// xhr.open('GET', 'friends/1.json', true);
// xhr.send();

// xhr.addEventListener('load', function (evt) {
//     friendDetails[1] = JSON.parse(xhr.responseText);
// });
// xhr.open('GET', 'friends/2.json', true);
// xhr.send();

// xhr.addEventListener('load', function (evt) {
//     friendDetails[2] = JSON.parse(xhr.responseText);
// });
// xhr.open('GET', 'friends/3.json', true);
// xhr.send();

// xhr.addEventListener('load', function (evt) {
//     friendDetails[3] = JSON.parse(xhr.responseText);
// });
// xhr.open('GET', 'friends/4.json', true);
// xhr.send();


document.querySelector('#menu').addEventListener('click', function (evt) {
    if (evt.target.parentNode.classList.contains('friends')) {
        friendListing();
    }
    evt.preventDefault();
});



function friendListing() {
    var container, heading, list, listitems = [], links = [];
    //create required elements
    container = document.createElement('div');
    heading = document.createElement('span');
    list = document.createElement('ul');
    listitems[0] = document.createElement('li');
    listitems[1] = document.createElement('li');
    listitems[2] = document.createElement('li');
    listitems[3] = document.createElement('li');
    links[0] = document.createElement('a');
    links[1] = document.createElement('a');
    links[2] = document.createElement('a');
    links[3] = document.createElement('a');

    //set attributes
    container.setAttribute('class', 'pure-menu custom-restricted-width');
    heading.setAttribute('class', 'pure-menu-heading');
    heading.textContent = 'Friends';
    list.setAttribute('class', 'pure-menu-list');
    for (var i = 0; i < friends.length; i++) {
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

function showFriendDetails(friendId) {
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
    img.setAttribute('src', 'img/' + friendDetails[friendId - 1].avatar);
    img.setAttribute('class', 'photo');
    name.setAttribute('class', 'name');
    name.textContent = friendDetails[friendId - 1].firstName + ' ' + friendDetails[friendId - 1].lastName;

    emailSpan.setAttribute('class', 'label');
    homeSpan.setAttribute('class', 'label');
    emailSpan.textContent = 'email:';
    homeSpan.textContent = 'hometown:';
    email.appendChild(emailSpan);
    home.appendChild(homeSpan);
    email.textContent = ' ' + friendDetails[friendId - 1].firstName.toLocaleLowerCase() + friendDetails[friendId - 1].lastName[0].toLocaleLowerCase() + '@example.com';
    home.textContent = ' edmonton, ab';

    bio.setAttribute('class', 'bio');
    bio.textContent = lorem;
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