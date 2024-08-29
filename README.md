 # JSTooling

// Notes // 
Modules:
Module is reusable piece of code that encapsulates implementation details.
Usually a standalone file, but it doesn't have to be. 
-Compose software: small building blocks that we put together to build complex aplications
-Isolate components: Modules can be developed in isolation without thinking about the entire codebase;
-Abstact code: Implement low-level code in modules and import these abstraction into modules
-Organized code: Modules naturally lead to a more organized codebase
-Reuse code: Modules allow us to easily reuse the same code, even multiple projects.

JS specific Modules
-ES6 modules- modules stored in files, exactly one module per file. 
-Top-level variables are scoped to module. In scripts- all top-level variables are Global
-ES6 modules are always executed in strict mode/ Scripts- in slopy mode. 
-Top-level this keyword- in ES6 is undefined, in scripts its on a window level.
- ES6 modules support import and export of modules, while scripts do not.
Imports are hoises/ they will be moved to the top of the file. 
-HTML linking: 
ES6: <script type= "module">
Script: <script>
-File downloading:
ES6:Asynchronous
Script:Synchronous

How modules are imported:
-1st step is to parse the code, means to just read the code without executing, this is when the imports are hoised. Modules are imported synchronously. Top level imports- which mas imports known before the execution. This makes bundling and dead code elemination possible. 
-After the parsing process the modules are downloaded from the server, that is asynchronous way. Only the parsing is synchronous. After that linking starts. Exported values are not coppied to imports, instead the import is just a refrence to the exported value( like a pointer). 
When the value changes in the exporting module, then same value also changes in the importing module. Its UNIQUE TO ES6. After that the code of 
the imported modules is executed and the process is fineshed. 

//Modern and clean code
Important- Readable code: others can udners, you can can understand it n 1 year, avoid too clever and overcomplicated solutions, variable naming- what they contain, functions naming- what they do. 

General principles- DRY, do not polute global namespace, encapsulate instead, dont use var, use strong type checks(=== and !==)

Main rules for functions: functions should do only 1 thing, do not use more than 3 parameters in a function, use default parameters whenever posible, return same data type as you received, use arrow functions when they can make the code more readable.


OOP: 
Use ES6 classes, encapsulate data and dont mutate it from outside the class
implement method chaining, do not use arrow functions as methods in regular objects. 

Avoid nested code: 
use early return(guard clauses), use ternary or logical operators instead of if, use multiple if insread of if/else-if, avoid for loops, use array methods instead, avoid callback-based asynchronous APIs

Asynchronous code:
Consume promises with async/await for best readability, whenever possible, run promises in parallel(Promise.all), handle errors and promise rejections.

Imperative vs Declarative code

Imperative: 
-Programmer explains 'how to do things'
-We explain the computer, every single step it has to follow to achieve a result.

//telling the computer the exact way we want to double the array
const arr = [2,4,6,8];
const doubled = [];
for (let i = 0; i <arr.length; i++)
    doubled[i] = arr [i]*2;



Declarative:
-Programmer tells 'what to do'
-We simply describe the way computer should achieve the result
-The HOW(step by step instructions) gets abstracted away 

//advising the computer to double the aray in a new array
const arr = [2,4,6,8];
const doubled = arr.map(n => n*2);

Functional programming: 
Declarative programming paradigm
Based on the idea of writing software by combining many pure functions, aoiding side effects and mutating the data.

Side-effect- modification(mutation) of any data OUTSIDE of the function(mutating external variables, logging to console, writing to DOM)

Pure function- function without side efects. Does not depend on external variables, Given the sam inpts, always return the same outputs.

Immutabilit- State(data) is NEVER modified! Instead state is copied and the copy is mutated and returned. 

Functional programming techniques: 
-try to avoid data mutations,
-use built in methds that dont produce side effects
-do data transformation with the methods such as .map, .filter, .reduce
-try to avoid side effects in functions- not always possible.

Declarative syntax:
-use array and object destructuring
-use spread operator(...)
-use the ternary (conditional) operator
-use template literals