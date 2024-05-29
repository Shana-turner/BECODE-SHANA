const h1 = document.querySelector('h1');
const scoreOne = document.querySelector('.scoreOne');
const scoreTwo = document.querySelector('.scoreTwo');
const container = document.querySelector('.container');
const end = document.querySelector(".end");
const containerBtn = document.querySelector('.btnContainer');

function Reset(){
    scoreOne.innerHTML = 0;
    scoreTwo.innerHTML = 0;
    scoreOne.style.color = "black";
    scoreTwo.style.color = "black";
    end.style.display = "none";
}
const myFunc = (e) => {
    if(parseInt(scoreOne.innerHTML)+parseInt(scoreTwo.innerHTML) < 5){
        if(e.target.matches("#one")){
            scoreOne.innerHTML ++;
        }
        if(e.target.matches("#two")){
            scoreTwo.innerHTML ++;
        } 
        if(parseInt(scoreOne.innerHTML)+parseInt(scoreTwo.innerHTML) === 5){
            end.style.display = "block";
        }
        if(parseInt(scoreOne.innerHTML) < parseInt(scoreTwo.innerHTML)){
            scoreOne.style.color = "red";
            scoreTwo.style.color = "green";
        }
        if(parseInt(scoreOne.innerHTML) > parseInt(scoreTwo.innerHTML)){
            scoreOne.style.color = "green";
            scoreTwo.style.color = "red";
        } 
    }
    if(e.target.matches(".reset")){
        addEventListener("click", Reset())
    }
};


container.addEventListener("click", myFunc);












