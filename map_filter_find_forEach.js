const products = [
    { name: 'laptop', price: 1000, count: 5 },
    { name: 'desktop', price: 1500, count: 3 },
    { name: 'phone', price: 500, count: 10 },
    { name: 'tablet', price: 700, count: 8 },
    { name: 'tv', price: 1200, count: 2 },
]

// 1. map
const prices = products.map(p => p.price)
// console.log(prices)
// 2.forEach
products.forEach(p => console.log(p.name))

// 3.filter
const expensive = products.filter(p => p.price > 1000)
console.log(expensive)

// 4.find
const find = products.find(p => p.name === 'phone')
console.log(find)
