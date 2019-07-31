'use strict';

let numbers = [];

function get100Numbers () {
    for (let i = 0; i< 100; i++) {
        numbers.push(i + 1);
    }
 return numbers
}

function getReversed100Numbers (){
    get100Numbers();
    const reverseNumbers = numbers.reverse()
    for (let num of reverseNumbers){
        console.log(num);
    }
}

getReversed100Numbers ();