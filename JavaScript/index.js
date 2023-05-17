let pNomes = ['White Blazer', 'Blue Jeans', 'Black Overcoat', 'Pink Dress', 'Black Bag', 'Heart Sunglasses', 'Yellow Coat', 'Black Top', 'Long Blue Skirt',];
let pPreco = [329.99, 299.99, 399.99, 500.00, 149.99, 99.99, 299.99, 100.00, 249.00,];
let pIds = ['pNome1', 'pNome2', 'pNome3', 'pNome4', 'pNome5', 'pNome6', 'pNome7', 'pNome8', 'pNome9']
let pIdsPreco = ['pPreco1', 'pPreco2', 'pPreco3', 'pPreco4', 'pPreco5', 'pPreco6', 'pPreco7', 'pPreco8', 'pPreco9']

Product(0);

function Product(numbers){
    document.getElementById('Nome').innerHTML = pNomes[numbers];
    document.getElementById('Preco').innerHTML = pPreco[numbers];
}