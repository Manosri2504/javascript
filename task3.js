//Task 1: Student Form Function

function studentForm(name, age, course) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Course: " + course);
}

studentForm("Naveen", 22, "MERN");

//Task 2: Calculator Function

function calc(a, b) {
    console.log("Addition: " + (a + b));
    console.log("Subtraction: " + (a - b));
    console.log("Multiplication: " + (a * b));
}

calc(10, 5);

//Task 3: Reusable Greeting

function greet(name) {
    console.log("Hello " + name);
}


greet("Kamal");
greet("Praveen");
greet("Sai");

//Task 4: Return Value

function square(num) {
    return num * num;
}


let result = square(5);

console.log("Square value is: " + result);

//Task 5: Scope Check

function testScope() {
    let secret = "javascript";
    console.log("Inside function:", secret);
}

testScope();


//console.log("Outside function:", secret);
//Uncaught ReferenceError: secret is not defined
   // at task3.js:53:34

//Task 6: Merge Arrays

let boys = ["car", "bike"];
let girls = ["doll", "teddy"];


let toys = [...boys, ...girls];

console.log(toys);

//Task 7: Unlimited Numbers

function sumAll(...nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum;
}


console.log(sumAll(10, 20, 30, 40)); 

//Task 8: Array Destructuring
let colors = ["red", "green", "blue"];


let [c1, c2, c3] = colors;


console.log(c1);
console.log(c2);
console.log(c3);

//Task 9: Object Destructuring
let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};

let { name: empName, role: empRole } = emp;

console.log(empName, empRole);
//Task 10: Offer Generator

function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
}

const offers = offerGenerator();

function getOffer() {
    let result = offers.next();
    console.log(result.done ? "No more offers" : result.value);
}

getOffer();
getOffer();
getOffer();
getOffer();
getOffer();

//Task 11: Curry Function

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}


console.log(add(10)(20)(30)); 

//Task 12: Student Marks Analyzer

function calculateMarks(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    let average = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", average);
}

calculateMarks(80, 90, 70, 60);

// Challenge Task (Real Company Level)
function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");