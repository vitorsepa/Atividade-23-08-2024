let produtos = [];


function adicionarProduto(nome, preco, quantidade) {
    
    if (!nome || preco <= 0 || quantidade <= 0) {
        console.log("Erro: Todos os campos devem ser preenchidos e preço e quantidade devem ser maiores que 0.");
        return;
    }


    let produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    
    produtos.push(produto);
    console.log("Produto adicionado com sucesso!");
}


function listarProdutos() {
    console.log("Produtos cadastrados:");
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}`);
    });
}


function calcularValorEstoque() {
    let valorTotal = 0;
    produtos.forEach(produto => {
        valorTotal += produto.preco * produto.quantidade;
    });
    console.log(`Valor total em estoque: R$${valorTotal.toFixed(2)}`);
}


adicionarProduto("Produto A", 10.5, 3);
adicionarProduto("Produto B", 20, 5);
listarProdutos();
calcularValorEstoque();