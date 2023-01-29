'use strict'
const sorForMe = (...array) => {
    // // console.log(...array);

    // let output = array;
    // console.log(...output);
    // const roots = output.map((element) => ...element)
    // console.log(roots);
    let output = [];
    // console.log(...array[0]);
    array.forEach(element => {
        output.push(...element);

    });
    output.sort((a, b) => b - a)
    console.log(output.join(','));

};
sorForMe([1], [23, 5, 6], [7, 5, 8, 9, 6, 3, 2])
