// variable

let name = "mirza";
let age = 20; // value can be changed
age = 40;
console.log("name:",name, 'and', "age:",age);


const account = 1234; // value can't be change


// undefine data type
let user;
console.log(user);

// big int data type

let a = 1234567891594375678913548n; // for print excual big value we have to give 'n' at the last of the number.
console.log(a);

// null 

let x = null; // here x datatype is "object" not "null" which is a lagacy bug in javascript
console.log(x);
console.log(typeof x);

//symbol(create a unique value)

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1==id2);

// non primitive data type
// array object function


// array
let arr = [10, 20, "mirza", true];  
console.log(arr)


//object
let obj = {
    name: "mirza",
    account: 12345,
    age: 23,
    category: 'gen'
}

console.log(obj);

let obj2 = obj;
obj2.name = "mohammad";
console.log(obj2);

console.log(obj);


// function

function add(){
    console.log(2+7+1);
}
add();

// we can also store a function in a variable
let s = function add(){
    console.log(2+7+1);
}
console.log(s);
s();

