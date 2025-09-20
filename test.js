// const num = (num1, num2) => {
//     return num1 + num2
// }
// // console.log(num(3, 4));

// const nums = [1, 2, 3];
// const doubled = nums.map(n => n * 2);
// // console.log(doubled);
// const remove = console.log(doubled.shift());
// console.log(remove);
// const re = nums.shift();
// console.log(re)

// distracting
// const person = { name: "Sara", city: "Dhaka" };

// const { name, city } = person;
// console.log(city);

// console.log(person.city);

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// ternary 
// let age = 30;
// (age >= 18) ? console.log("Adult") : console.log("Minor")

// console.log("One");
// setTimeout(() => console.log("Two"), 1000);
// console.log("Three");

localStorage.setItem("user", JSON.stringify({ name: "Mehedi" }));
const data = localStorage.getItem("user");
console.log(data);
