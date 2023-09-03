//1
const yearToDays = (yearAge) => {
    let dayAge = yearAge * 365
    return dayAge;
}
console.log(yearToDays(1));


//2

const findMin = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

const arr = [1, 2, 3, 4];
const min = findMin(arr);
console.log(min);



//3
const sortNumbers = (numArr) => {
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] < 0)
            return "this array contain negative numbers";
    }

    for (let i = 0; i < numArr.length - 1; i++) {
        for (let j = 0; j < numArr.length - i - 1; j++) {
            if (numArr[j] < numArr[j + 1]) {
                // Swap the elements if they are out of order.
                const temp = numArr[j];
                numArr[j] = numArr[j + 1];
                numArr[j + 1] = temp;
            }
        }
    }

    return numArr;
}
numArr = [9, 1, 4, 5, 2];
console.log(sortNumbers(numArr))




//4
const clacAvg = (arr3) => {
    if (arr3.length == 0)
        return0;

    let sum = 0;
    for (let i = 0; i < arr3.length; i++) {
        sum += arr3[i];
    }
    let avg = sum / arr3.length;
    return avg;
}
const arr3 = [5, 6, 7, 8, 9];
console.log(clacAvg(arr3));


//5
//both are false because they refrence to defferent places in memory


//6
// A  C  B  because set time out is asynchronous function it's synchronous


//7
//  10 because var make reassign the value


//8
//name => undefined because name is declared by var and var see the all scope with initial value undefined
//age  => ReferenceError beacuse age is declared by let and let is't see all sacope it's see what is under of it