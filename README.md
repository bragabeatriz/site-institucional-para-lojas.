# Casa & Lar - Loja Online de Utilidades Domésticas

Uma loja online moderna e responsiva especializada em utilidades domésticas e eletrodomésticos, desenvolvida com HTML5, CSS3 e JavaScript vanilla.

## 🚀 Funcionalidades

### ✨ Principais Recursos
- **Catálogo de Produtos**: Exibição organizada de produtos com imagens, preços e descrições
- **Carrinho de Compras**: Sistema completo de carrinho com persistência local
- **Sistema de Busca**: Busca em tempo real por nome e descrição dos produtos
- **Filtros por Categoria**: Filtragem dinâmica por categorias de produtos
- **Modal de Detalhes**: Visualização detalhada dos produtos com controle de quantidade
- **Design Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **Notificações**: Feedback visual para ações do usuário

### 🛒 Funcionalidades do Carrinho
- Adicionar/remover produtos
- Atualizar quantidades
- Cálculo automático de totais
- Persistência no localStorage
- Simulação de checkout

### 🔍 Sistema de Busca e Filtros
- Busca por nome do produto
- Busca por descrição
- Filtros por categoria (Utensílios, Eletrodomésticos, Organização, Limpeza)
- Busca em tempo real (3+ caracteres)

## 🎨 Design e Interface

### Paleta de Cores
- **Primária**: #2C3E50 (Azul escuro)
- **Secundária**: #E74C3C (Vermelho)
- **Accent**: #F39C12 (Laranja)
- **Neutros**: #ECF0F1 (Cinza claro), #FFFFFF (Branco)

### Tipografia
- **Títulos**: Poppins (Google Fonts)
- **Corpo**: Open Sans (Google Fonts)

### Características do Design
- Interface limpa e moderna
- Animações suaves e transições
- Hover effects interativos
- Micro-interações para melhor UX
- Acessibilidade otimizada

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

### Adaptações Mobile
- Menu hambúrguer
- Layout em coluna única
- Botões otimizados para toque
- Imagens responsivas
- Modais adaptados

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia

## 📁 Estrutura do Projeto

```
loja-online/
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos principais
├── js/
│   ├── main.js            # JavaScript principal
│   ├── products.js        # Dados e funções dos produtos
│   └── cart.js            # Funcionalidades do carrinho
├── images/                # Imagens dos produtos
│   ├── utensilios_*.jpg
│   ├── eletro_*.jpg
│   ├── geladeira_*.jpg|png
│   ├── microondas_*.jpg
│   └── liquidificador_*.jpg
├── assets/                # Ícones e recursos
│   ├── icon_cart.png
│   ├── icon_user.png
│   ├── icon_search.png
│   └── icon_menu.png
└── README.md              # Documentação
```

## 🚀 Como Usar

### Instalação
1. Faça o download ou clone o projeto
2. Abra o arquivo `index.html` em um navegador web
3. A loja estará pronta para uso!

### Navegação
- **Início**: Página principal com hero e categorias
- **Produtos**: Catálogo completo com filtros
- **Categorias**: Acesso rápido às categorias
- **Sobre**: Informações da empresa
- **Contato**: Informações de contato

### Funcionalidades Principais

#### Adicionar Produtos ao Carrinho
1. Navegue pelos produtos
2. Clique em "Ver Detalhes" para mais informações
3. Ajuste a quantidade desejada
4. Clique em "Adicionar ao Carrinho"

#### Gerenciar Carrinho
1. Clique no ícone do carrinho no header
2. Ajuste quantidades com os botões +/-
3. Remova itens com o ícone da lixeira
4. Finalize a compra com "Finalizar Compra"

#### Buscar Produtos
1. Digite no campo de busca no header
2. Pressione Enter ou clique na lupa
3. Os resultados serão filtrados automaticamente

#### Filtrar por Categoria
1. Clique nos botões de filtro na seção de produtos
2. Ou clique nos cards de categoria na página inicial

## 🎯 Produtos Disponíveis

### Utensílios de Cozinha
- Conjunto de Utensílios de Cozinha - R$ 89,90
- Kit de Utensílios Profissionais - R$ 129,90
- Conjunto de Panelas Antiaderente - R$ 199,90
- Kit Utensílios Gourmet - R$ 159,90

### Eletrodomésticos
- Conjunto de Eletrodomésticos Modernos - R$ 1.299,90
- Kit Eletrodomésticos Compactos - R$ 899,90
- Geladeira Frost Free 400L - R$ 1.899,90
- Geladeira Brastemp Inox 588L - R$ 2.499,90
- Micro-ondas Digital 30L - R$ 399,90
- Micro-ondas Mondial Branco - R$ 299,90
- Liquidificador Turbo 1400W - R$ 189,90
- Liquidificador Mondial Glass - R$ 149,90

### Organização
- Kit Organizadores Multiuso - R$ 79,90
- Organizador de Gavetas Modular - R$ 49,90
- Cestas Organizadoras Decorativas - R$ 89,90

### Limpeza
- Aspirador de Pó Vertical - R$ 299,90
- Kit Limpeza Completo - R$ 129,90
- Aspirador Robô Inteligente - R$ 899,90

## 🔧 Personalização

### Adicionar Novos Produtos
1. Abra o arquivo `js/products.js`
2. Adicione um novo objeto ao array `products`
3. Inclua a imagem correspondente na pasta `images/`

### Modificar Cores
1. Abra o arquivo `css/style.css`
2. Modifique as variáveis CSS no `:root`
3. As cores serão aplicadas automaticamente

### Adicionar Categorias
1. Adicione a nova categoria no HTML
2. Atualize os filtros em `js/main.js`
3. Inclua produtos com a nova categoria

## 📱 Compatibilidade

### Navegadores Suportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Dispositivos Testados
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## 🚀 Performance

### Otimizações Implementadas
- Imagens otimizadas
- CSS minificado
- JavaScript modular
- Lazy loading para imagens
- Animações otimizadas para mobile

### Métricas
- Tempo de carregamento: < 2s
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s

## ♿ Acessibilidade

### Recursos Implementados
- Navegação por teclado
- Contraste adequado
- Textos alternativos para imagens
- Foco visível
- Estrutura semântica
- Suporte a leitores de tela

## 🔒 Segurança

### Medidas Implementadas
- Validação de entrada
- Sanitização de dados
- Prevenção de XSS
- Armazenamento seguro local

## 📈 Futuras Melhorias

### Funcionalidades Planejadas
- Sistema de login/cadastro
- Integração com gateway de pagamento
- Sistema de avaliações
- Wishlist
- Comparação de produtos
- Chat de atendimento
- Sistema de cupons
- Histórico de pedidos

### Melhorias Técnicas
- PWA (Progressive Web App)
- Service Workers
- Cache offline
- Notificações push
- Integração com APIs de frete

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto:
- Email: contato@casaelar.com.br
- Telefone: (11) 1234-5678

## 📄 Licença

Este projeto foi desenvolvido como demonstração de uma loja online moderna e responsiva. Todos os direitos reservados.

---

**Casa & Lar** - Transformando sua casa com qualidade e praticidade! 🏠✨

