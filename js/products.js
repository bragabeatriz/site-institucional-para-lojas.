// Dados dos produtos
const products = [
    // Utensílios de Cozinha
    {
        id: 1,
        name: "Conjunto de Utensílios de Cozinha",
        price: 89.90,
        category: "utensilios",
        image: "images/utensilios_1.jpg",
        description: "Conjunto completo com 12 peças de utensílios de cozinha em madeira e silicone. Inclui colheres, espátulas, escumadeira e muito mais.",
        featured: true
    },
    {
        id: 2,
        name: "Kit de Utensílios Profissionais",
        price: 129.90,
        category: "utensilios",
        image: "images/utensilios_2.jpg",
        description: "Kit profissional com utensílios de alta qualidade em aço inoxidável. Perfeito para chefs e amantes da culinária.",
        featured: true
    },
    {
        id: 3,
        name: "Conjunto de Panelas Antiaderente",
        price: 199.90,
        category: "utensilios",
        image: "images/utensilios_3.jpg",
        description: "Conjunto de 5 panelas com revestimento antiaderente e cabos ergonômicos. Ideal para cozinhar sem grudar.",
        featured: false
    },
    {
        id: 4,
        name: "Kit Utensílios Gourmet",
        price: 159.90,
        category: "utensilios",
        image: "images/utensilios_4.jpg",
        description: "Kit gourmet com utensílios especiais para preparos sofisticados. Inclui pinças, batedores e acessórios únicos.",
        featured: true
    },

    // Eletrodomésticos
    {
        id: 5,
        name: "Conjunto de Eletrodomésticos Modernos",
        price: 1299.90,
        category: "eletrodomesticos",
        image: "images/eletro_1.jpg",
        description: "Conjunto completo com os principais eletrodomésticos para sua cozinha. Design moderno e alta eficiência energética.",
        featured: true
    },
    {
        id: 6,
        name: "Kit Eletrodomésticos Compactos",
        price: 899.90,
        category: "eletrodomesticos",
        image: "images/eletro_2.jpg",
        description: "Conjunto de eletrodomésticos compactos perfeito para apartamentos pequenos. Inclui micro-ondas, liquidificador e mais.",
        featured: false
    },
    {
        id: 7,
        name: "Geladeira Frost Free 400L",
        price: 1899.90,
        category: "eletrodomesticos",
        image: "images/geladeira_1.jpg",
        description: "Geladeira duplex frost free com 400 litros de capacidade. Tecnologia inverter e design elegante.",
        featured: true
    },
    {
        id: 8,
        name: "Geladeira Brastemp Inox 588L",
        price: 2499.90,
        category: "eletrodomesticos",
        image: "images/geladeira_2.png",
        description: "Geladeira Brastemp inverse com 588 litros em aço inoxidável. Tecnologia avançada e máxima eficiência.",
        featured: true
    },
    {
        id: 9,
        name: "Micro-ondas Digital 30L",
        price: 399.90,
        category: "eletrodomesticos",
        image: "images/microondas_1.jpg",
        description: "Micro-ondas digital com 30 litros de capacidade. Painel touch e 10 níveis de potência.",
        featured: false
    },
    {
        id: 10,
        name: "Micro-ondas Mondial Branco",
        price: 299.90,
        category: "eletrodomesticos",
        image: "images/microondas_2.jpg",
        description: "Micro-ondas Mondial 20 litros em cor branca. Compacto e eficiente para o dia a dia.",
        featured: false
    },
    {
        id: 11,
        name: "Liquidificador Turbo 1400W",
        price: 189.90,
        category: "eletrodomesticos",
        image: "images/liquidificador_1.jpg",
        description: "Liquidificador com motor turbo de 1400W. Jarra de vidro resistente e lâminas em aço inoxidável.",
        featured: true
    },
    {
        id: 12,
        name: "Liquidificador Mondial Glass",
        price: 149.90,
        category: "eletrodomesticos",
        image: "images/liquidificador_2.jpg",
        description: "Liquidificador Mondial com jarra de vidro e design moderno. Potência de 1000W e 3 velocidades.",
        featured: false
    },

    // Organização
    {
        id: 13,
        name: "Kit Organizadores Multiuso",
        price: 79.90,
        category: "organizacao",
        image: "images/utensilios_1.jpg",
        description: "Conjunto de organizadores multiuso para gavetas, armários e despensa. Material resistente e durável.",
        featured: false
    },
    {
        id: 14,
        name: "Organizador de Gavetas Modular",
        price: 49.90,
        category: "organizacao",
        image: "images/utensilios_2.jpg",
        description: "Sistema modular de organização para gavetas. Divisórias ajustáveis e encaixe perfeito.",
        featured: false
    },
    {
        id: 15,
        name: "Cestas Organizadoras Decorativas",
        price: 89.90,
        category: "organizacao",
        image: "images/utensilios_3.jpg",
        description: "Conjunto de cestas decorativas para organização. Design elegante e funcional para qualquer ambiente.",
        featured: false
    },

    // Limpeza
    {
        id: 16,
        name: "Aspirador de Pó Vertical",
        price: 299.90,
        category: "limpeza",
        image: "images/eletro_1.jpg",
        description: "Aspirador de pó vertical sem fio. Bateria de longa duração e filtro HEPA para máxima eficiência.",
        featured: false
    },
    {
        id: 17,
        name: "Kit Limpeza Completo",
        price: 129.90,
        category: "limpeza",
        image: "images/eletro_2.jpg",
        description: "Kit completo para limpeza doméstica. Inclui vassouras, rodos, baldes e produtos de limpeza.",
        featured: false
    },
    {
        id: 18,
        name: "Aspirador Robô Inteligente",
        price: 899.90,
        category: "limpeza",
        image: "images/geladeira_1.jpg",
        description: "Aspirador robô com navegação inteligente. Conectividade Wi-Fi e controle por aplicativo.",
        featured: true
    }
];

// Função para formatar preço
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Função para renderizar produtos
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.featured ? '<span class="featured-badge">Destaque</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">R$ ${formatPrice(product.price)}</p>
                <div class="product-actions">
                    <button class="view-product-btn" onclick="openProductModal(${product.id})">
                        <i class="fas fa-eye"></i>
                        Ver Detalhes
                    </button>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Adicionar
                    </button>
                </div>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

// Função para filtrar produtos
function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Função para buscar produtos
function searchProducts(searchTerm) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderProducts(filteredProducts);
}

// Função para obter produto por ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Função para abrir modal do produto
function openProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalProductImage');
    const modalName = document.getElementById('modalProductName');
    const modalPrice = document.getElementById('modalProductPrice');
    const modalDescription = document.getElementById('modalProductDescription');

    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalName.textContent = product.name;
    modalPrice.textContent = formatPrice(product.price);
    modalDescription.textContent = product.description;

    // Armazenar ID do produto no modal para uso posterior
    modal.setAttribute('data-product-id', productId);

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal do produto
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset quantity
    document.getElementById('quantity').value = 1;
}

// Exportar funções para uso global
window.renderProducts = renderProducts;
window.filterProducts = filterProducts;
window.searchProducts = searchProducts;
window.getProductById = getProductById;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;

