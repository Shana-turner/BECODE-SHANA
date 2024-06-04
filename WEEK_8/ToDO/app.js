const newTask = document.querySelector("input");
const addBtn = document.getElementById("add");
const container = document.querySelector("div");


let taskArray = [ ];

if(!localStorage.getItem("Tâches")){
    localStorage.setItem("Tâches", JSON.stringify(taskArray));
}else{
    taskArray = JSON.parse(localStorage.getItem("Tâches"));
    
}

generationList();


addBtn.addEventListener('click', () =>{
    addTask();
} )

newTask.addEventListener("keyup", (event)=>{
    if(event.key === "Enter"){
        addTask();
        event.target.value = "";
    }
});

function addTask(){
    taskArray.push(newTask.value);
    const localTask = JSON.stringify(taskArray);
    console.log(localTask);
    localStorage.setItem("Tâches", localTask);
    generationList();
};


function generationList(){
    const takeTask = JSON.parse(localStorage.getItem("Tâches"));
    
    container.innerHTML = "";
    for(let i =0; i<takeTask.length; i++){
        container.innerHTML += 
        `<div class="task"> 
            ${takeTask[i]}
        <button value="${i}" class="delete">Delete</button>
        </div>`;
    }
    document.querySelectorAll(".delete").forEach(element => element.addEventListener('click',deleteTask));
};



function deleteTask(e){
    let index = e.target.value;
    taskArray.splice(index,1);
    localStorage.setItem("Tâches", JSON.stringify(taskArray));
    generationList();
}





