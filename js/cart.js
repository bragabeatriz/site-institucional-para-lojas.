// Carrinho de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para salvar carrinho no localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Função para adicionar produto ao carrinho
function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    updateCartUI();
    showCartNotification(`${product.name} adicionado ao carrinho!`);
}

// Função para remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Função para atualizar quantidade no carrinho
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartUI();
    }
}

// Função para calcular total do carrinho
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Função para obter quantidade total de itens
function getCartItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Função para atualizar interface do carrinho
function updateCartUI() {
    updateCartCount();
    updateCartModal();
}

// Função para atualizar contador do carrinho
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const itemCount = getCartItemCount();
        cartCount.textContent = itemCount;
        cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
    }
}

// Função para atualizar modal do carrinho
function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>Seu carrinho está vazio</p></div>';
        cartTotal.textContent = '0,00';
        return;
    }

    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">R$ ${formatPrice(item.price)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div class="cart-item-total">
                <span>R$ ${formatPrice(item.price * item.quantity)}</span>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = formatPrice(getCartTotal());
}

// Função para abrir modal do carrinho
function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updateCartModal();
}

// Função para fechar modal do carrinho
function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Função para limpar carrinho
function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

// Função para mostrar notificação do carrinho
function showCartNotification(message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Adicionar ao body
    document.body.appendChild(notification);
    
    // Mostrar notificação
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remover notificação após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Função para finalizar compra (simulação)
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = getCartTotal();
    const itemCount = getCartItemCount();
    
    const confirmMessage = `Finalizar compra?\n\nItens: ${itemCount}\nTotal: R$ ${formatPrice(total)}`;
    
    if (confirm(confirmMessage)) {
        alert('Compra realizada com sucesso!\n\nObrigado por escolher a Casa & Lar!');
        clearCart();
        closeCartModal();
    }
}

// Função para adicionar produto do modal
function addToCartFromModal() {
    const modal = document.getElementById('productModal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    const quantity = parseInt(document.getElementById('quantity').value);
    
    addToCart(productId, quantity);
    closeProductModal();
}

// Inicializar carrinho quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    updateCartUI();
});

// Exportar funções para uso global
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.openCartModal = openCartModal;
window.closeCartModal = closeCartModal;
window.clearCart = clearCart;
window.checkout = checkout;
window.addToCartFromModal = addToCartFromModal;

