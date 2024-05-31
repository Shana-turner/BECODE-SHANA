//Création des 9 divs//
const board = document.querySelector("div");
board.innerHTML = '<div class="cell" id="un"></div><div class="cell" id="deux"></div><div class="cell" id="trois"></div><div class="cell " id="quatre"></div><div class="cell " id="cinq"></div><div class="cell " id="six"></div><div class="cell " id="sept"></div><div class="cell " id="huit"></div><div class="cell " id="neuf"></div>';
let cell1 = document.getElementById("un");
let cell2 = document.getElementById("deux");
let cell3 = document.getElementById("trois");
let cell4 = document.getElementById("quatre");
let cell5 = document.getElementById("cinq");
let cell6 = document.getElementById("six");
let cell7 = document.getElementById("sept");
let cell8 = document.getElementById("huit");
let cell9 = document.getElementById("neuf");


//Combinaisons gagnantes//
const winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

//Tableaux choix des joueurs//
let played1 = [];
let played2 =[];

//Variables jeux//
const X_TEXT = "X";
const O_TEXT = "O";
let currentPlayer = O_TEXT;

//Changement de player//
function changePlayer(cell) {
    if (currentPlayer == X_TEXT) {
        currentPlayer = O_TEXT; 
        cell.innerHTML =  O_TEXT;
    } else {
        currentPlayer = X_TEXT;
        cell.innerHTML = X_TEXT;
    }
}

//Case vide ou rempli//
function vide(cell){
    if(cell.innerHTML === "X" || cell.innerHTML === "O"){
        cell.innerHTML;
    }else{
        changePlayer(cell);
    }
}

//Enregistrer le jeu dans tableaux//
function gameLoad(nb){
    if(currentPlayer == X_TEXT){
        played1.push(nb);
    }else{
        played2.push(nb);
    }
}

//Game//

board.addEventListener('click', (e)=>{
    if(e.target.matches("#un")){
        vide(cell1);
        gameLoad(1)
    }
    if(e.target.matches("#deux")){
        vide(cell2);
        gameLoad(2)
    }
    if(e.target.matches("#trois")){
        vide(cell3);
        gameLoad(3)
    }
    if(e.target.matches("#quatre")){
        vide(cell4);
        gameLoad(4)
    }
    if(e.target.matches("#cinq")){
        vide(cell5);
        gameLoad(5)
    }
    if(e.target.matches("#six")){
        vide(cell6);
        gameLoad(6)
    }
    if(e.target.matches("#sept")){
        vide(cell7);
        gameLoad(7)
    }
    if(e.target.matches("#huit")){
        vide(cell8);
        gameLoad(8)
    }
    if(e.target.matches("#neuf")){
        vide(cell9);
        gameLoad(9)
    }
    console.log(played1)
    console.log(played2)
});


//Bouton Restart//
const restart = document.querySelector("button");
restart.addEventListener("click", ()=>{
    cell1.innerHTML = " ";
    cell2.innerHTML = " ";
    cell3.innerHTML = " ";
    cell4.innerHTML = " ";
    cell5.innerHTML = " ";
    cell6.innerHTML = " ";
    cell7.innerHTML = " ";
    cell8.innerHTML = " ";
    cell9.innerHTML = " ";
});


//Savoir qui gagne//
