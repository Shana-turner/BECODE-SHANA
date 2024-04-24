function reverseString (string){
    let tabWord =[]
    for(let i= 0; i < string.length; i++){
        tabWord.push(string[i])
    }
    //console.log(tabWord)
    let tabWordReverse = tabWord.reverse()
    console.log(tabWordReverse.join(""))
    
    
}
reverseString("Emmanuel Shabani Kimputu")
//Un autre façon
function reverseString2 (string){
    console.log(string.split('').reverse().join(""))
}
reverseString2("Emmanuel Shabani Kimputu")

function palindrome (string){
    let stringReverse = string.split('').reverse().join("")
    console.log(stringReverse)
    if(string === stringReverse){
        console.log("C'est un palindrome")
    }else {
        console.log("Ce n'est pas un palindrome")
    }
}
palindrome("ressasser")
palindrome("Promener")

function theBigOne (string){
    const tab = string.split(' ')
    //console.log(tab)
    let stringLength =[]
    for (let i =0; i < tab.length; i++){
        stringLength.push(tab[i].length)  
    }
    console.log(Math.max(...stringLength))
    console.log(`Le mot le plus grand dans la phrase "${string}" fait ${Math.max(...stringLength)} lettres`)   

}
theBigOne("Bonjour, aujourd'hui je vous présente mes petits algorithmes.")

function aleatoire (max){
    alert(`Un nombre au pif ${Math.round(Math.random()*max)}`)
}
//aleatoire(20)

function majuscule (str){
    const words = str.toLowerCase().split(' ')
    //console.log(words)
    const array =[]
    words.forEach((word)=>{
        let firstLetter = word.charAt(0).toUpperCase()
        //console.log(firstLetter)
        let secondPart = word.replace(word.charAt(0), firstLetter)
        array.push(secondPart)
    })
    console.log(array.join(' '))
    
}

majuscule("salUt, leS gEns")

function repeat (str, num){
    console.log(str.repeat(num))
}
repeat("Hello", 6)

function stringToArray(string){
    console.log(string.split(" ")) 
  
}
stringToArray("Robin Singh")
