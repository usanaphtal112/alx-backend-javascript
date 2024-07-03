/**
 * Calculates and returns the sum of student IDs from an array of student objects.
 * 
 * @param {Array<Object>} students - An array of student objects.
 * @param {number} students[].id - The unique identifier of the student.
 * @param {string} students[].firstName - The first name of the student.
 * @param {string} students[].location - The location of the student.
 * 
 * @returns {number} The sum of all student IDs. If the input is not an array, returns 0.
 * 
 */
export default function getStudentIdsSum(students) {
    if (students instanceof Array) {
      return students.reduce(
        (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
        0,
      );
    }
    return 0;
  }