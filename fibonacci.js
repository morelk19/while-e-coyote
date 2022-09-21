const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt(`Enter a value for "n": `));
let count = 0;
let sum1 = 0;
let sum2 = 1;
let sum3 = 0;

while(count !== n){
    console.log(sum1);
    sum3 = sum1 + sum2;
    sum1 = sum2;
    sum2 = sum3;
    count++;
}



