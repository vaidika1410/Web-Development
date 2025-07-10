document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list")
    const cartItems = document.getElementById("cart-items")
    const emptyCartMessage = document.getElementById("empty-cart")
    const totalPriceDisplay = document.getElementById("cart-total")
    const totalPrice = document.getElementById("total-price")
    const checkoutBtn = document.getElementById("checkout-btn")

    const productItems = [
        { id: 1, name: 'Notebook', price: 45.99 },
        { id: 2, name: 'Ball Point Pen', price: 15.99 },
        { id: 3, name: 'Eraser', price: 75.99 },
    ]

    const cart = [];

    function renderProducts() {
        productItems.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add("product")
            productDiv.innerHTML = `
            <span>
            ${product.name} - $${product.price.toFixed(2)}
            </span>
            <button id="product-button" data-id="${product.id}">Add to cart</button>
            `
            productList.appendChild(productDiv);
        })

        productList.addEventListener("click", (e) => {
            if (e.target.tagName === 'BUTTON') {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const product = productItems.find(p => p.id === productId);
               
                addToCart(product);
            }
        })
    }
    renderProducts()
    
    function addToCart(product){
        cart.push(product);
        renderCart();
    }
    
    function renderCart(){
        let totalPrice = 0;

        if(cart.length > 0){
            totalPriceDisplay.classList.remove("hidden")
            emptyCartMessage.classList.add("hidden")
            checkoutBtn.classList.remove("hidden")

            const cartItem = document.createElement('div');
            cart.forEach((item, index) => {
                totalPrice += item.price;

                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                `
            })
            cartItems.appendChild(cartItem);
            totalPriceDisplay.textContent = `Total : $${totalPrice.toFixed(2)}`

        } else{
            emptyCartMessage.classList.remove("hidden")
            totalPriceDisplay.textContent = `$0.00`
            checkoutBtn.classList.add("hidden")
        }

    }

    checkoutBtn.addEventListener('click', () => {
        cart.length = 0
        emptyCartMessage.classList.remove("hidden")
        totalPriceDisplay.classList.add("hidden")
        alert("Checkout Successful")
        cartItems.innerHTML = ""
        renderCart()
    })
})