//// 01 ////
const removeDuplicates = (tab) => [...new Set(tab)]

/* console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]))
console.log(removeDuplicates(["hello", "world", "goodbye", "world"]))
console.log(removeDuplicates([true, true, false, true, true, false])) */



//// 02 ////
const capitalize = (str) => str.charAt(0).toUpperCase()+str.slice(1)

/* console.log(capitalize("belgium"))
console.log(capitalize("brazil"))
console.log(capitalize("brussels")) */



//// 03 ////
const dayDif = (date1, date2) => (date2-date1)/86400000

//console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-30")))



//// 04 ////
const average = (...arg)=> arg.reduce((accumulator, currentValue) =>accumulator + currentValue)/arg.length

//console.log(average(1, 2, 3, 4)) 



//// 05 ////
const getSmallest = (tab) => Math.min(...tab)

//console.log(getSmallest([13, 7, 11, 3, 9, 1, 17]))



//// 06 ////
const areEqual = (tab1, tab2) => tab1.every((element1) => tab2.includes(element1))

/* const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 2, 3]
console.log(areEqual(arr1, arr2))
console.log(areEqual(arr1, arr3)) */



//// 07 ////
const randomRGB = () => `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`

//console.log(randomRGB()) // Result : "rgb(232, 115, 164)"



//// 08 ////
const occurencies = (str, letter) => str.split('').includes(letter)
console.log(occurencies("hello", "l"))