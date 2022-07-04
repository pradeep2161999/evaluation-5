// const myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;
// console.log(myCar.ma);
// const propertyname = "make";
// mycar[propertyname] = "Ford";
// propertyname = "model";
// mycar[propertyname] = "1990";
// console.log(mycar);
// const propertyName = "make";
// myCar[propertyName] = "Ford";

// // access different properties by changing the contents of the variable
// propertyName = "model";
// myCar[propertyName] = "Mustang";

// console.log(myCar);
// function car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const myCar = new car("re", "thunderbird", 1990);

// console.log(myCar);
// const myObj = {
//   a: 7,
//   get b() {
//     return this.a + 1;
//   },
//   set c(x) {
//     this.a = x / 2;
//   },
// };

// console.log(myObj.a); // 7
// console.log(myObj.b); // 8 <-- At this point the get b() method is initiated.
// myObj.c = 50; //   <-- At this point the set c(x) method is initiated
// console.log(myObj.a); // 25
// const car = {
//   a: "ford",
//   get b() {
//     return this.a + " " + "fiesta";
//   },
//   set c(x) {
//     this.a = "ford" + " " + x;
//   },
// };
// console.log(car.a);
// console.log(car.b);
// car.c = "mustang";
// console.log(car.a);
// const myobj = new Object();
// (myobj.a = 10), (myobj.b = 20);
// //console.log(myobj);
// delete myobj.a;
// console.log(myobj);
// Two variables, two distinct objects with the same properties
// Two variables, two distinct objects with the same properties
// const fruit = { name: "apple" };

// const fruitbear = { name: "apple" };

// console.log(fruit != fruitbear); //  true
// console.log(fruit === fruitbear)let fruit = { name: "apple" };
let fruitbear = { name: "apple" };
let fruit = fruitbear;
console.log(fruit != fruitbear); //  true
console.log(fruit === fruitbear); // return false