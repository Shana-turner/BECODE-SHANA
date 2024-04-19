////VARIABLES ////
let myString = "I am very sad";

myString = myString.replace("sad", "happy");
console.log (myString)


////STRINGS////
// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!
// YOUR CODE BELOW THIS LINE:
let whisper = message.toLowerCase().trim()
console.log(whisper)

let lastString = "BonjouR"
let tailleString = lastString.length

console.log(lastString.charAt(tailleString-1))

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!
let extraire = word.slice(5,9)
let facialHair = extraire.replace("o", "e")
console.log(facialHair)


////NUMBER////
let dix = Math.floor((Math.random())*10)
console.log(dix)
let cinq = Math.random()*(4)+1
console.log(cinq)

/*const name = prompt("What is your name?");
const age = prompt("Your age ")
const live = prompt("Your city ")
alert(`His name is ${name}, his age is ${age} and his city is ${live}`)*/

function tva (){
    const price = prompt("Prix sans TVA")
    let TVA = price*1.21
    alert(`Le prix avec TVA est de ${TVA}.`)
}

function SurfaceCercle (){
    const rayon = prompt("Quelle est le rayon du cercle ?")
    let surface = rayon*3.14
    alert(`La surface du cercle est de ${Math.round(surface)}`)
}

function calculatrice (){
    let firstNumber = parseFloat(prompt("Entrez le premier chiffre"))
    let choixCalcul = prompt("+ , - , /, *")
    let secondNumber =parseFloat(prompt("Entrez le deuxième chiffre"))
    switch (choixCalcul){
        case '+' :
            alert(firstNumber + secondNumber)
            break;
        case '-' : 
            alert(firstNumber - secondNumber)
            break;
        case '/' : 
            alert(firstNumber / secondNumber)
            break;
        case '*' : 
            alert(firstNumber * secondNumber)
            break;
        default :
            alert('Il y a eu un probléme')
    } 

}

////CONDITIONS////
function Animals (){
    let name = prompt("What's your name ?")
    let animal = prompt("which do you prefer, cats or dogs ?")
    if (animal = "cats"){
        alert(`Hello ${name}, your prefer the cat.`)
    }else if (animal = "dogs"){
        alert(`Hello ${name}, your prefer the dog.`)
    }else {
        alert (`Hello ${name}, you don't answer.`)
    }
}

const mystery = "Peugot7"; 
// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
} else {
  console.log("TRY AGAIN");
}

function car (){
    let ageUser = parseInt(prompt("Your age ?"))
    if (ageUser < 18){
        alert("Sorry, you are too young to drive this car. Powering off")
    }else if (ageUser === 18){
        alert("Congratulations on your first year of driving. Enjoy the ride!")
    }else{
        alert("Powering On. Enjoy the ride!")
    }
}
function fruits(){
    let fruitPrefer = prompt("What's your favourite fruit ?")
    switch(fruitPrefer.toLocaleLowerCase().replace("s","")){
        case 'banane':
            alert("I like bananas as well")
            break;
        case 'strawberry' : 
            alert("I LOVE strawberries")
            break;
        case 'grape' :
            let choice =prompt("You prefers purple or green grapes")
            if(choice = 'purple'){
                alert("I don't like purple grapes")
            }else{
                alert("Green grapes are ok...")
            }
            break;
        default :
            alert("I don't understand the word he said ")

    }
}



////ARRAYS////
const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

leaderboard[1] = "Luna"
leaderboard.splice(3,1,"Draco")
console.log(leaderboard)

const initialArray = [
    null,
    true,
    ["Apple", "two", undefined],
    false,
    ["three", "BeCode"],
    4,
    "I am a big bad wolf",
    ["one"],
  ]
const finalArray = [initialArray[7][0], initialArray[2][1], initialArray[4][0]]
console.log(finalArray)

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!
planets.shift()
planets.push('Saturn')
planets.unshift('Mercury')
console.log(planets)


////OBJECTS////
const product = {
    name : 'Iphone 15',
    inStock : true,
    price : 1249.90,
    includedInPackage : ["case", "earphones", "charger"],

}
console.log(product)

const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
  };
const fullAddress = restaurant.address + ', ' + restaurant["city"] + ', ' + restaurant["state"] + " " + restaurant.zipcode
console.log(fullAddress)



////LOOPS////
const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
for (let i = animals.length-1; i >= 0 ; i--){
    console.log(animals[i])
}

const users = [
    {
      firstName: "Vito",
      lastName: "Corleone",
    },
    {
      firstName: "William",
      lastName: "Wallace",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
    },
    {
      firstName: "Amadeus",
      lastName: "Mozart",
    },
    {
      firstName: "Barack",
      lastName: "Obama",
    },
  ];

for(let i = 0; i <= users.length-1; i++){
    console.log( i+1 + "."  +"My full name is " + users[i].firstName + " " + users[i].lastName)
}

const seatingChart = [
    ["Colas", "Benoit", "Elodie"],
    ["Sola", "Irina", "Antonino", "Eli"],
    ["John", "Maryna", "Naike", "Fabrice"],
  ];
  
  for (let i = 0; i < seatingChart.length; i++) {
    console.log("ROW #" + (i+1))
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    for (let j = 0; j < row.length; j++) {
      console.log(row[j]);
    }
  }

function littleGame (){
    let nbMax = parseInt(prompt("Give me a maximal number"))
    if(!nbMax){
        let nbMax = parseInt(prompt("Give me a maximal number now"))
    }else{
        let nbRandom = Math.floor((Math.random()*nbMax)+1)
        console.log(nbRandom)
        let answerUser = parseInt(prompt("Finding the number"))
        do{
        if(!answerUser){
            alert("It's not a number")
            let answerUser = parseInt(prompt("Finding the number"))
        }else{
                if(answerUser > nbRandom){
                    prompt("The secret number is lower")
                }else if(answerUser < nbRandom){
                    prompt("The secret number is highter")
                }else{
                    prompt("Congratulation ! You find the secret number ! You try " + answerUser)
                }
        }
        answerUser++
        }while (answerUser != nbRandom)
    }
}
littleGame()