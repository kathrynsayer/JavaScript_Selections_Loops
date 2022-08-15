console.log("Hello World!\n==========\n");

// Exercise 1 Section

for (let num = 1; num <= 100; num++) {
    if (num % 2 == 1) {
        console.log(num)
    } else if (num % 2 == 0) {
        continue
    }}

// Exercise 2 Section

let x = 1
for (x = 1; x <= 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("FIZZBUZZ", x);
    } else if (x % 3 == 0) {
        console.log("FIZZ", x);
    } else if (x % 5 == 0) {
        console.log("BUZZ", x);
    }}

// Exercise 3 Section

let k = 1
while (k <=100){
    if (k % 2 == 1) {
    console.log(k);}
    k++;

    }

