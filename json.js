const person = {
    "name": "Mehedi",
    "age": 18,
    "hobby": "Traveling",
    "family": {
        "father": "abc",
        "mother": "xyz"
    },
    "address": "savar"
}

const data = JSON.stringify(person)
// console.log(data)
const data2 = JSON.parse(data);
console.log(data2)