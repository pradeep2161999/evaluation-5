// //variables are casesensitive
// let a = 10;
// let A = "HelloWorld";
// console.log(a); //10
// console.log(A); //HelloWorld
// //console.log(apple); // reference error: apple is not defined
// console.log("apple"); //give a string in console it will be printed
//function name hoisting
// anonymous function
// fun();
// function fun() {
//   console.log("apple");
// }
// function fun() {
//   console.log("a");
// }
// // var fun = function () {
// //   console.log("apple");
// // };
// fun();
//function
// function fun() {
//   console.log("app");
// }
// function fun() {
//   console.log("aa");
// }
// fun();
// const a = [1, 3, 4, 5, 67, 7, 67];
// a[4] = 1;
// console.log(a);
// //a = []; //type error
// let a;
// console.log(a);
// const a = {
//   property: 1,
// };
// console.log(a);

// console.log((a.property = 2));
// console.log(a);
let arr1 = ["hari", "praveen", "prasad"];
let arr2 = ["prasana", ...arr1, "kishore"];
console.log(arr2);
