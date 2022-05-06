class produtos{
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar(){
        const produtosobj = this.lerDados()

        this.adicionarnoArray(produtosobj);
    }

    lerDados(){
        let produtosobj = {};

        produtosobj.id = this.id;
        produtosobj.nomeProduto = document.getElementById("produto").value;
        produtosobj.valor = document.getElementById("valor").value;

        produtosobj.id = this.id++;

        return produtosobj
    }

    adicionarnoArray(itemProduto){
        this.arrayProdutos.push(itemProduto);
        console.log(this.arrayProdutos)
    }
    
}

var chamar = new produtos();

const cancelar = document.getElementById("cancelar");