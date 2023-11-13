const arr = [3, 4, 5, 6, 7, 8, 9];

const [first, second, third, fourth] = arr;
const [a, b, c, ...rest] = arr;
console.log(a, b, c, rest);