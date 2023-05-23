let register = false;
let email = '';
let password = '';

document.getElementById('register').addEventListener('click', ShowRegister);
document.getElementById('login').addEventListener('click', ShowLogin);
document.getElementById('ConfirmRegister').addEventListener('click', RegisterAction);
document.getElementById('ConfirmLogin').addEventListener('click', LoginAction);

function ShowRegister(){
        document.getElementById("container-login").style.display = "none";
        document.getElementById("container-register").style.display = "block";
        register = true;
}

function ShowLogin(){
        document.getElementById("container-login").style.display = "Block";
        document.getElementById("container-register").style.display = "None";
        register = false;
}

function RegisterAction(){
       var passwordT = document.getElementById("inputpassword");
       var passwordC = document.getElementById("ConfirmP");
       if(passwordT.value == passwordC.value){
        email = document.getElementById("emailinput").value;
        password = document.getElementById("inputpassword").value;
        document.getElementById("container-login").style.display = "Block";
        document.getElementById("container-register").style.display = "None";
        register = false;
       }else{
        alert("Passwords do not match");
       }
}

function LoginAction(){
        var passwordT = document.getElementById("PasswordT");
        var emailT = document.getElementById("EmailT");
        if(passwordT.value == password && emailT.value == email){
                window.location.href = "loja.html";
        }else{
                alert("Email or password is incorrect");
        }
}