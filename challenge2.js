function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0;
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints >= 12) {
            console.log("License suspended");
        }
        return demeritPoints;
    }
}

// Taking speed input from user
let carSpeed = parseInt(prompt("Enter car speed (km/h):"));

// Validating input and calculating demerit points
if (!isNaN(carSpeed) && carSpeed >= 0) {
    calculateDemeritPoints(carSpeed);
} else {
    console.log("Invalid input! Please enter a valid speed.");
}