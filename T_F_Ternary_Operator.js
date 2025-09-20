// const value = {};

// if (value) {
//     console.log("value is true");
// }
// else {
//     console.log("value is false");
// }

// ternary operator
const value2 = true;
// const result = value2 ? console.log("value is true") : console.log("value is false");

// Ternary operator with number
const num = 10;
const result2 = num > 10 ? "num is greater than 10" : "num is less than 10";
// console.log(result2);

// Ternary operator with object 
const obj = { name: "mehedi", age: 22 };
const result3 = obj ? "obj is true" : "obj is false";
// console.log(result3);

// Ternary operator with array
const arr = [1, 2, 3];
const result4 = arr ? "arr is true" : "arr is false";
// console.log(result4);

// Ternary operator with string
const str = "mehedi";
const result5 = str ? "str is true" : "str is false";
// console.log(result5);

// Ternary operator with null\
const nullValue = null;
const result6 = nullValue ? "nullValue is true" : "nullValue is false";
// console.log(result6);

// And and or operator
const num1 = 10;
const num2 = 20;
const result7 = num1 && num2;
// console.log(result7);

const isActive = false;

const showUser = () => { console.log("show user") }
const hideUser = () => { console.log("hide user") }

isActive ? showUser() : hideUser();