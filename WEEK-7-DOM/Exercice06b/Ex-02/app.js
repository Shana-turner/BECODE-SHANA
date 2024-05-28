const btn = document.querySelector(".container");
for (let i = 0; i <=100; i++){
    btn.innerHTML += `<button>Je suis le bouton ${i}</button>`
}
const title = document.querySelector("h1");
setTimeout(() => {
    title.innerHTML = 'There are a lot of buttons here !';
}, 2000);