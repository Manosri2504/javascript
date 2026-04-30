// task1  Array Basics

let arr1 = [10, 20, 30, 40, 50];


console.log("First element:", arr1[0]);

console.log("Last element:", arr1[arr1.length - 1]);


console.log("Total length:", arr1.length);

//Task 2: Push & Pop

let arr = [1, 2, 3];

arr.push(4, 5);


arr.pop();

console.log(arr);

// Task 3: Includes Check

let techArr = ["html", "css", "javascript", "react"];

console.log(techArr.includes("javascript"));

// Task 4: Filter Salaries

emp = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 }
];


 result = emp.filter(e => e.salary > 20000);

console.log(result);

//Task 5: Map Names

 names = emp.map(e => e.name);

console.log(names);

//Task 6: Reduce Sum


 totalSalary = emp.reduce((sum, e) => sum + e.salary, 0);

console.log("Total Salary:", totalSalary);

//Task 7: Remove Duplicates


arr = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(arr)];

console.log(unique);

//Task 8: Find Largest Number


arr = [10, 200, 5, 90];

let largest = Math.max(...arr);

console.log(largest);

//Task 9: Reverse String WITHOUT reverse()


let str = "hello";

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);

// Task 10: Group by Salary


emp = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 10000 }
];

let grouped = emp.reduce((acc, e) => {
  if (!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});

console.log(grouped);

//Task 11: Flatten Array (without flat)


arr = [1, [2, [3, [4]]]];

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

let flatArr = flattenArray(arr);
console.log(flatArr);

//Task 12: Custom Sort (Descending)


arr = [5, 2, 9, 1];

arr.sort((a, b) => b - a);

console.log(arr);

//Task 13: Find Second Largest

arr = [10, 50, 20, 40];

let sorted = [...arr].sort((a, b) => b - a);
let secondLargest = sorted[1];

console.log(secondLargest);

// Task 14: Count Characters


str = "aabbccdde";

let count = {};

for (let ch of str) {
  count[ch] = (count[ch] || 0) + 1;
}

console.log(count);

