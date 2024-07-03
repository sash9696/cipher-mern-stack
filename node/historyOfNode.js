//History node js

//a js runtime environment that lets u run js code outside of the web browser
//ryan dahl in 2009 
//it became popular quickly, event loop system and also allows to use js on the server side 
//in combinations with databases , front end frameworkds, cloud platform, and u can create full stack apps
//v8 engine created by google


//Non blocking I/O

//based on its event driven architecture
//I/O operations are handled asyn and do not block the execution of main program
//ca execute multiple I/O operations simultaneouly

//Event loop => callstack , microtask and callback queue
//Callbacks
//Non blocking apis like file system fs modules
//single threaded 

//blocking code

// const getUserSync = (userId) =>{
//     const users={
//         1: {name:'John', age:30},
//         2: {name:'Peter', age:20},
//     }
//     return users[userId];
// };

// const user = getUserSync(1);
// console.log(user);
// console.log('hello world');



// const getUserAsync = (userId, callback, delay=1000) =>{
//     const users={
//         1: {name:'John', age:30},
//         2: {name:'Peter', age:20},
//     }
//      setTimeout(() => {
//         callback(users[userId]);
//      }, delay)
// };
// getUserAsync(2, (user) => {
//     console.log(user);
// },0);
// getUserAsync(1, (user) => {
//     console.log(user);
// });
// console.log('hello world');


//browser vs node js

// console.log(window); in browser

// console.log(global);


//modules

//in browser => <script type='module' src > </script>

//import {getUser} from './module.js;
//getUser();

//require 

//DOM
//in node js there is no dom that means we cannot access or manipulate html elements
//node js is used for server side apps
//browse is used for websites

//console works in both environments

//node js open source

//





