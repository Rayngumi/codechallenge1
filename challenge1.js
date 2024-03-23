const readline = require('readline');

// Function to get grade based on marks
function getGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Function to validate input marks
function validateMarks(input) {
    const marks = parseFloat(input);
    return !isNaN(marks) && marks >= 0 && marks <= 100;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to enter student marks
rl.question("Enter student marks (between 0 and 100): ", function(inputMarks) {
    if (validateMarks(inputMarks)) {
        const marks = parseFloat(inputMarks);
        const grade = getGrade(marks);
        console.log(`Grade: ${grade}`);
    } else {
        console.log("Invalid input. Marks should be a number between 0 and 100.");
    }
    rl.close();
});