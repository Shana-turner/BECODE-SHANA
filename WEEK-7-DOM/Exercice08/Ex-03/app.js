const generator = document.querySelector('button');
const background = document.querySelector('body');
let colorName = document.querySelector('h1');


generator.style.textTransform = "Uppercase";
generator.style.backgroundColor = "white";
generator.style.borderRadius = "4px"

function colorGenerator() {
    let color = `rgb(${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)} )`
    colorName.innerHTML = color;
    background.style.backgroundColor = color;
}

    generator.addEventListener("click", colorGenerator)
