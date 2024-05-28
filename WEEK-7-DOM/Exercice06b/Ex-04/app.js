const container = document.querySelector(".container");
for(let i = 1; i < 151; i++){
    container.innerHTML += `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"/>`
}
const title = document.querySelector("h1");
title.innerHTML = '<img src="logo.png" alt="logo" width="200px"/>';
title.innerHTML += '<br>"Everybody makes a wrong turn once in a while." - Ash Ketchum';