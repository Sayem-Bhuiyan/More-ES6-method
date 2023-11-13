const person = { name: 'Sayem', age: 21, address: 'Narsingdi' };
// dot notation, bracket notation

// console.log(person.age)
// console.log(person['age'])

const complexObject = {
    id: 1,
    name: 'Sayem Bhuiyan',
    info: {
        description: 'This is a complex nested object.',
        author: {
            firstName: 'John',
            lastName : 'Doe'
        }
    },
    data: {
        values: [10, 20, 30],
        settings: {
            isEnabled: true,
            maxItem: 5
        }
    }
};

// access name, description, lastName, last element of values, maxItems
console.log('name: ', complexObject.name)
console.log('description: ', complexObject.info.description);
console.log('last name: ', complexObject.info.author.lastName)
console.log('last element of values: ', complexObject.data.values[2])
console.log('last element of values: ', complexObject.data.values[complexObject.data.values.length - 1])
console.log('max item: ', complexObject.data.settings.maxItem)