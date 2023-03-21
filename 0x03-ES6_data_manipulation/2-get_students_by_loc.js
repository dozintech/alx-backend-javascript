export default function getStudentsByLocation(students, city) {
  return students.filter((res) => res.location === city);
}
