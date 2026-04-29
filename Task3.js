// Level 1 – Functions Basics

// Task 1: Student Form Function
function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}
studentForm("Naveen", 22, "MERN");




// Task 2: Calculator Function
function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}
calc(10, 5);




// Task 3: Reusable Greeting
function greet(name) {
    console.log("Hello", name);
}
greet("Kamal");
greet("Praveen");
greet("Sai");





// Level 2 – Return & Scope

// Task 4: Return Value
function square(num) {
    return num * num;
}
console.log(square(5));




// Task 5: Scope Check
function testScope() {
    let secret = "javascript";
}
testScope();

console.log(secret);  






//  Level 3 – Spread / Rest

// Task 6: Merge Arrays
let boys = ["car","bike"];
let girls = ["doll","teddy"];

let combined = [...boys, ...girls];
console.log(combined);



// Task 7: Unlimited Numbers
function sumAll(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    console.log(sum);
}
sumAll(10,20,30,40);





//  Level 4 – Destructuring

// Task 8: Array Destructuring
let colors = ["red","green","blue"];
let [c1, c2, c3] = colors;

console.log(c1, c2, c3);



// Task 9: Object Destructuring
let emp = {
    name:"Naveen",
    role:"Developer",
    salary:"5LPA"
};

let {name, role} = emp;
console.log(name, role);





//  Level 5 – Real-Time Logic

// Task 10: Offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
}

let offer = offerGenerator();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);




//  Level 6 – Advanced

// Task 11: Curry Function
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(add(10)(20)(30));




// Task 12: Student Marks Analyzer
function marks(...nums) {
    let total = nums.reduce((acc, val) => acc + val, 0);
    let avg = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", avg);
}
marks(80,90,70,60);




//  Challenge Task – Employee Registration

function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen","Frontend","HTML","CSS","JS","React");

