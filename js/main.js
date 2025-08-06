// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Função principal de inicialização
function initializeApp() {
    setupEventListeners();
    renderProducts();
    updateCartUI();
    setupSmoothScrolling();
    setupMobileMenu();
    setupModals();
    setupFilters();
    setupSearch();
    setupQuantityControls();
}

// Configurar event listeners
function setupEventListeners() {
    // Botão do carrinho
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartModal);
    }

    // Botão de fechar carrinho
    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', closeCartModal);
    }

    // Botão de finalizar compra
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Botão CTA do hero
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Fechar modais clicando fora
    window.addEventListener('click', function(e) {
        const cartModal = document.getElementById('cartModal');
        const productModal = document.getElementById('productModal');
        
        if (e.target === cartModal) {
            closeCartModal();
        }
        
        if (e.target === productModal) {
            closeProductModal();
        }
    });

    // Tecla ESC para fechar modais
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCartModal();
            closeProductModal();
        }
    });
}

// Configurar navegação suave
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Fechar menu mobile se estiver aberto
            closeMobileMenu();
        });
    });
}

// Configurar menu mobile
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Alterar ícone
            const icon = this.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
}

// Fechar menu mobile
function closeMobileMenu() {
    const nav = document.getElementById('nav');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        
        const icon = mobileMenuToggle.querySelector('i');
        icon.className = 'fas fa-bars';
    }
}

// Configurar modais
function setupModals() {
    // Modal do produto
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', closeProductModal);
    }

    // Botão adicionar ao carrinho no modal
    const addToCartModal = document.getElementById('addToCartModal');
    if (addToCartModal) {
        addToCartModal.addEventListener('click', addToCartFromModal);
    }
}

// Configurar filtros de produtos
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar produtos
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });

    // Filtros por categoria (cards de categoria)
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Atualizar filtros
            filterBtns.forEach(btn => btn.classList.remove('active'));
            const targetBtn = document.querySelector(`[data-filter="${category}"]`);
            if (targetBtn) {
                targetBtn.classList.add('active');
            }
            
            // Filtrar produtos e rolar para seção
            filterProducts(category);
            document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Configurar busca
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        // Busca ao clicar no botão
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                searchProducts(searchTerm);
                
                // Rolar para produtos
                document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
                
                // Resetar filtros
                const filterBtns = document.querySelectorAll('.filter-btn');
                filterBtns.forEach(btn => btn.classList.remove('active'));
                document.querySelector('[data-filter="all"]').classList.add('active');
            }
        });
        
        // Busca ao pressionar Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
        
        // Busca em tempo real (opcional)
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            
            searchTimeout = setTimeout(() => {
                const searchTerm = this.value.trim();
                if (searchTerm.length >= 3) {
                    searchProducts(searchTerm);
                } else if (searchTerm.length === 0) {
                    renderProducts();
                }
            }, 500);
        });
    }
}

// Configurar controles de quantidade
function setupQuantityControls() {
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantity');
    
    if (decreaseBtn && increaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
        
        increaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
        
        // Validar entrada manual
        quantityInput.addEventListener('input', function() {
            const value = parseInt(this.value);
            if (isNaN(value) || value < 1) {
                this.value = 1;
            }
        });
    }
}

// Função para destacar elementos durante scroll
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem ser animados
    const animatedElements = document.querySelectorAll('.category-card, .product-card, .feature');
    animatedElements.forEach(el => observer.observe(el));
}

// Função para mostrar loading
function showLoading() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = '<div class="loading">Carregando produtos...</div>';
    }
}

// Função para scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adicionar botão de voltar ao topo
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.addEventListener('click', scrollToTop);
    
    document.body.appendChild(scrollBtn);
    
    // Mostrar/esconder botão baseado no scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
}

// Função para detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Função para otimizar performance em mobile
function optimizeForMobile() {
    if (isMobile()) {
        // Reduzir animações em dispositivos móveis
        document.body.classList.add('mobile-optimized');
    }
}

// Inicializar efeitos adicionais após carregamento completo
window.addEventListener('load', function() {
    setupScrollEffects();
    addScrollToTopButton();
    optimizeForMobile();
});

// Redimensionamento da janela
window.addEventListener('resize', function() {
    closeMobileMenu();
    optimizeForMobile();
});

// Exportar funções úteis
window.scrollToTop = scrollToTop;
window.isMobile = isMobile;

