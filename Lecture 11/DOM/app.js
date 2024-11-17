



/*

The DOM (Document Object Model) is a programming interface for web documents. 
The DOM allows developers to manipulate the structure, 
style, and content of a webpage dynamically using programming languages like JavaScript.

*/

// ------------------------------------------------------------------

// > Document: The root of the tree (document object in JavaScript).
// > Element Nodes: Represent HTML elements like <div>, <p>, etc.
// > Attribute Nodes: Represent attributes like class, id, or href on elements.


// ---------------------------------------------------------------

// > getElementById(): Select an element by its id.
// > getElementsByClassName(): Select all elements with a specific class.
// > getElementsByTagName(): Select all elements with a specific tag name.
// > querySelector(): Select the first element matching a CSS selector.
// > querySelectorAll(): Select all elements matching a CSS selector.



console.log(document);   // This returns entire HTML

const element = document.getElementById("parent");  // this returns HTML COLLECTION
console.log(element.textContent);

element.textContent = "New Text";// Change or get the text inside an element.
console.log(element.textContent);

element.innerHTML = "hello";  // Change or get the HTML inside an element.
console.log(element.innerHTML);



const tageName = document.getElementsByTagName('p');   // this returns an ARRAY 
for(let item of tageName){
    item.style.color = "red";
}


// setAttribute(): Add or modify an attribute.
// getAttribute(): Retrieve the value of an attribute.
// removeAttribute(): Remove an attribute.

const elementbyID = document.getElementById('parent');
elementbyID.setAttribute("class", "new-class");   // change class , which includes in parent
console.log(elementbyID)

const elementbyClass = document.getElementsByClassName("okay");   // THIS ALSO RETURNS AN ARRAY


const querySelect = document.querySelector(".okay");   // return only one element
console.log(querySelect);

const querySelectAll = document.querySelectorAll("p");   // return Nodelist
console.log(querySelectAll);















