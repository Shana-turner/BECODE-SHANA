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
const occurencies = (str, letter) => str.split('').filter((element) => element === letter).length

/* console.log(occurencies("hello", "l"))  
console.log(occurencies("abracadabra", "a"))
console.log(occurencies("oups", "z")) */



//// 09 ////
const onlyPositives = (tabNumber) => tabNumber.map(num => num < 0  ? 0 : num).reduce((accumulator, currentValue) => accumulator + currentValue) 

/* console.log(onlyPositives([1, 6, 2, -3, 5, -12]))
console.log(onlyPositives([-3, -4, -2])) */


//// 10 //// 
const scanAndFind = (array, obj) => array.filter((element)=> Object.values(element)[1] === Object.values(obj)[0] )

console.log(scanAndFind(
    [
        {
            firstName: "Vito",
            lastName: "Corleone",
        },
        {
            firstName: "Jon",
            lastName: "Snow",
        },
        {
            firstName: "Harry",
            lastName: "Potter",
        },
        {
            firstName: "Michal",
            lastName: "Corleone",
        },
    ],
        {
            lastName: "Corleone",
        }
)) // Result : [{firstName: Vito, lastName: Corleone}, {firstName: Michael, lastName: Corleone}]
console.log(scanAndFind(
    [
    { fullName: "Roi Baudoin", id: 49762 },
    { fullName: "Margareth Tatcher", id: 94357 },
    { fullName: "Barack Obama", id: 76458 },
    { fullName: "Emmanuel Macron", id: 10687 },
    { fullName: "Charles de Gaulle", id: 67098 },
    { fullName: "Boris Johnson", id: 16437 },
    ],
    { id: 10687 }
))// Result : [{fullName: "Emmanuel Macron", id: 10687}]