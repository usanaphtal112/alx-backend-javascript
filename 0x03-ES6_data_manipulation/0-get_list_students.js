/**
 * Returns a list of student objects.
 *
 * Each student object contains an ID, a first name, and a location.
 *
 * @returns {Array<Object>} An array of student objects.
 * @returns {number} return[].id - A unique identifier for the student.
 * @returns {string} return[].firstName - The first name of the student.
 * @returns {string} return[].location - The location of the student.
 *
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
