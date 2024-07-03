/**
 * Updates the grades of students in a specified city with the provided new grades.
 * 
 * @param {Array<Object>} students - An array of student objects.
 * @param {number} students[].id - The unique identifier of the student.
 * @param {string} students[].firstName - The first name of the student.
 * @param {string} students[].location - The location of the student.
 * @param {Array<Object>} newGrades - An array of objects containing student IDs and their new grades.
 * @param {number} newGrades[].studentId - The ID of the student.
 * @param {string} newGrades[].grade - The new grade of the student.
 * @param {string} city - The city to filter students by.
 * 
 * @returns {Array<Object>} An array of student objects in the specified city with updated grades. If a student's grade is not found in the newGrades array, it defaults to 'N/A'.
 * 
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
 const defaultGrade = { grade: 'N/A' };

 if (students instanceof Array) {
   return students
     .filter((student) => student.location === city)
     .map((student) => ({
       id: student.id,
       firstName: student.firstName,
       location: student.location,
       grade: (newGrades
         .filter((grade) => grade.studentId === student.id)
         .pop() || defaultGrade).grade,
     }));
 }
 return [];
}