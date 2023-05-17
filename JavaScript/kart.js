menucarrinho = false;

function kart(){
    var carrinho = document.querySelector('section#carrinho');
    if(menucarrinho == false){
        carrinho.style.display = 'block';
        menucarrinho = true;
    }else{
        carrinho.style.display = 'none';
        menucarrinho = false;
    }
}

function comprar(){
    var textocompra = document.createElement('p');
    textocompra.innerHTML = 'Lista de compras';
    document.querySelector('div#lista').appendChild(textocompra);
}