const openBtn = document.getElementById("openBtn");
const modal = document.getElementsByClassName("modal")[0];
const supperposition = document.getElementsByClassName("supperposition")[0];
const closeBtn = document.querySelector("span");

openBtn.addEventListener('click', ()=>{
    modal.style.display = "block";
    supperposition.style.display = "block";
    supperposition.style.backgroundColor = "rgba(255, 255, 255, 0.416)";
})

closeBtn.addEventListener('click', ()=>{
    modal.style.display = "none";
    supperposition.style.display = "none";
    supperposition.style.backgroundColor = "transparent";
})

supperposition.addEventListener('click', ()=>{
    modal.style.display = "none";
    supperposition.style.display = "none";
    supperposition.style.backgroundColor = "transparent";
})




