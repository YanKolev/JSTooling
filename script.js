//scenario 1 - importing a module without importing a value
//Importing module
/*


import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";  //hoisted to the top  import statements are on top of the file- all modules are executed in strict mode by default


addToCart('bread', 5); // we can call it as if its defined in the same scope
//exports need to happen in TOP level code, they can not be in the middle or end of a block

console.log(price, tq);

//we can also rename them -> happens in the import brackets ex-> totalPrice as price, 



*/

console.log('Importing module');

/*
// we can also import all the export of a module at the same time 
// below it will create an object containing everything that is exported, and needs to start with capital letter(naming sorta like a class)
import * as ShoppingCart from "./shoppingCart.js"
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
//module exports something like a API 
*/

//default exports- when we only want to export 1 thing per module
//when we import the default value, we can give it any name that we want
//import add-> imports the default export NO matter how its called.

import add from "./shoppingCart.js"
add('pizza', 2);


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

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    console.log(data)
    
    return {title: data.at(-1).title, text:data.at(-1).body}
}   
const lastPost = getLastPost();
console.log(lastPost);
//calling an async function will always return a promise and not data that we have requested

//not very clean
//lastPost.then(last => console.log(last))

const lastPost2 = await getLastPost(); // using top level await to get quite useful
console.log(lastPost2);

//top level await- if one module imports a module which has a top level await, then the imporing module, 
// will wait for the imported to finish the blocking code. 

