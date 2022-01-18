const getGrade = (grade1, grade2, grade3) => {
  const gradeAvg = (grade1 + grade2 + grade3) / 3;
  const gradeForLetter = Math.floor(gradeAvg / 10);
  switch (gradeForLetter) {
    case 9: return 'A';
    case 8: return 'B';
    case 7: return 'C';
    case 6: return 'D';
    default: return 'F';
  }
}