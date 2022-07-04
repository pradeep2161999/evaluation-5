# SCOPE

- There are 3 unique scope types They are,
  - Global Scope
  - Block Scope
  - Function Scope
- Event callback function follows the function scope,
- Loops can also have their block scope.
  Variable can be defined using var,let or const keywords

## variables are casesensitive

- variables are case sensitive if we declare variable a and also capital A it cannot be accessed.
- if we print the string inside the console it willbe given in the double quotes if we call the value and print it we give a name only.

```Javascript
 let a = 10;
 let A = "HelloWorld";
 console.log(a); //10
 console.log(A); //HelloWorld
 console.log(apple); // reference error: apple is not defined
 console.log("apple"); //give a string in console it willbe printed


```

```Javascript

console.log(apple);
{
  let apple = 1;
  const apple = 1;//give reference error is not defined
}
console.log(apple);
{
  var apple = 1; //undefined;
}
```

```Javascript
//function name hoisting
//anonymous function
fun();
function fun() {
  console.log("apple");
}
function fun() {
  console.log("a");
}
var fun = function () {
  console.log("apple");
};
fun();
function
function fun() {
  console.log("app");
}
function fun() {
  console.log("aa");
}
fun();
```

## Variable Types

### Var

    The var keyword is still with us from original specification.you should probably using let and const instead the most part it is available but only to support legacy code.

### let

    let defined the variables but its defined in the scope only.

### const

    const is same as let but it cannot be reassign the new value once it is defined.

# Scope visibility difference

    if we declare variables are defined in global scope.let,var and const no difference between them in terms are scope visibility.The all access inner block,function level and event callback scope.
    keyword let and const variable to scope in which they are defined.

### Function scope:

    if we declare variable inside the function it will be limited to the scope.var also limited inside the scope

### const

    const keyword is little bit differ from let and var.

```Javascript
    let a;
    const b;
    console.log(a); //undefined
    console.log(b); // missing initializer in const declaration

```

### const and arrays:

    changing the value in the const array is allowed.

```Javascript
const a =[];
a[4] = 1;
console.log(a);
a = []; //type error
```

### const and object literals

```Javascript
const a = {
  property: 1,
};
console.log(a); //{property:1}

console.log((a.property = 2));
console.log(a); //2   {property:2}
```

## Rest and Spread properties:

### Rest

- The rest parameter allows a function to accept an indefinite number of argument as an array.the rest parameter have a large number of items extracting them from single function parameter name .
- The single rest parameter contaion one or more argument passed to the function.

#### Syntax

```Javascript
//Syntax
function name(a,b,...args){

}
```

- A function can have only one rest parameter

```Javascript
foo(arg1, arg2, ...correct)
```

### Spread

- Spread syntax allows an iterable such an array expresssion or string to be expanded in places where zero or more arguments or elements.
- Rest and spread similar syntax but it is opposite to rest

#### Syntax:

```Javascript
myFunction(...iterableObj); // pass all elements of iterableObj as arguments to function myFunction
```

```Javascript
let arr1 = ["hari", "praveen", "prasad"];
let arr2 = ["prasana", ...arr1, "kishore"];
console.log(arr2); //[ 'prasana', 'hari', 'praveen', 'prasad', 'kishore' ]
```

### Loops:

Loops is iterate over one or multiple statements.if array is iterable but object is not iterable.

- There are different types of iterable in js starting from classic while and for loo.
- The common iterators are for...in, for...of,while and arra.forEach
- Some array method can be iterated like .values,.keys,.every,.some,.filter and a few others
- They are called as higher order functionbecause they took another fiunction as an arguments.

#### add all value using for loop:

```Javascript
let a = [1, 2, 4, 5, 7, 90, 3];
let A = 0;
for (let i = 0; i < 7; i++) {
  A += a[i];
}
  console.log(A); //112
```

### Reduce [accumulator]

- Accumulator is the value returned from the previous iteration.
- The reducer method returns the single value
- It does not change the original array.
- reduce method is simply used to sum the values to give the single value.

```Javascript
let a = [1, 2, 4, 5, 7, 90, 3];
let A = 0;
const R = (accumulator, value) => accumulator + value;
const result = a.reduce(R);
console.log(result); //112
```

### For Loop:

For loop syntax comes in three types.They are,

