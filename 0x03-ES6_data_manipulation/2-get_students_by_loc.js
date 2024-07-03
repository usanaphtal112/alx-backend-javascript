/**
 * Filters and returns a list of students who are located in the specified city.
 *
 * @param {Array<Object>} students - An array of student objects.
 * @param {number} students[].id - The unique identifier of the student.
 * @param {string} students[].firstName - The first name of the student.
 * @param {string} students[].location - The location of the student.
 * @param {string} city - The city to filter students by.
<<<<<<< Updated upstream
 *
 * @returns {Array<Object>} An array of student objects who are located
 * in the specified city. If the input is not an array, returns an empty array.
 *
=======
 *
 * @returns {Array<Object>} An array of student objects who are located in the specified city. If the input is not an array, returns an empty array.
 *
>>>>>>> Stashed changes
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
