//
// Session Storage
//

// Save data to sessionStorage
sessionStorage.setItem('name', 'Gary the Snail');
sessionStorage.setItem('email', 'gary@sponge.world');
sessionStorage.setItem('species', 'sea snail');

// Get saved data from sessionStorage
console.log(sessionStorage.getItem('name'));
// Gary
console.log(sessionStorage.getItem('email'));
// gary@sponge.world
console.log(sessionStorage.getItem('species'));
// sea snail

// Remove saved data from sessionStorage
sessionStorage.removeItem('email');

console.log(sessionStorage.getItem('email'));
// null

// Remove all saved data from sessionStorage
// sessionStorage.clear();
