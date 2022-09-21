const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt(`Enter a number (Type 0 to sum). `));
let sum = 0;


while(num !== 0){
    sum += num;
    num = Number(prompt(`> `));
}

console.log(sum);
