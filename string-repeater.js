const prompt = require('prompt-sync')({sigint: true});

let string = prompt(`Enter a string: `);

let string2 = string


while(string2.length <= 10){
    console.log(string2);
    string2 += string;
}

console.log(string2);
console.log(`\` \` \``);

