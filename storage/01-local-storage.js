//
// Local Storage
//

// Save data to localStorage
localStorage.setItem('first', 'Spongebob');
localStorage.setItem('last', 'Squarepants');
localStorage.setItem('email', 'spongebob@sponge.world');
localStorage.setItem('species', 'sea sponge');

// Get saved data from localStorage
console.log(localStorage.getItem('first'));
// Spongebob
console.log(localStorage.getItem('last'));
// Squarepants
console.log(localStorage.getItem('email'));
// spongebob@sponge.world
console.log(localStorage.getItem('species'));
// sea sponge

// Remove saved data from localStorage
localStorage.removeItem('email');

console.log(localStorage.getItem('email'));
// null

// Clear all items
// localStorage.clear();
