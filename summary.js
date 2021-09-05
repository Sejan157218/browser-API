
const additem =()=>{
    const inputId = document.getElementById('input');
    const inputValue = inputId.value;
    // addItem(inputValue);
    addLocalStorage(inputValue);
    inputId.value = '';
}

const addItem = name =>{
    const cart = getCart();
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li)

}

const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartobj;
    if (cart){
        cartobj =JSON.parse(cart);
    }
    else{
        cartobj = {}
    }
    return cartobj;
}

const addLocalStorage = name =>{
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name] +1;
    }
    else{
        cart[name] = 1;
        addItem(name);
        
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}

const displayItem = ()=>{
    const cart = getCart();
    for(const name in cart){
        addItem(name);
    }
}

displayItem();

const placeOrder =()=>{
    document.getElementById('ul').textContent = '';
    localStorage.removeItem('cart');
    alert('Thanks for Place order')
}