```Javascript
//for loop with an empty body
for(initialize; condition; increement);
//for loop with a single statement
for(initialize; condition; increement){
  //single statement
}
//for loop with multiple statement
for(initialize; condition; increement){
  //multiple;
  //statements;
}
```

### 0 index based counter

If the value we initialize inthe for loop is zero like array have a zero index based and first item is stored in arr[0] not arr[1].

### The infinite for loop:

A for loop can be defined without any default statement.you create a infinite loop that will freeze your program

### Syntax:

```Javascript
for(;;)
```

You dont really want to do this unless for reason it become neccessary.

### Nested for loop:

it gives the 2 dimensional grid.It can be iterate the statement of another for loop

```Javascript
for (let x = 0; x < 2; x++) for (let y = 0; y < 2; y++) console.log(x, y);
//0 0
//0 1
//1 0
//1 1
```

### Loops length

```Javascript
for (let i =0; i<3; i++){
let a = "loop";
console.log(a)
}
//loop
//loop
//loop
```

### Skipping steps:

- The continue keyword is used to skip the iteration step.
- it is used to skip the current iterate step bt it iterate

```Javascript
  for (let i = 0; i < 10; i++) {
    if (i == 2) continue;
    console.log(i);
  }
// 0
// 1
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

### Break

You can break from the iteration we use break keyword
the break keyword is used to break from the condition it is not iterate

```Javascript
for (let i = 0; i < 10; i++) {
  if (i == 2) break;
  console.log(i);
}
//0
//1
```

### Break the label

```Javascript
let c = 0;
mark: for (let i = 0; i < 5; i++)
  inner: for (let j = 0; j < 5; j++) {
    c++;
    if (i == 2) break inner;
  }
console.log(c);
//21
```

### Breaking from a labeled block scope

The execution flow never reaches "after"

```Javascript
block: {
  console.log("befor");
  break block;        // befor
  console.log("after");
}
```

### For of loop

#### For of and string:

You can waljk through the each character on the string

```Javascript
let string = "pradeep";

for (let value of string) {
  console.log(value);
}
// p
// r
// a
// d
// e
// e
// p
```

#### for of and array

```Javascript
let string = [1, 2, 4, 56, 2];
for (let value of string) {
  console.log(value);
}
// 1
// 2
// 4
// 56
// 2
```

#### for of and object

```Javascript
let object = {
  name: "pradeep",
  age: 23,
};
for (let value of object) console.log(value);  //Object is not iterable
```

#### for in loop

the for in loop iterates enumerables properties of an object that are keyed by string

### Syntax

```Javascript
for (const variable in object) {
  statement
}
```

```Javascript
let object = {
  name: "pradeep",
  age: 23,
};

