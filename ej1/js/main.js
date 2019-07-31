'use strict';

let numbers = [];

function get100Numbers () {
    for (let i = 0; i< 100; i++) {
        console.log (i+1);
        numbers.push(i + 1);
    }
    console.log (numbers);
}
get100Numbers ();