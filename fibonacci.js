const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt(`Enter a value for "n": `));
let count = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;



while(count !== n){

    if(count === 0 ){
        sum3 = sum1 + sum2;
        sum2 = 1;
        sum1 = sum3;
    }else{
        console.log(sum3);
        sum3 = sum1 + sum2;
        sum2 = sum1;
        sum1 = sum3;
    }
    count++;
}
console.log(sum3);


