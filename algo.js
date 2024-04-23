function makesTen (a, b){
    if(parseInt(a) === 10 || parseInt(b) === 10 || a+b ===10){
        console.log(true)
    }else {
        console.log(false )
    }
}
makesTen(9, 10);
makesTen(9, 9); 
makesTen(1, 9)

function calcAge(age){
    console.log(parseInt(age)*365)
}
calcAge(65)
calcAge(0)
calcAge(20)

function addUp (nb){
    if(parseInt(nb) >= 1 && parseInt(nb) <= 1000){
        let tab =[]
        for(let i =1; i <= nb; i++){ 
            tab.push(i)
        }
        let initialValue = 0
        let total = tab.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        )
        console.log(total)

    }else{
        console.log("Number to big")
    }
}
addUp(4)
addUp(13)
addUp(600)

function minMax(tabNumbers){
    const minmax =  [Math.min(...tabNumbers), Math.max(...tabNumbers)]
    console.log(minmax)

}
minMax([1, 2, 3, 4, 5])
minMax([2334454, 5])
minMax([1])


function detectWord (words){
    let letterMinuscule = '';
    for(let i = 0; i < words.length; i++){
        if(words[i] === words[i].toLowerCase()){
            letterMinuscule += words[i]
        }
    }  
    console.log(letterMinuscule) 
}
detectWord("UcUNFYGaFYFYGtNUH")
detectWord("bEEFGBuFBRrHgUHlNFYaYr")
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")

drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
]
function sortDrinkByPrice (drinksTab){
    drinksTab.sort(function (a, b){
        return a.price - b.price
    })
    console.log(drinksTab)
}
sortDrinkByPrice(drinks)

function animals (chickens, cows, pigs){
    const chicken = 2 
    const cow = 4
    const pig = 4
    chickens = chickens * chicken
    cows = cows* cow
    pigs = pigs*pig
    console.log(chickens + cows + pigs)
}

animals(2, 3, 5)
animals(1, 2, 3)
animals(5, 2, 8)

function profitableGamble (probability, price, pay){
    if(probability*price > pay){
        console.log(true)
    }else{
        console.log(false)
    }
}

profitableGamble(0.2, 50, 9)
profitableGamble(0.9, 1, 2)
profitableGamble(0.9, 3, 2)

function frames(images, minutes){
    let seconde = minutes*60
    console.log(images*seconde)
}
frames(1, 1)
frames(10, 1)
frames(10, 25)

function calculateFuel(distance){
    if(parseInt(distance) > 10 ){
        let initialFuel = 10*distance
        console.log(initialFuel)
    }else if(parseInt(distance) < 10 && parseInt(distance) > 0){
        console.log(100)
    }else if(parseInt(distance) < 0){
        console.log('The distance is not okay')
    }
}
calculateFuel(15)
calculateFuel(23.5)
calculateFuel(3)
calculateFuel(-2)