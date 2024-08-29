//scenario 1 - importing a module without importing a value
//Importing module
/*


import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";  //hoisted to the top  import statements are on top of the file- all modules are executed in strict mode by default


addToCart('bread', 5); // we can call it as if its defined in the same scope
//exports need to happen in TOP level code, they can not be in the middle or end of a block

console.log(price, tq);

//we can also rename them -> happens in the import brackets ex-> totalPrice as price, 





//console.log('Importing module');

//import shoppingCart from "./shoppingCart.js";
/*
// we can also import all the export of a module at the same time 
// below it will create an object containing everything that is exported, and needs to start with capital letter(naming sorta like a class)
import * as ShoppingCart from "./shoppingCart.js"
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
//module exports something like a API 


//default exports- when we only want to export 1 thing per module
//when we import the default value, we can give it any name that we want
//import add-> imports the default export NO matter how its called.



//!!NB NEver mix default and named exports in the same module.
//the preffered style is to just use 1 default export per module

//imports are not a copy of exports they are like a live connection-> they point to the same place in the memory 



// TOP - LEVEL  - AWAIT  ES2022 (Modules)

//with the update we can cusethe await keyword outside of async functions
//ONLY works in modules(html needs to have module type)


//this blocks the entire execution of the module.

// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json();
// console.log(data);

/*

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    console.log(data)
    
    return {title: data.at(-1).title, text:data.at(-1).body}
}   
const lastPost = getLastPost();
console.log(lastPost);
*/

//calling an async function will always return a promise and not data that we have requested

//not very clean
//lastPost.then(last => console.log(last))

//const lastPost2 = await getLastPost(); // using top level await to get quite useful
//console.log(lastPost2);

//top level await- if one module imports a module which has a top level await, then the imporing module, 
// will wait for the imported to finish the blocking code. 



//MODULE PATTERN USED BEFORE, STILL AROUND


//main goal is to encapsulate functionality to have private date and to expose public API, 
//best way to achieve is function. 

//IIFE- immediately invoked function expression- can call it once, and we do not have to call it separatly
/*

const ShoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} addded to cart`)
    }

    const orderStock = function (product, quantity){
    
        console.log(`${quantity} ${product} ordered from supplier`)
    }

    //in this return object will be exposed to outside

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }


})()



//only purpose of the function is to create a new scope and return the data once
//all of the data is private, because its inside of the scope of the function, now we need to return it to have a public api- retun the stuff u want to make public

ShoppingCart2.addToCart('apple', 4)
ShoppingCart2.addToCart('pizza', 2)
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // it will be undefined as the data is private and only visible to the module

*/
/* 
Since the IFFE is executed only once, how can we be able to manipulate the cart after its already executed? 
Closures- they allow a function to have access to the variables that were present at its birthplace,
the add to cart function can acess the cart as its was at its birthplace
*/

// CommonJS modules

/*
NPM was only intended for Node, hence it uses commonJS




export.addToCart =function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} addded to cart`)
}
//it will not work in browser but in nodeJS,

//to import.
const {addToCart} = require = (''./shoppingCart.js')

*/

import cloneDeep from 'lodash-es/cloneDeep';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5}
    ],
    user: {loggedIn: true}
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);

console.log(stateDeepClone);

import add,  { cart } from "./shoppingCart.js"
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart)


// Hot module reloading- whatever we change one of the modules, 
//it will trigger rebuild- but the bundle will be injected in WITHOUT TRIGGERING WHOLE PAGE RELOAD

if(module.hot){
    module.hot.accept()
}

class Person {
    greeting = 'Hey'
    constructor(name){
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`)
    }
}

const jonas = new Person('Jonas');

//nullish coalescing operator- experimental for babel 
console.log('Jonas'?? null)

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test'). then(x => console.log(x))

//pollyfilling need to import another library 

import 'core-js/stable';

//regenerator -runtime- pollyfilling async functions
import 'regenerator-runtime/runtime.js';