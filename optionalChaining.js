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

console.log(complexObject.contact)
console.log(complexObject?.contact?.phone)