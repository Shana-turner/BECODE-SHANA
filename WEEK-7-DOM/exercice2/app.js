const firstLi = document.querySelector("li.list-item");
const myList = document.querySelector("ul");
const myItem = document.createElement("li");
myItem.innerText = firstLi.innerText;
myList.innerHTML = '<li class="list-item">The Godfather</li><li class="list-item">Braveheart</li><li class="list-item">Casino</li><li class="list-item">Annie <span>Hall</span></li><li class="list-item">Goodfellas</li>';
myList.appendChild(myItem);
const span = document.querySelector("span");

myList.style.color = "purple";
myItem.style.color = "gold";
span.style.color = "red";


