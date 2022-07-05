// let password = "felix";
// let p = new Promise((resolve, reject) => {
//   if (password != "mathilda") return reject("Invalid Password");
//   resolve();
// });
// let promise = promise.resolve("resolve value");
// promise.then(function (message) {
//   console.log("then:" + message);
// });

function f1() {
  console.log("Hi by f1!");
}

function f2() {
  f1();
  console.log("Hi by f2!");
}

f2();
