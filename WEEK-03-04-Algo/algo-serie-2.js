////Exercice 00////
/* function countTrue(tab){
    if(tab.length === 0){
        return 0
    }
    else{
        let compteur=0
        for(let i = 0; i < tab.length; i++){
            if(tab[i] === true){
                compteur +=1
            }else{
                compteur +=0
            }
        } return compteur
    }
}

let myArray = [true, true, false, true, false] 
console.log(countTrue(myArray))
let myArray1 = [0]
console.log(countTrue(myArray1))  */


////Exercice 01////
/* function possibleBonus (positionMoi, positionLui){
    if(positionMoi === positionLui || positionLui-positionMoi >6 || positionMoi > positionLui){
        return false
    }else if (positionLui-positionMoi <=6 && positionLui-positionMoi >=1){
        return true
    }
}

console.log(possibleBonus(9,9))
console.log(possibleBonus(3, 7))
console.log(possibleBonus(1, 9))
console.log(possibleBonus(5, 3)) */

////Exercice 02////
/* function num_of_digits(nb){
    let string = parseInt(nb).toString()
    return string.length
}

console.log(num_of_digits(1000.89))
console.log(num_of_digits(12))
console.log(num_of_digits(1305981031))
console.log(num_of_digits(0)) */


////Exercice 03////
/* function toArray(obj){
    //console.log(obj)
    const tabs =[]
    for (const [key, value] of Object.entries(obj)){
        tabs.push([key, value])
    }
    return tabs
}

//console.log(toArray({}))
console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray([])) */


////Exercie 04////
/* function arrayOfMultiples (num,length){
    const tabMultiples = [num]
    for(let i = 0; i < length-1; i++){
        let calcul = tabMultiples[i]+num
        tabMultiples.push(calcul)
    }
    return tabMultiples
    
}
console.log(arrayOfMultiples(7, 5))
console.log(arrayOfMultiples(12, 10))
console.log(arrayOfMultiples(17, 6)) */


////Exercice 05////
/* function removeLeadingTrailing(stringNumber){
    let number = parseFloat(stringNumber)
    let string = (number).toString()
    return string
}
console.log(removeLeadingTrailing("230.000"))
console.log(removeLeadingTrailing("00402"))
console.log(removeLeadingTrailing("03.1400"))
console.log(removeLeadingTrailing("30"))
console.log(removeLeadingTrailing("0.000")) */


////Exercice 06////
/* function sortIt(tab){
    tab.sort((a, b) => a - b)
    return tab
}
console.log(sortIt([4, 1, 3]))
console.log(sortIt([4, [1], 3]))
console.log(sortIt([[4], [1], [3]]))
console.log(sortIt([[4], 1, [3]]))
console.log(sortIt([[3], 4, [2], [5], 1, 6])) */


////Exercice 07////
/* function calculator(num1, op, num2){
    if(op === "+"){
        return num1 + num2
    }else if ( op === "-"){
        return num1 - num2
    }else if(op === "*"){
        return num1*num2
    }else if (op === "/"){
        if(num2 === 0){
            return "Impossible de diviser par 0"
        }else {
            return num1/num2
        }
    }
}
console.log(calculator(2, "+", 2))
console.log(calculator(2, "*", 2))
console.log(calculator(4, "/", 2))
console.log(calculator(6,"/",0)) */


////Exercice 08////
/* function areaOfCountry(pays, supercifie){
    const masseTerre = 148940000
    const calcul = (supercifie/masseTerre)*100
    return `${pays} is ${calcul.toFixed(2)}% of the total world's landmass`

}
console.log(areaOfCountry("Russia", 17098242))
console.log(areaOfCountry("USA", 9372610))
console.log(areaOfCountry("Iran", 1648195)) */


////Exercice 09////
/* function reverseWords(string){
    const tab = string.split(' ').reverse()
    //return tab
    const trim = tab.filter((element) => element !== '' )
    return trim.join(" ")
}

console.log(reverseWords(" the sky is blue"))
console.log(reverseWords("hello   world!  "))
console.log(reverseWords("a good example")) */