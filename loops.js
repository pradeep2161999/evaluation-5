// let a = [1, 2, 4, 5, 7, 90, 3];
// let A = 0;
// // for (let i = 0; i < 7; i++) {
// //   A += a[i];
// // }
// //   console.log(A);
// const R = (accumulator, value) => accumulator + value;
// const result = a.reduce(R);
// console.log(result);

// for (let i =0; i<3; i++){
// let a = "loop";
// console.log(a)
// }
// for (let i = 0; i < 10; i++) {
//   if (i == 2) continue;
//   console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//   if (i == 2) break;
//   console.log(i);
// }
// let c = 0;
// mark: for (let i = 0; i < 5; i++)
//   inner: for (let j = 0; j < 5; j++) {
//     c++;
//     if (i == 2) break inner;
//   }
// console.log(c);
// block: {
//   console.log("befor");
//   break block;
//   console.log("after");
// }
//let string = "pradeep";
// let string = [1, 2, 4, 56, 2];
// for (let value of string) {
//   console.log(value);
// }
// let object = {
//   name: "pradeep",
//   age: 23,
// };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
let c = 0;
while (c++ < 5) {
  if (c == 2) continue;
  console.log(c);
}
