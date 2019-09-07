const ShoppingCart = require('./ShoppingCart');

const cart =  new ShoppingCart();
cart.addItem('nazwa', 20, 1.5);
console.log(cart.getItems());

const cart2 = new ShoppingCart();
cart2.addItem('inna nazwa', 100, 2);
console.log(cart2.getItems());
cart2.addItem('inna nazwa2', 10, 2);
console.log(cart2.total());