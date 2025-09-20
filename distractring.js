// array-distracting 
const person = ["mehedi", "hasan", "emon", "BD", "USA", "UK"]

// console.log(person[4]);
const [name, name2, name3, name4, name5, name6] = person;
// console.log(name3);

// object distracting
const student = {
    Name: "mehedi",
    age: 22,
    address: "dhaka"

}
const { Name, age, address } = student;
console.log(age)