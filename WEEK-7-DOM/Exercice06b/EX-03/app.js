const list = document.querySelectorAll('li');
console.log(list)
for(let i = 0; i < list.length; i++){
    list[i].style.backgroundColor = "cyan";
}
const highLight = document.querySelectorAll(".highlight");
console.log(highLight)
for(let i =0; i < highLight.length; i++){
    highLight[i].style.backgroundColor ="white";
}
