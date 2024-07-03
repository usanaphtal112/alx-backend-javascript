/**
 * Extracts and returns a list of student IDs from an array of student objects.
 *
 * @param {Array<Object>} students - An array of student objects.
 * @param {number} students[].id - The unique identifier of the student.
 * @param {string} students[].firstName - The first name of the student.
 * @param {string} students[].location - The location of the student.
 *
 * @returns {Array<number>} An array of student IDs. If the input is not an array
 *
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
