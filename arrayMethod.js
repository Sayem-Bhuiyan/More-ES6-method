// forEach, map, Find, Filter, Reduce

// const arr = [1, 2, 3];
// const a = x => console.log(x)
// arr.forEach( a => console.log(a));

// const fruits = ['Mango', 'Banana', 'Lichi'];
// fruits.forEach(fruit => console.log(fruit));

// let sum = 0;
// arr.forEach( n => sum += n)
// console.log(sum)

// const arr = [1, 2, 3];

// const result1 = arr.forEach( item => item)
// console.log(result1)

// const result2 = arr.map(item => item * 2);
// console.log(result2)

// const fruits = ['Mango', 'Banana', 'Lichi'];
// array.forEach((element, index, mainArray) => {})
// fruits.forEach((item, index, arr) => console.log(item, index, arr))

// const fruits = ['Mango', 'Banana', 'Lichi', 'Orange', 'Apple'];
// const find = fruits.find(item => {
//     if(item.length > 5){
//         return item;
//     }
// })

// console.log(find)

// const fruits = ['Mango', 'Banana', 'Lichi', 'Banana', 'Orange', 'Apple'];
// const sameFruits = fruits.filter(item => item === 'Banana');
// console.log(sameFruits)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const filter = numbers.filter(item => item % 2 === 0);
// console.log(filter)

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((sum, item) => sum + item, 0);
const multiply = numbers.reduce((multi, item) => multi * item, 1)
console.log(sum, multiply)