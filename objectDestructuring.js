const person = { name: 'Sayem', age: 21, address: 'Narsingdi' };
const {age} = person;
const {address, ...rest} = person;
console.log(age)
console.log(rest)