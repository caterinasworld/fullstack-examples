// writing directly to the DOM
document.write('Writing to the DOM...');

// Appending elements to the DOM
let main = document.querySelector('main');

let heading1 = document.createElement('h1');
heading1.textContent = 'DOM Manipulations';
main.append(heading1);

let divElement = document.createElement('div');
divElement.textContent = 'A new <div> element was added to DOM';
main.append(divElement);

// Create and Add a new <br> element
main.append(document.createElement('br'));

let button = document.createElement('button');
button.setAttribute('id', 'example');
button.textContent = 'Click Me!';
main.append(button);

// Adding an event listener to the previously created button
document.getElementById('example').onclick = function (event) {
  console.log(event);
  alert('the button has been pressed');
};