for (const property in object) {                   //name: pradeep
  console.log(`${property}: ${object[property]}`); //age: 23
}
```

### While condition:

While loops will iterate for an indefinite number of times until the evaluate condition returns false

#### Syntax

```Javascript
while(condition){
  //do something until condition is false
}
```

```Javascript
let c = 0;
while (c++ < 5) {
  console.log(c);
}
//1
// 2
// 3
// 4
// 5
```

```Javascript
let c = 0;
while (c++ < 5) {
  if (c == 2) break;
  console.log(c);   //1
}
```

```Javascript
let c = 0;
while (c++ < 5) {
  if (c == 2) continue;
  console.log(c);
}
//1
// 3
// 4
// 5
```

### Array handling:

An array is an ordered list values.each value can be specified by an index.an array can hold the mixed character value.

#### Array sort()

The sorted method is used to the default order of ascending the values
if we use sort method we get the ascending value like 1,1,1,2,2,2,3,3,3...

```Javascript
let a = [1, 34, 57, 4, 32, 45, 67, 6];  //[1, 32, 34,  4,45, 57,  6, 67]
console.log(a.sort());
```

If we use sort method with (a,b)=>a-b and get the ascending values like 1,2,3,4...

```Javascript
let arr = [1, 34, 57, 4, 32, 45, 67, 6];
arr.sort((a, b) => a - b);     //[1,  4,  6, 32,34, 45, 57, 67]
console.log(arr);
```

### Array.forEach():

It executes a provided funtion once for each array element.the return value is undefined.

```Javascript
let arr = [1, 2, 3, 5, 78];
arr.forEach((element) => console.log(element));
// 1
// 2
// 3
// 5
// 78
```

### Array.every()

Return value is boolean

```JAvascript
const val = (currentValue) => currentValue < 10;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(val));//false
```

### Array.some()

The some() method checks if any array elements pass a test

```Javascript
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even)); //true
```

### Array.filter()

new array consisting only of modified values passed in the condition.if no element pass the test empty array will be defined

```Javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);   //["exuberant", "destruction", "present"]
```

### Array.map()

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```Javascript
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);    //[2, 8, 18, 32]
```

### Array.reduce()

```Javascript
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial); //10
```

### Object handling

An object is a collection of properties and a property is an association of name and value

### create an object:

```Javascript
const myCar = new Object();  //  create an object
myCar.make = "Ford";        //{ make: 'Ford', model: 'Mustang', year: 1969 }
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar);
```

### access the object properties

```Javascript
const myCar = new Object();
myCar.make = "Ford";      //Ford
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar.make);
```

### not access the property

```Javascript
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
console.log(myCar.ma);   //undefined
```

### Using constructor function:

create a instance of an object with a new keyword is used.

### Notice:

- The use of this to assign the value of the object properties based on the value passed to the function

```Javascript
function car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new car("re", "thunderbird", 1990);
console.log(myCar);    /car { make: 're', model: 'thunderbird', year: 1990 }
```

### Getters and setters:

- A getter is a method to get a value from the specific property.
- A setter is a method to set the value of the specific property.

```Javascript
const car = {
  a: "ford",
  get b() {
    return this.a + " " + "fiesta";
  },
  set c(x) {
    this.a = "ford" + " " + x;
  },
};
console.log(car.a);   //ford
console.log(car.b);   //ford fiesta
car.c = "mustang";
console.log(car.a);   //ford mustang
```

### Delete Object properties

YOu can remove a object property we use "delete" operator

```Javascript
const myobj = new Object();
(myobj.a = 10), (myobj.b = 20);
console.log(myobj);      //{ a: 10, b: 20 }
delete myobj.a;
console.log(myobj);      //{ b: 20 }
```

### Comparing two object

two distinct object are never equal even if they have same properties

```Javascript
const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

console.log(fruit != fruitbear); //  true
console.log(fruit === fruitbear); // false
```

Two variables and single object refer the another object

```Javascript
let fruitbear = { name: "apple" };
let fruit = fruitbear;
console.log(fruit != fruitbear); //  false
console.log(fruit === fruitbear); // true
```

### Classes

Classes are a template for creating objects.

- classes are in fact the special functions you can define function expressions and function declaration,the class have two components class expressions,class declaration.
- The body of the class is the part in the cutrly braces,This is where you define class members such as methods and constructors

### Constructor

- The constructor is a special method for creating or initializing the object with class
- A constructor can use the super keyword to call the constructor of the super class
### Static method and properties:


#### Class Declaration

You declare the variable we use the class keyword.

```Javascript
class rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}

const square = new rectangle(100, 10);

console.log(square.area);        //1000
```

###

### Arrow function:

An arrow function is an alternative of an function expression but it is limited it cant be used in all situation.arrow function is the shortest form of the function expression.Arrow function no return keyword and no curly braces.

#### Syntax

() => {}

```Javascript
const team = ["csk", "mi", "punjab"];
console.log(team.map((team) => team.length)); //[3,2,6]
```

### Event settimeout and setinterval

- 1 second =1000 millisecond

#### Event settimeout:

the set timeout() method sets a timer executes a function or specified piece of code once the timer expires

```Javascript
let callback = function () {
  console.log("events!");    //events!
};
let timer = setTimeout(callback, 10000);
clearTimeout(timer);
timer = null;
```

#### Setinterval

It repeatdly calls a function or executes a code snippet with a fixed time delay between each call.the clear time out is used to out from the timer.

```Javascript
let callback = function () {
  console.log("events!");
};
let timer = setInterval(callback, 1000);//events! events! .....
```

### Event loop

#### Call stack

The call stack is the place to keep track of currently executing function.each call will be placed on call stack if the function is returns it will be removed from the call stack.
A function call on to the stack if we want push into the stack we use push and we want to pop we use pop method.

#### Execution context

Everything in javascript happen inside an Execution Context.

In JavaScript, execution context is an abstract concept that holds information about the environment within which the current code is being executed.the JavaScript engine creates the global execution context before it starts to execute any code.

```Javascript
console.log("Hi");
setTimeout(function cb1() {
  console.log("cb1");    //Hi
}, 5000);                //Bye
console.log("Bye");      //cb1
```
