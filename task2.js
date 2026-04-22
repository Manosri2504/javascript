//task1 Print All students

let students = [
 {id:1, name:"Naveen", mark:85, course:"MERN"},
 {id:2, name:"John", mark:45, course:"Python"},
 {id:3, name:"Priya", mark:72, course:"Java"},
 {id:4, name:"Arun", mark:95, course:"React"}
]

for (let i = 0; i < students.length; i++) {
    let s = students[i];
    console.log(s.id, s.name, s.mark, s.course);
}

// task2 Pass/fail

for (let s of students) {
    let status;

    if (s.mark >= 50) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    console.log( s.name, status);
}

// task3 Grade System

for (let s of students) {
    let grade;

    if (s.mark >= 90) {
        grade = "A Grade";
    } else if (s.mark >= 75) {
        grade = "B Grade";
    } else if (s.mark >= 50) {
        grade = "C Grade";
    } else {
        grade = "Fail";
    }

    console.log( s.name, grade);
}

// task 4 Topper student

let topper = students[0];

for (let s of students) {
    if (s.mark > topper.mark) {
        topper = s;
    }
}

console.log("Topper is " + topper.name + " - " + topper.mark);

// task 5 Course Search

for (let s of students) {
    if (s.course === "React") {
       console.log(s.id, s.name, s.mark, s.course);
    }
}

// task 6 Add new student Data

students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});


for (let s of students) {
    console.log(s.id, s.name, s.mark, s.course);
}

// task 7 Attendance System

let status = "present";

switch (status) {
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
        console.log("Invalid status");
}

// task 8 Login System

let username = prompt("Enter username:");
let password = prompt("Enter password:");

let correctUser = "admin";
let correctPass = "1234";

if (username === correctUser && password === correctPass) {
    console.log("Login Success");
} else {
    console.log("Invalid User");
}