//
// Cookies
//

// Set a cookie
document.cookie = 'name=Spongebob';

// Set a cookie with an expiration date
document.cookie =
  'email=spongebob@sponge.world; expires=Fri, 31 Dec 2021 23:59:59 GMT';

// Set a cookie with a Max-Age of one year
document.cookie = 'species=seasponge; max-age=31536000';

// Set a cookie with an expiration data of Dec 31, 2021
// Generate this data with the Date object and the toUTCString() method
document.cookie = `age=34; expires=${new Date(2021, 11, 31).toUTCString()}`;

// Get all cookies --> string format
console.log(document.cookie);
// name=Spongebob; email=spongebob@sponge.world; age=34; species=seasponge

// Get individual cookies
const cookieValue = document.cookie.split('; ');

console.log(cookieValue);
// Array(4)
// [
//   "name=Spongebob",
//   "email=spongebob@sponge.world",
//   "age=34",
//   "species=seasponge"
// ]

// Parse entire cookie string into an object
let obj = {};

cookieValue.forEach((item) => {
  let result = item.split('=');
  let [key, val] = result;
  obj[key] = val;
});

console.log(obj);
// Object
// {
//   name: "Spongebob",
//   email: "spongebob@sponge.world",
//   age: "34",
//   species: "seasponge"
// }

// To delete a cookie, set its expiration time to zero
document.cookie = `email=; expires=${new Date(0).toUTCString()}`;
