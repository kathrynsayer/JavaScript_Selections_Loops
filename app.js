console.log("Hello World!\n==========\n");

// Exercise 1 Section

for (let num = 1; num <= 100; num++) {
    if (num % 2 == 1) {
        console.log(num)
    } else if (num % 2 == 0) {
        continue
    }}

// Exercise 2 Section

for (let x = 1; x <= 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("FIZZBUZZ", x);
    } else if (x % 3 == 0) {
        console.log("FIZZ", x);
    } else if (x % 5 == 0) {
        console.log("BUZZ", x);
    }}

// Exercise 3 Section

let k = 1
while (k <= 100) {
    k++;

    }

    let t = 1;
do {
    t++;

} while (t <= 100)

// //while

console.log ("FIZZBUZZ: while");

let f = 1;
while (f <= 100) {
    if (f % 3 == 0 && f % 5 == 0) {
        console.log("FIZZBUZZ", f);
    } else if (f % 3 == 0) {
        console.log("FIZZ", f);
    } else if (f % 5 == 0) {
        console.log("BUZZ", f);
    }
    f++;
}

//do while 
console.log("FIZZBUZZ: do/while");

let doWhileF = 1;

do {
    if (doWhileF % 3 == 0 && doWhileF % 5 == 0) {
        console.log("FIZZBUZZ", doWhileF);
    } else if (doWhileF % 3 == 0) {
        console.log("FIZZ", doWhileF);
    } else if (doWhileF % 5 == 0) {
        console.log("BUZZ", doWhileF);
    }
    doWhileF++;
} while (doWhileF <= 100);

// Exercise 4 
console.log("FIND VALUE: FOR");

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let w = 0; w <= n; w++) {
    if (w == value) {
        console.log("Found Value");
        break;
    } else if (w == n) {
        console.log("Didn't find value");
    }
}

// Exercise 5 
console.log("VARIABLE FIZZ BUZZ: FOR");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let np = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let r = start; r <= np; r++) {
    if (r % fizzDivisor == 0 && r % buzzDivisor == 0) {
        console.log(r, "FIZZBUZZ");
    } else if (r % fizzDivisor == 0) {
        console.log(r, "FIZZ");
    } else if (r % buzzDivisor == 0) {
        console.log(r, "BUZZ");
    }
}
console.log(fizzDivisor, buzzDivisor)
