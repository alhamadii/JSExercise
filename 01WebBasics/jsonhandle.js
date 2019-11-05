const student = {
    name: 'hamad',
    age: 33,
    isActive: true,
}
const studentObjToString = JSON.stringify(student);
console.log(typeof(studentObjToString));
// localStorage.setItem('student', studentObjToString)

const toJSONStudent = JSON.parse(studentObjToString);
console.log(toJSONStudent.age);
console.log(typeof toJSONStudent);

