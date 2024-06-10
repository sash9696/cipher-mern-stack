// console.log('hello world')

//functions are basically function plus obj combo
//before even first line gets executed js assigns memory to variables and function
//in case of variables it stores undefined
//u can use debugger statments or dev tools to pasue execution of your code

//funcftions are first class citizens

// var a = 'john';

//function declaration
// function sum(a,b){

//     return a + b;
// }

// sum.message = 'hello';

// console.log(sum(10,20));

// console.log(sum.message);

// console.log(sum)

// let user = {};

// user.name = 'John';
// user.message = 'Hello world';

// console.log(user.message)

//function expression

// var sum  = function(a,b){
//     return a + b
// }

// console.log(sum(10,20));

//arrow function
// var sum = (a,b) =>  a + b;
// console.log(sum(10,20));

//callback fucntion
//function that ca be passed inside another function

// function proceedToCheckout(){
//     console.log(`proceed to  processed`);

// }

// function order(callback){

//     console.log(`Ordered processed`);
//     callback();

// }

// order(proceedToCheckout);

//if else

// let accessAllowed;

// let age = 20;

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// console.log(accessAllowed)
// ternary operators

// let accessAllowed = (age > 18) ? true : false;

// console.log(accessAllowed)

//lookup


//userRole => permisions read write 


// let userRole = 'viewer';
// let permissions;

// if(userRole === 'admin'){
//     permissions = 'admin access'
// }else if(userRole === 'viewer'){
//     permissions = 'view access only'

// }else if(userRole === 'editor'){
//     permissions = 'edit access only'
// }else{
//     permissions = 'No permission allowed'
// }

// let rolePermissions = {
//     admin: 'admin access',
//     viewer: 'view access only',
//     editor: 'edit access only'
// }

//  permissions = rolePermissions[userRole] || 'No permission allowed';

// console.log(permissions)


// const age = 18;

// let accessAllowed;

// const ageLookupTable = {

// true: true,

// false: false

// };

 

// accessAllowed = ageLookupTable[age > 18];

// console.log(accessAllowed);

//short circuit
//&&

//logic operators
//! , &&, ||


// let hour = 21;

// let isWeekend = true;


// if(hour < 20 || isWeekend){
//     console.log('Currently the office is closed')
// }

// if(hour < 20 && isWeekend){
//     console.log('Currently the office is closed')
// }


// let isAdmin = false;

// console.log(!isAdmin)


// console.log(!0)


//double not !!

// console.log(!!"hello world")

// console.log(!!null)
// console.log(!!0)

// console.log(!!100)


//destructuring

// let usernames = ['John', 'Cena'];

//    let [firstname, lastName]   =   usernames;

// console.log(`first name is ${firstname} and last name is ${lastName}` )


// let numbers  = [10,20,30,40,50];

 
// let [a,b,c,d,e] = numbers;

// console.log(d,e)

// let firstName = 'john'
// let lastName = 'cena'

// console.log('The firstname is :', firstName, 'the lastname is: ', lastName)

// console.log(`The firstname is : ${firstName} the lastname is: ${lastName}`)


// console.log(`${10 +  20}`)



// let usernames = ['John', 'Cena'];

// // let firstName = usernames[0];
// // let lastName = usernames[1];

//    let [firstName, lastName]   =   usernames;

// console.log(firstName, lastName)


//object destructiong

// let user ={
//     name:'john',
//     age:20,
//     profession:'software developer',
//     address: {
//         city:'Delhi',
//         pincode:'110023'
//     }
// };


// let {age : userage, profession,name : username, address:{city, pincode} } = user;


// // console.log(username,userage, profession)

// console.log(city, pincode);





// function showMenu(title="untitled", width=100, height='100', items=[]){

//     console.log(`title:${title} , width:${width} , height:${height} , items ${items}`)

// }

// //optional arguments
// //real life problem that u need to remeber the order of the arguments
// showMenu('title',undefined, undefined, ['item1', 'item2']);

//solve it using destructing

function showMenu(
    {
    title="untitled", width=100, height='100', items=[]
} = {}

){

    console.log(`title:${title} , width:${width} , height:${height} , items ${items}`)

}

//optional arguments
//real life problem that u need to remeber the order of the arguments


let menuOptions = {
    title: 'menu',
    items: ['item1', 'item2', 'item3']
}

// showMenu(menuOptions)

// showMenu({});

showMenu();