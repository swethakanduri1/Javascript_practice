// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) =9,1,2,3,4,5
// myArr.shift()=1,2,3,4,5

// console.log(myArr.includes(9)); =false
// console.log(myArr.indexOf(3));=3
// console.log(myArr.indexOf(15));=-1
// const newArr = myArr.join() -adds all the elements of an array into a string,seperated by the specified seperator

// console.log(myArr);=[0,1,2,3,4,5]
// console.log( newArr);0,1,2,3,4,5
// console.log( typeof newArr);string

// slice, splice IN SLICE ORIGINAL ARRAY IS NOT MANUPULATED AND IN SPLICE ORIGINAL ARRAY IS ALSO MANUPULATED

console.log("A ", myArr);= A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)

console.log(myn1); =[1,2]
console.log("B ", myArr); =B [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); =C [0,4,5]
console.log(myn2);=[1,2,3]
