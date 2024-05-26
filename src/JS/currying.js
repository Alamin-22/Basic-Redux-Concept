// const add = (a, b, c) => {
//     return a + b + c;
// }

// const result = add(3, 2, 3); // add(1)(2)(3) << this formate is a pattern not a concept 


// console.log(result);


const add = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}

const result = add(20)(20)(10);


console.log("coming from line number 22",result);