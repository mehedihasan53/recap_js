const students = [
    { name: "Mehedi", age: 17, city: "Dhaka" },
    { name: "Sara", age: 19, city: "Chittagong" },
    { name: "Rafi", age: 17, city: "Khulna" },
    { name: "Sajib", age: 17, city: "Savar" },


];

const addData = {
    name: "hasan",
    age: 20,
    city: "Savar"
}
const addNewData = [...students, addData]
// console.log(addNewData);
const removeData = students.filter(s => s.age !== 17);
// console.log(removeData);

const newAddStudent = [...students, addData]
// console.log(newAddStudent);
const only17 = newAddStudent.filter(s => s.age === 17)
console.log(only17);