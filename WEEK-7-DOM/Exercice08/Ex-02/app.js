const btn = document.querySelectorAll('button');
const paragraphe = document.querySelectorAll('.hidden')

for(let i = 0; i < btn.length; i++){
        console.log(btn[i].outerText)
        btn[i].addEventListener("click", () => {
            if(btn[i].outerText === "Open tab"){
                paragraphe[i].style.display = "block";
                btn[i].innerHTML = "Close tab";
            }
            else if(btn[i].outerText === "Close tab"){
                paragraphe[i].style.display = "none";
                btn[i].innerHTML = "Open tab";
            }
        })
        

}