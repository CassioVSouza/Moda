let pNomes = ['White Blazer', 'Blue Jeans', 'Black Overcoat', 'Pink Dress', 'Black Bag', 'Heart Sunglasses', 'Yellow Coat', 'Black Top', 'Long Blue Skirt', 'Short Jeans'];
let pPreco = [329.99, 299.99, 399.99, 500.00, 149.99, 99.99, 299.99, 100.00, 249.00, 120.00];
let pIds = ['pNome1', 'pNome2', 'pNome3', 'pNome4', 'pNome5', 'pNome6', 'pNome7', 'pNome8', 'pNome9', 'pNome10']
let pIdsPreco = ['pPreco1', 'pPreco2', 'pPreco3', 'pPreco4', 'pPreco5', 'pPreco6', 'pPreco7', 'pPreco8', 'pPreco9', 'pPreco10']
let pImg = ["Assets/modelo1.jpg", "Assets/modelo2.jpg", "Assets/modelo3.jpg", "Assets/model4.jpg", "Assets/model5.jpg", "Assets/model6.jpg", "Assets/modelo7.jpeg", "Assets/modelo8.jpg", "Assets/modelo9.jpg", "Assets/modelo10.jpeg"]
let Store = true;
let Cart = false;
let CountCart = 0;
let pCurrent = 0;
let pPCurrent = 0;
let Total = 0;
let IndexImg = 0;
let TimeOutPopUp;

//Load Products Name
PreLoadP();

function ShowStore(params){
    if(Store == true){
        document.getElementById('imgP').src = pImg[params];
        document.getElementById('BuyP').style.display = 'block';
        document.getElementById('hide').style.display = 'none';
        document.getElementById('Nome').innerHTML = pNomes[params];
        document.getElementById('Preco').innerHTML = pPreco[params];
        pCurrent = pNomes[params];
        pPCurrent = pPreco[params];
        Store = false;
    }else{
        document.getElementById('BuyP').style.display = 'none';
        document.getElementById('hide').style.display = 'block';
        Store = true;
    }
}

function Bought(){
    for(var i = 0; i < CountCart; i++){
        document.getElementById('pCarts').remove();
        document.getElementById('pCarts').remove();
    }
    Total = 0;
    CountCart = 0;
    TimeOutPopUp = setTimeout(PopUp, 3000);
    Cart = false;
    document.getElementById('PopUp').style.display = 'block'
    document.getElementById('Total').innerHTML = '';
    document.getElementById('CountCart').innerHTML = CountCart;
    document.getElementById('Carrinho').style.display = 'none';
}
function PopUp(){
    document.getElementById('PopUp').style.display = 'none'
}

function ChangeImgMore(){
    if(IndexImg >= 4){
        IndexImg = -1;
    }    
    IndexImg += 1;
    document.getElementById('ChangeImg').src = pImg[IndexImg];
}
function ChangeImgLess(){
    if(IndexImg <= 0){
        IndexImg = 5;
    }    
    IndexImg -= 1;
    document.getElementById('ChangeImg').src = pImg[IndexImg];
}


function ShowCart(){
    if(Cart == false){
        document.getElementById('Carrinho').style.display = 'block';
        Cart = true;
    }else{
        document.getElementById('Carrinho').style.display = 'none';
        Cart = false;
    }
}

function Buy(){
    var Product = document.createElement('p');
    var Lines = document.createElement('hr');
    Product.innerHTML = pCurrent + ' | ' + `R$${pPCurrent}`;
    Total = Total + pPCurrent;
    CountCart += 1;
    document.getElementById('InsideCart').appendChild(Product);
    document.getElementById('InsideCart').appendChild(Lines);
    document.getElementById('CountCart').innerHTML = CountCart;
    document.getElementById('Total').innerHTML = `R$${Total.toFixed(2)}`;
    Product.setAttribute('id', 'pCarts');
    Lines.setAttribute('id', 'pCarts');
}

function PreLoadP(){
    for(var i=0; i < 100; i++){
        document.getElementById(pIds[i]).addEventListener('load', Load(i));
    }
}

function Load(params){
    document.getElementById(pIds[params]).innerHTML = pNomes[params];
    document.getElementById(pIdsPreco[params]).innerHTML = pPreco[params];
    document.getElementById('CountCart').innerHTML = CountCart;
}
//End of Load
