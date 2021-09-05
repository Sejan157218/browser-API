
const displayLocalStorge = ()=>{
    const cart = getCart();
    for (const name in cart){
        addItem(name);
    }  
}
const additem = ()=>{
    const inputItem = document.getElementById('input');
    const inputValue = inputItem.value;
    if(!inputValue){
        return;
    }
    addItem(inputValue);
    addProduct(inputValue);
    inputItem.value = '';
}

const addItem = name =>{
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = ()=>{
    const cart = localStorage.getItem('cart');
    let cartobj;
    if(cart){
        cartobj = JSON.parse(cart);
    }
    else{
        cartobj ={};
    }
    return cartobj;
}

const addProduct = name=>{
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name] + 1;;
    }
    else{
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

displayLocalStorge();


const placeOrder=()=>{
    document.getElementById('ul').textContent = '';
    localStorage.removeItem('cart');
}