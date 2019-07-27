var a = -10;
console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
while(a <= 19 && a >= -10){
    console.log(a);
    a++;
}

console.log("PRINTING ALL EVEN BETWEEN 10 AND 40");
var a = 10;


while(a >=10 && a <= 40){
    let even;
    even = a % 2;
    if(even === 0){
        console.log(a);
    }
    a++;
}
 console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
 var a = 300;
 while(a>=300 && a <= 333){
     let odd = (a - 1) % 2;
     if(odd === 0){
         console.log(a);
     }
     a++;
 }

console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

var a = 5;

while(a >= 5 && a <= 50){
    let divideBy15 = a % 15;
    if(divideBy15 === 0){
        console.log(a);
    }
    a++;
}
