// exports.matrixCalculation = (array1, array2, array3) => {
exports.matrixCalculation = (...args) => {
    let combination = [];
    for (let i = 0; i < 3; i++) {
        array1 = args[ i ]
        array2 = args[ (i+1) >= 3 ? ((i+1)-3) : (i+1) ]
        array3 = args[ (i+2) >= 3 ? ((i+2)-3) : (i+2) ]    
        array1.forEach(ele => {
            array2.forEach(ele1 => {
                array3.forEach(ele2 => {
                    const temp = `${ele}, ${ele1}, ${ele2}`;
                    if (!combination.includes(temp)) {
                        combination.push(temp);
                    }
                })
            })
        })
    }
    return combination;

}

exports.finbonacci = (number) => {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    let list = [num1]
    for (i = 0; num2 < number; i++) {
        list.push(num2);
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return list;
}