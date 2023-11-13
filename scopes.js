// const x = 5;

// if(true){
//     console.log(x)
// }

// {
//     let x = 5;
//     x++;
//     console.log('inside block: ', x)
// }

const x = 5;

{
    const x = 10;
    console.log('Inside block: ', x)
}

console.log('outside block: ', x)