// Get elements from the DOM
const textElement = document.getElementById('textContent');
const styleElement = document.getElementById('styleMe');
const container = document.getElementById('container');

// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    textElement.textContent = 'Cool right!?! Text changed';
});

// Modify CSS styles via JavaScript
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    styleElement.style.color = 'blue';
    styleElement.style.fontWeight = 'bold';
    styleElement.style.backgroundColor = 'yellow';
});

// Add or remove an element when a button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new element added by JavaScript!';
    newElement.id = 'newElement';
    container.appendChild(newElement);
});
