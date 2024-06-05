const openMenu = document.querySelector(".open-menu");
const menu = document.querySelector("ul");
const closeMenu = document.getElementById("closeBtn");

openMenu.addEventListener('click', ()=>{
    menu.style.right= "0px";
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
})

closeMenu.addEventListener('click', ()=>{
    menu.style.right= "-100%";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
})