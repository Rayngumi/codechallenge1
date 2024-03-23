function generateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 49 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Prompting user for input
let studentMark = parseInt(prompt("Enter student's mark:"));

// Validating input and generating grade
if (!isNaN(studentMark) && studentMark >= 0 && studentMark <= 100) {
    let grade = generateGrade(studentMark);
    console.log(`Student's grade: ${grade}`);
} else {
    console.log("Invalid input! Please enter a number between 0 and 100.");
}
