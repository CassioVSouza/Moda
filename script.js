//eventlisteners
document.querySelector('input#botaologin').addEventListener('click', verificar, false)
document.querySelector('input#botaoregistro').addEventListener('click', registrar, false)
document.querySelector('a#jatenhoconta').addEventListener('click', registrar, false)
//registros
var dados = {nome:document.querySelector('input#nomeregistro'), senha:document.querySelector('input#senharegistro')}
//função login
function verificar(){
    var nome = document.querySelector('input#nome')
    var senha = document.querySelector('input#senha')
    var erro = document.querySelector('p#erro')
    if(nome.value == nomeregistro.value && senha.value == senharegistro.value){
        location.href = 'index.html'
    }else{
        erro.innerHTML = 'Seu nome ou senha estão errados!'
    }
}
//função registro
function registrar(){
    var login = document.getElementById('loginpag')
    var register = document.getElementById('registerpag')
    register.style.display = 'none'
    login.style.display = 'block'
}
