const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["thor", "Ironman", "spiderman"]

// marvel_heros.push(dc_heros)=["thor", "Ironman", "spiderman",["thor", "Ironman", "spiderman"]]
//this takes array 2 as a data element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);=thor

marvel_heros.concat(dc_heros)=same as push if we do not take a new variable as concate returns a new array

// const allHeros = marvel_heros.concat(dc_heros)=['thor,'iron,3,4,5,6...........}
// console.log(allHeros);
// ... is a spread operator that seperated all elements in an array and treates as individual elements so it is vey easy to modify or merge

const all_new_heros = [...marvel_heros, ...dc_heros]

//Concat and spread are same functionality wise but spread is also used in functions and objects apart from arrays
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
//flat function flats out all the sub arrays one within another into a single array


console.log(Array.isArray("Hitesh"))=false
console.log(Array.from("Hitesh"))//converts string to array
console.log(Array.from({name: "hitesh"})) // interesting as it gives emety array due to lack of clarity wheter to convery key to array or value to array

let score1 = 100
let score2 = 200
let score3 = 300
//of method returns a new array from set of elements
console.log(Array.of(score1, score2, score3));
