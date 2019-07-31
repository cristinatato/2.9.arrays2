'use strict';

const lostNumbers = [4, 8, 15, 16, 42];
let evenNumbers = [];
let multNumbers = [];
let concatNumbers = [];

function bestLostNumber () {
    for (let item of lostNumbers) {
        if (item%2 ===0) {
            evenNumbers.push(item);
        } else if (item%3 ===0) {
            multNumbers.push(item);
        }
    }
    console.log(evenNumbers);
    console.log(multNumbers);
    const result = concatNumbers.concat(evenNumbers, multNumbers);
    console.log(result);
    // concatNumbers = evenNumbers.concat(multNumbers);
    // console.log(concatNumbers);
}

bestLostNumber ();