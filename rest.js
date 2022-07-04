// function sum(...args) {
//   let total = 0;
//   for (const ag of args) {
//     total += ag;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4));
// //Syntax
// function name(a,b,...args){

// }
function sum(x, y, z) {
  return x + y + z;
}
const number = [1, 3, 4, 6, 8, 3];
console.log(sum(...number));
