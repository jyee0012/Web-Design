// access to the two parent divs
var div1 = document.querySelector('div');
var div2 = div1.nextElementSibling;

// access to p3 and p4 for a swap
var p3 = div1.lastElementChild;
var p4 = div2.firstElementChild;

// swap p3 with p4
div1.replaceChild(p4,p3);
div2.appendChild(p3);

// remove p2
div1.removeChild(div1.children[1]);

// create p5
p5 = document.createElement('p');
text = document.createTextNode('paragraph 5');
p5.appendChild(text);

// insert p5 as secondchild to div 1
div1.insertBefore(p5,p4);

/* LOL - TSUKI GA MICHIBIKU ISEKAI DOUCHUU
so something bothers me for the latest chapter of Tsuki ga Michibiku Isekai Douchuu
so the latest chapter introduces some characters from the Limia faction
in comparison from web novel to manga:
The court magician Wudi has the name Woody
The knight Bredda has the name Belda
The mercenary Naval has the name Navarre
The country Lorel has been called Laurel
every other name has been spot on so far.....
*/