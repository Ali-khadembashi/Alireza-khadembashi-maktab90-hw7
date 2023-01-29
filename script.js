'use strict'
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const myobj = new Object;
arr.forEach(element => {
    myobj[element.toLocaleLowerCase().split('').sort().join('')] = element

});
const myNewarr = [];
for (const key in myobj) {
    if (Object.hasOwnProperty.call(myobj, key)) {
        const element = myobj[key];
        myNewarr.push(element)
    }
}
console.log(myNewarr);


