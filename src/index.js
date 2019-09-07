const ShoppingCart = require('./ShoppingCart');
const { groupAdultsByAgeRange } = require('./transform');

// const cart =  new ShoppingCart();
// cart.addItem('nazwa', 20, 1.5);
// console.log(cart.getItems());

// const cart2 = new ShoppingCart();
// cart2.addItem('inna nazwa', 100, 2);
// console.log(cart2.getItems());
// cart2.addItem('inna nazwa2', 10, 2);
// console.log(cart2.total());

console.log(groupAdultsByAgeRange([{ name: "pete", age: 10 },
{ name: "dove", age: 17 },
{ name: "dave", age: 18 },
{ name: "hall", age: 19 },
{ name: "donn", age: 20 },
{ name: "trey", age: 21 },
{ name: "hann", age: 29 },
{ name: "chew", age: 30 },
{ name: "cloe", age: 31 },
{ name: "dart", age: 39 },
{ name: "this", age: 40 },
{ name: "dame", age: 41 },
{ name: "henk", age: 49 },
{ name: "anna", age: 50 },
{ name: "olga", age: 51 },
{ name: "bert", age: 52 },
{ name: "oldd", age: 120 },]));
//console.log(groupAdultsByAgeRange([1,2,3,4]));