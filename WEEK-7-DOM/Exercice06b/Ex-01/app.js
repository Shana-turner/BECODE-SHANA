
let bold = document.querySelector("b");
bold.style.color = "red";
bold.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("body").style.backgroundColor = "beige";
bold.parentElement.parentElement.parentElement.querySelector("div").style.backgroundColor = "darkblue";
bold.parentElement.parentElement.parentElement.querySelector("div").style.color = "white";
bold.parentElement.parentElement.querySelector("a").style.color = "pink"; 
lien = bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll("a");
for(let i = 0; i < lien.length; i++){
    lien[i].style.color = "orange";
} 
const lili = bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll("li");
for( let i = 0; i < lili.length; i++){
    lili[i].style.color = "green";
} 





