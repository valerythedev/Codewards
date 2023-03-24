// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade (s1, s2, s3) {
  // Code here
let averageScore = (s1+s2+s3)/ 3
  let grade
  if (averageScore >= 90 && averageScore <=100){
    grade ='A'
  } else if(averageScore >= 80 && averageScore<=90){
    grade ='B'
  } else if(averageScore >= 70 && averageScore<=80){
    grade= 'C'
  } else if(averageScore >= 60 && averageScore<=70){
    grade= 'D'
  } else{
    grade='F'
  }
  return grade
}