// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  bmi = weight / height ** 2
  if (bmii <= 18.5) {
    return "Underweight"
  } else if (bmii <= 25.0) {
    return "Normal"
  } else if (bmii <= 30.0) {
    return "Overweight"
  } else if (bmii > 30) {
    return "Obese"
  }
}