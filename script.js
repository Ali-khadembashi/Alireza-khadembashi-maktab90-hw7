'use strict'
let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250,
}

// const arrayed = Object.entries(salaries).sort((a, b) => b[1] - a[1])[0][0];
const sortAscending = (objInput) => {
    const arrayed = Object.entries(objInput).sort((a, b) => b[1] - a[1]);
    const [[highetsName, highestValue], ...rest] = arrayed
    console.log(highetsName);
};
sortAscending(salaries);