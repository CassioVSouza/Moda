let pNomes = ['Blazer Branco', 'Jeans Azul', 'Sobretudo Preto', 'Vestido Rosa'];
let pPreco = [329.99, 299.99, 399.99, 500.00];
let pIds = ['pNome1', 'pNome2', 'pNome3', 'pNome4',]
let pIdsPreco = ['pPreco1', 'pPreco2', 'pPreco3', 'pPreco4']

PreLoadP();

function PreLoadP(){
    for(var i=0; i < 100; i++){
        document.getElementById(pIds[i]).addEventListener('load', Load(i));
    }
}

function Load(params){
    document.getElementById(pIds[params]).innerHTML = pNomes[params];
    document.getElementById(pIdsPreco[params]).innerHTML = pPreco[params];
}