/*
    Demo project showing how to link to an external
    JavaScript file.
*/ 
var hello;
var greeting = function(greet)
{
    if (greet == null)
    {
        return 'Hi there,';
    }
    else
    {
        return greet;
    }
}

var task = function()
{
    var name = prompt("What is your name?", "Bob");
    alert("Hello, " + name);
    if (name == "Nobody")
    document.querySelector('h1').innerHTML = "Nobody is Perfect";    
    else if (name == "Paul")
    document.querySelector('h1').innerHTML = "Hi, " + name;
    else
    document.querySelector('h1').innerHTML = greeting(hello) +" "+ name;
}