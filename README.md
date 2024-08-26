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