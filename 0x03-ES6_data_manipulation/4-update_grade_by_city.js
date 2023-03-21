export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.find((grade) => (grade.studentId === student.id));
      return {
        ...student,
        grade: grades ? grades.grade : 'N/A',
      };
    });
}
