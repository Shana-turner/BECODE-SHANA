////Exercice 00////
/* function oddishOrEvenish(nb){
    const string = nb.toString().split('')
    //return string
    let calcul = 0
    for(let i =0; i <string.length; i++){
        let number = parseInt(string[i])
        calcul += number
    }
    //return calcul
    if(calcul%2 === 0){
        return "Evenish"
    }else if(calcul%2 !== 0){
        return "Odish"
    }
}
console.log(oddishOrEvenish(43))
console.log(oddishOrEvenish(373))
console.log(oddishOrEvenish(4433))


////Exercice 01////
function getTotalPrice(tab){
    let result = 0
    for(let i =0; i< tab.length; i++){
        let Quantity = tab[i].quantity
        let Price = tab[i].price
        let calcul = Quantity*Price
        result +=  calcul
    }
    return result.toFixed(1)
}
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
]))
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
]))
console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
]))
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
]))
console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
])) */


////Exercice 02////
/* function reverseOdd(string){
    const tab = string.split(' ')
    //console.log(tab)
    let i = 0
    let newTab =[]
    do {
        if(tab[i].length%2 !== 0){
            let tabMin = tab[i].split('').reverse().join('')
            newTab.push(tabMin)
        }else if (tab[i].length%2 === 0){
            newTab.push(tab[i])
        }
        i++
    } while (i < tab.length);
    return newTab.join(' ')
}
console.log(reverseOdd("Bananas"))
console.log(reverseOdd("One two three four"))
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))
 */

////Exercice 03////
/* function isSmooth(string){
    let tab = string.toLowerCase().split(' ')
        //console.log(tab)
    for(let i = 0; i < tab.length-1; i++){
        let word1 = tab[i]
        let word2 = tab[i+1]
            //console.log(word1)
        let firstLetter = word2.charAt(0)
        let lastLetter = word1.charAt(word1.length-1)
        //console.log(firstLetter)
       //console.log(lastLetter)
        if(firstLetter !== lastLetter){
            return false
        }
    }
    return true

}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"))
console.log(isSmooth("Someone is outside the doorway"))
console.log(isSmooth("She eats super righteously")) */

////Exercice 04////
/* function sevenBoom(tab){
    let string = tab.join('')
    //console.log(string)
    let newTab = string.split('')
    //console.log(newTab)
    for(let i =0; i< newTab.length; i++){
        if(newTab.includes("7")){
            return "Boom"
        }
    }
    return "there is no 7 in the array"
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86])) */


////Exerice 05////
/* function convert(temperature){
    let tab = temperature.split('')
    //console.log(tab)
    temperature = parseInt(temperature)
    //console.log(temperature)
    let convert 
    if(tab.includes("C")){
        convert = Math.round((temperature * 9/5)+32)
        return `${convert}°F`
    }else if (tab.includes("F")){
        convert = Math.round((temperature-32)*5/9)
        return `${convert}°C`
    }
    return "Error"
}
console.log(convert("35°C"))
console.log(convert("19°F") )
console.log(convert("33")) */


////Exercice 06////
/* function findBrokenKeys(stringOk, stringNot){
    let tabStringOk = stringOk.split('')
    let tabStringNot = stringNot.split('')
       //console.log(tabStringOk)
        //console.log(tabStringNot)

    let letters = []
    let i = 0

    do {
        if(tabStringOk[i] !== tabStringNot[i]){
            letters.push(tabStringOk[i])
        }
    i++ 
    } while (i < tabStringOk.length)
    //console.log(letters)
    let result = []
    for( const letter of letters){
        if(!result.includes(letter)){
            result.push(letter)
        }
    }
    return result
}
    
console.log(findBrokenKeys("happy birthday", "hawwy birthday"))
console.log(findBrokenKeys("starry night", "starrq light"))
console.log(findBrokenKeys("beethoven", "affthoif5")) */