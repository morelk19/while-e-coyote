const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt(`Enter a number: `));


while(num <= 100){
    console.log(num);
    num = (2 * num);
}

console.log(num);
console.log(`\` \` \``);

