/* // Task 1: variable update
var num = 50;
num=100;
console.log(num);

// Task 2 : Variable math

let marks = 80;
marks=marks+10;
console.log(marks);

// Task 3 : Const value

const price = 500;
let finalprice = price + 100;
console.log(finalprice);

// Task 4 : Printing Statement

 console.log("Welcome Team");
 console.log(2026);
 console.log(true);

// Task 5 : datatype check

console.log(typeof("Javascript"));
console.log(typeof(250));
console.log(typeof(false));

// Task 6 : Array task

let fruits = ["Apple", "Banana", "Papaya", "Pineapple", "mango"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[4]);

// Task 7 : object task

let student ={
    name : "Niranjana", 
    age : 22,
    course : "BSc Computer Science"
}

console.log(student.name);
console.log(student.age);

// Task 8 : Arithmetic operations

console.log(20+10);
console.log(50-25);
console.log(5*5);
console.log(100/4);
console.log(20%3);

// task 9 : Increment and Decrement

let x = 5;
x++;
console.log(x);

let y = 10;
y--;
console.log(y);

// Task 10 : comparison operators

console.log(10>5);
console.log(5<2);
console.log(20=="20");
console.log(15==="15");
console.log(10!=8);

// Task 11 : logical operators

console.log(5>2 && 10>3);
console.log(7<5 || 10<3);
console.log(!(10>5));

// Task 12 : if-else statement

let age = 18;

if (age >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}
*/

// Task 1: Print All Students


let students = [
  {id: 1, name: "Naveen", mark: 85, course: "MERN"},
  {id: 2, name: "John", mark: 45, course: "Python"},
  {id: 3, name: "Priya", mark: 72, course: "Java"},
  {id: 4, name: "Arun", mark: 95, course: "React"}
];

for(let i = 0; i < students.length; i++) {
  console.log(students[i].id, students[i].name, students[i].mark, students[i].course);
}


// Task 2: Pass/Fail

for(let student of students) {
  if(student.mark >= 50) {
    console.log(student.name + " - Pass");
  } else {
    console.log(student.name + " - Fail");
  }
}

// Task 3: Grade System

for(let student of students) {
  let grade;
  if(student.mark >= 90) {
    grade = "A Grade";
  } else if(student.mark >= 75) {
    grade = "B Grade";
  } else if(student.mark >= 50) {
    grade = "C Grade";
  } else {
    grade = "Fail";
  }
  console.log(student.name + " - " + grade);
}

// Task 4: Topper student

let topper = students[0];
for(let i = 1; i < students.length; i++) {
  if(students[i].mark > topper.mark) {
    topper = students[i];
  }
}
console.log("Topper is " + topper.name + " - " + topper.mark);

// Task 5: Course search


for(let student of students) {
  if(student.course === "React") {
    console.log(student.id, student.name, student.mark, student.course);
  }
}


// Task 6: Add new student

students.push({id: 5, name: "Rahul", mark: 88, course: "Node JS"});

console.log("All Students:");
for(let student of students) {
  console.log(student.id, student.name, student.mark, student.course);
}


// Task 7:Attendance System


let status = "present";

switch(status) {
  case "present":
    console.log("Welcome");
    break;
  case "absent":
    console.log("Mark Absent");
    break;
  case "leave":
    console.log("Approved Leave");
    break;
  default:
    console.log("Invalid Status");
}


// Task 8: Login system


let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid User");
}