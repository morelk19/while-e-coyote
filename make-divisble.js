const prompt = require('prompt-sync')({sigint: true});

let x = prompt(`Enter x: `);
let y = prompt(`Enter y: `);

while(x % y !== 0){
    console.log(`${x}`);
    x++;
}

console.log(`${x} is divisible by ${y}`);

