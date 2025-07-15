document.addEventListener('DOMContentLoaded', () => {

    // list of all the products
    const products = [
        { id: 1, name: "Color pencils", price: 25.00, image: "https://images.unsplash.com/photo-1627873828998-50b7aeec7ffe?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 2, name: "Stationery supplies Bag", price: 149.99, image: "https://images.unsplash.com/photo-1609126788187-323a73f38a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVuY2lsc3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: 3, name: "Pen Holder", price: 89.99, image: "https://images.unsplash.com/photo-1600926565634-ff972dfb33a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlbmNpbHN8ZW58MHx8MHx8fDA%3D" },
        { id: 4, name: "Jute basket", price: 350.00, image: "https://plus.unsplash.com/premium_photo-1664105111034-33e24dc90a78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlbmNpbHN8ZW58MHx8MHx8fDA%3D" },
        { id: 5, name: "Graphite pencils", price: 20.00, image: "https://images.unsplash.com/photo-1565359184520-fcff70f99c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVuY2lsc3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: 6, name: "Pack of 4 Journals", price: 500.50, image: "https://images.unsplash.com/photo-1601001435957-74f0958a93fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXRpb25lcnl8ZW58MHx8MHx8fDA%3D" },
        { id: 7, name: "Paper Clips", price: 50.00, image: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2a45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8" },
        { id: 8, name: "Acrylic Paints", price: 150.00, image: "https://images.unsplash.com/photo-1719361888629-0d73d1c1bf8f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ]

    const productDisplay = document.getElementById('products')
    const cartItemsDisplay = document.getElementById('cart')
    const emptyCartMessage = document.getElementById('empty-cart-message')
    const totalPriceDisplay = document.getElementById('total-price-display')
    const checkoutBtn = document.getElementById('checkout-btn')
    const cart = []

    function renderProducts() {
        products.forEach(product => {
            const productItem = document.createElement('div')
            productItem.classList.add('product-item')

            const addToCartBtn = document.createElement('button')
            addToCartBtn.classList.add('add-to-cart-btn')
            addToCartBtn.innerHTML = "Add to Cart"
            addToCartBtn.setAttribute("data-id", `${product.id}`)

            productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <span class="product-item-text">${product.name} - Rs.${product.price.toFixed(2)}</span>
            `

            productItem.appendChild(addToCartBtn)
            productDisplay.appendChild(productItem)


            addToCartBtn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'))
                const product = products.find(p => p.id === productId)

                addToCart(product)
            })
        })
    }
    renderProducts();

    function addToCart(product) {
        cart.push(product)

        renderCart()
    }

    function renderCart() {
        cartItemsDisplay.innerHTML = ""
        let totalPrice = 0
        totalPriceDisplay.innerHTML = ""

        if (cart.length > 0) {

            cart.forEach(item => {
                totalPrice += item.price

                const cartItem = document.createElement('div')
                cartItem.classList.add('cart-item')

                cartItem.innerHTML = `
                <span>${item.name} - Rs.${item.price.toFixed(2)}</span>
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                `

                cartItemsDisplay.appendChild(cartItem)
            })
            totalPriceDisplay.innerHTML = `Total Price: <br>Rs. ${totalPrice.toFixed(2)}`
        } else {
            emptyCartMessage.classList.remove('hidden')
        }
    }

    checkoutBtn.addEventListener('click', () => {
        cart.length = 0;

        renderCart()
        alert('Checkout Successful')
        totalPriceDisplay.innerHTML = ''
        cartItemsDisplay.innerHTML = 'Your Shopping Cart is empty.'
    })

})