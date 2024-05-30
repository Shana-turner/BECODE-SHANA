const Username = document.getElementById("username");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const RePassword = document.getElementById("passwordConfirm");
const submit = document.getElementById("submit");

function validerUsername(username){
    const message = document.getElementById("msg-user");
        if(username.length<5 ){
            message.style.display = "block";
            message.innerHTML = "Le nom est trop court";
        }
        if(username.length > 10){
            message.style.display = "block";
            message.innerHTML = "Le nom est trop long";
        }
        if(username.length>=5 && username.length<=10){
            console.log(`Nom d'utilisateur : ${username}`);
        }

}
function validerEmail(email){
    const message = document.getElementById("msg-mail");
    let emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegex.test(email)){
        message.style.display = "block";
        message.innerHTML="L'email n'est pas corret";
    }else{
        console.log(`Email : ${email}`);
    }
}
function validerMotDePasse(password){
    const message =document.getElementById("msg-code");
    if(password.length < 8){
        message.style.display = "block";
        message.innerHTML="Le mot de passe est trop court";
    }
    if(password.length > 15){
        message.style.display = "block";
        message.innerHTML="Le mot de passe est trop long";
    }
    if(password.length >=8 && password.length <=15){
        console.log(`Mot de passe : ${password}`)
    }
}
function confirmationMotDePasse(password, password2){
    const message = document.getElementById("msg-codeConfirm");
    if(password2 !== password){
        message.style.display = "block";
        message.innerHTML="Le mot de passe n'est pas correct";
    }else{
        console.log(`Mot de passe': ${password2}`)
    }
}



submit.addEventListener('click', ()=>{
    validerUsername(Username.value);
    validerEmail(Email.value);
    validerMotDePasse(Password.value);
    confirmationMotDePasse(Password.value, RePassword.value);
});