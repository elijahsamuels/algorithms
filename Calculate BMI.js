
function bmi(weight, height) {
    if (weight / Math.pow(height, 2) <= 18.5) {
        return "Underweight";
    } else if (weight / Math.pow(height, 2) <= 25) {
        return "Normal";
    } else if (weight / Math.pow(height, 2) <= 30) {
        return "Overweight";
    } else return "Obese";
}


//  better solution

const bmi = (w, h, bmi = w / h / h) =>
    bmi <= 18.5
        ? "Underweight"
        : bmi <= 25
        ? "Normal"
        : bmi <= 30
        ? "Overweight"
        : "Obese";
