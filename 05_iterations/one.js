// For

// for (let a = 2; a <= 10; a++) {
//     for (let b = 0; b <= 10; b++) {
//         console.log(`${a} * ${b} = ${a*b}`);        
//     }
// }

const myArray = [0,1,3,5,2,6,2]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);   
}


for (let i = 1; i <= 20; i++) {
    if(i === 5 || i == 7){
        continue
    }
    console.log(`value of i : ${i}`);
}