// Level 1

// Task 1: Array Basics

let arr = [10, 20, 30, 40, 50];

console.log("first element:",arr[0]);
console.log("last element:",arr[arr.length-1]);
console.log("Total length:", arr.length);

// Task 2: Push & Pop

arr.push(60,70);
console.log("After push:", arr);

arr.pop();
console.log("After pop:", arr);

// Task 3: Includes check

console.log("Includes 30?", arr.includes(30));
console.log("Includes 100?", arr.includes(100));



// Level 2 -Intermediate 

// Task 4: Filter Salaries

let emp = [
    {name: "Alice", salary: 50000},
    {name: "Bob", salary: 60000},
    {name: "Charlie", salary: 45000},
    {name: "David", salary: 70000}
];

let highsalary = emp.filter(e => e.salary > 50000);
console.log("Employees with salary > 50000:", highsalary);


// Task 5: Map Names

let names = emp.map(e => e.name);
console.log("Employee Names:", names);


// Task 6: Reduce sum

let totalsalary = emp.reduce((total, e) => total + e.salary, 0);
console.log("Total Salary:", totalsalary);


// Level 3 - Logic building

// Task 7: Remove Duplicates

let arr2 = [1,2,2,3,4,4,5];
let unique = [...new Set(arr2)];
console.log("Unique elements:", unique);


// Task 8: Find largest number

let arr2 = [10, 100, 5, 90];
let largest = arr2.reduce((max, num) => num > max ? num : max, arr2[0]);
console.log("Largest number:", largest);


// Task 9: Reverse string without using reverse()
let str = "hello";
let reversed = "";
for (let i = str.length - 1 ; i >= 0; i++) {
    reveversed += str[i];
}

console.log("Reversed string:", reversed);


// level 4 - Advanced Thinking

// Task 10: Group by salary

let emp1 = [
    {name: "A", salary: 50000},
    {name: "B", salary: 60000},
    {name: "C", salary: 50000},
];

let grouped = emp1.reduce((acc, e) => {
    if (!acc[e.salary]) {
        acc[e.salary] = [];
    }
    acc[e.salary].push(e);
    return acc;
}, {});
console.log("Grouped by salary:", grouped);


// Task 11: Flattern Array without flat()

let arr3 = [1, [2, [3, [4]]]];

function flattenArray(a) {
    let result = [];
    for (let item of a) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flattenArray(arr3)); 


// Task 12 : Custom sort descending


let arr = [5, 2, 9, 1];
arr.sort((a, b) => b - a);
console.log(arr);


// Task 13 : Find second largest

let arr = [10, 50, 20, 40];
let uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
console.log(uniqueSorted[1]);

/* function secondLargest(a) {
    let first = -Infinity, second = -Infinity;
    for (let num of a) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    return second;
}
console.log(secondLargest(arr)); */


// Task 14 : Count characters


let str = "aabbccdde";
let count = {};

for (let char of str) {
    count[char] = (count[char] || 0) + 1;
}
console.log(count);