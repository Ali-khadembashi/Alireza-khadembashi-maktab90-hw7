'use strict'
let map = new Map();
map.set("name", "John");
map.set("age", 17);
map.set("city", "California");
map.set("maritalStatus", "n/a");
let keys = map.keys();
// Error: keys.push is not a function
// keys.push("more");
// console.log(map.keys());

// for (const iterator of map.keys()) {
//     console.log(iterator);
// }
// const test = Array.from(map.keys());
// console.log(test);

// // console.log(map.entries());
// for (const iterator of map.entries()) {
//     console.log(iterator);
// }

// console.log(Array.from(map.entries()));
console.log([...keys]);