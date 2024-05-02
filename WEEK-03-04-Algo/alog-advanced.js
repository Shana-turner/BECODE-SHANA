////Exerice 00////
/* function FizzBuzz (nb){
    let tabNumber = []
    let i = 0 
    while( i <=nb){
        tabNumber.push(i)
        i++
    }
    for( let i = 1; i < tabNumber.length; i++){
        if(tabNumber[i]%3 === 0 && tabNumber[i]%5 === 0){
            tabNumber.splice(tabNumber[i], 1, "FizzBuzz")
        }else if (tabNumber[i]%5 === 0){
            tabNumber.splice(tabNumber[i], 1, "Buzz")
        }else if (tabNumber[i]%3 === 0){
            tabNumber.splice(tabNumber[i], 1, "Fizz")
        }
    }
    tabNumber.splice(0,1)
    console.log(tabNumber)

}

console.log(FizzBuzz(40)) */

////Exercice 01////     PAS FINI
/* function ransomNote (noteText,magazineText){
    let noteTab = noteText.split(' ')
    console.log(noteTab)
    let magazineTab = magazineText.split(' ')
    console.log(magazineTab)
    let compareTab = []
    let i =0
    while(i < noteTab.length){
        if(magazineTab.includes(noteTab[i])){
            let index = magazineTab.indexOf(noteTab[i])
            magazineTab.splice(index,1)
        }
        else{
            return false
        }
        i++
    }
    console.log(magazineTab)
    return true
    

    
}

console.log(ransomNote(
    noteText = "this is a note to you from a secret admirer",
    magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
)) */

////Exercice 02////
/* function isPalindrome (txt){
    let param = txt.replace("'","").replace(",","").replace(" ", "").toLowerCase()
    const tab = param.split('')
    let verse = tab.join('')
    //console.log(tab)
    let tabReverse = tab.reverse()
    let reverse = tabReverse.join('')
    //console.log(verse)
    //console.log(reverse)
    if(verse !== reverse){
        return false
    } return true
}
console.log(isPalindrome("kayak"))
console.log(isPalindrome("race car"))
console.log(isPalindrome("hello world"))
console.log(isPalindrome("Madam, I'm Adam")) */


////Exercice 03////
function caesarCipher(str, numAnvance){
    let tab = str.toLowerCase().split('')
    //console.log(tab)
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    //console.log(alphabet)

    for(let i =0; i < tab.length; i++){
        if(tab[i] === ' '){
            tab.splice(i,1,' ')
        }else{
            let foundIndex = alphabet.indexOf(tab[i])
            let newIndex = (foundIndex+ numAnvance)
            tab.splice(i,1,alphabet[newIndex])
        }
    }
    console.log(tab)
    return tab.join('')
}
//console.log(caesarCipher("zoo keeper", 2)) // "bqq mggrgt"
//console.log(caesarCipher("bqq mggrgt", -2)) // "zoo keeper
//console.log(caesarCipher("My name is Henrique", 3)) // "pb qdph lv khqultxh "


////Exercice 04////
function switchWord (str){
    let reverseAll = str.toLowerCase().split('').reverse().join('')
    console.log(reverseAll)
    let reverseWord = reverseAll.split(' ').reverse().join(' ')
    //console.log(reverseWord)
    return reverseWord

}
console.log(switchWord("This is a string of words")) //"siht si a gnirts fo sdrow"



////Exercice 05////
/* function reverse(tab){
    let endIndex = tab.length-1
    let startIndex = 0
    while(endIndex >= tab.length/2){
        let tampon = tab[endIndex]
        tab[endIndex]= tab[startIndex]
        tab[startIndex] = tampon
        
        endIndex --
        startIndex ++
    }
    return tab

}

console.log(reverse(["Artur", "Tèo", "Luna", "Emmanuel"])) */ // ["Emmanuel", "Luna", "Tèo", "Artur"]



////Exercice 06////
/* function somme(numArray,sum){
    let tabSomme =[]
    let i = 0;
    while(i < numArray.length){
        let j = 1;
        while(j < numArray.length && j != i){
            if(numArray[i]+numArray[j] === sum){
                tabSomme.push([numArray[i], numArray[j]])
            }
            j++
        }
        i++
    }
    return tabSomme
}
console.log(somme([1, 6, 4, 5, 3, 3], 7)) */



////Exercice 07////
/* function fibonacci(num){
    let tab =[1]
    for(let i = 0; i < 2; i++){
        let number =1
        number = number +i 
        tab.push(number)
    }
    for(let j =3; j< num && j > tab.length-1; j++){
        number = (tab[j-1])+ (tab[j-2])
        tab.push(number)
    }

    return tab
}
console.log(fibonacci(6)) //[1, 1, 2, 3, 5, 8]
console.log(fibonacci(9)) */ //[1, 1, 2, 3, 5, 8, 13, 21, 34]



