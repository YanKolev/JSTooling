//Exporting module
// this code is executed before any code in the impot module.
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];
//inside a module the module itself its top level scope// IS only used in here cant see them in script.js
//if u want to see- you need exports 

// addind export converts the method to ''export which we can use in another module''

export const addToCart = function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} addded to cart`)
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq};
// you can also rename them here in the export brackets, ex totalQuantity as tq

//default export->when we only want to export 1 thing per module => there is no name here, just the value of the whole function 

export default function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} addded to cart`)
}