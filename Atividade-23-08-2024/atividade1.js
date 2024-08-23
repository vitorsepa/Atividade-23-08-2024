// array vazio para armazenamento
const produtos = [];

// adiciona um novo produto ao array
function adicionarProduto(nome, preco, quantidade) {
    if (!nome || preco <= 0 || quantidade <= 0) {
        console.error("Erro: Preencha todos os campos corretamente.");
        return;
    }

    const novoProduto = {
        nome,
        preco,
        quantidade
    };

    produtos.push(novoProduto);
    console.log(`Produto "${nome}" adicionado com sucesso!`);
}

// lista os produtos
function listarProdutos() {
    console.log("Produtos cadastrados:");
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)} (${produto.quantidade} unidades)`);
    });
}

// funçãao para calcular o valor do estoque
function calcularValorEstoque() {
    const valorTotal = produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
    console.log(`Valor total em estoque: R$ ${valorTotal.toFixed(2)}`);
}

adicionarProduto("Camiseta", 29.99, 50);
adicionarProduto("Calça Jeans", 79.90, 30);
listarProdutos();
calcularValorEstoque();