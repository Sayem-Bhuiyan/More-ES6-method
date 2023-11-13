const myName = "Sayem";
const age = 21;
const address = 'Narsingdi';
const bouName = 'Kattapar Beti';
const subjects = ['bangla', 'english', 'math']
const sentence = `
    amr nam ${myName}. 
    amr boys ${age}. 
    amr boi gula holo ${subjects.map(subject => subject).join(' ')}
    amr bari ${address}. 
    amr bou er nam ${bouName}.
`

console.log(sentence);