"use strict";
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
;
function buscaLivro(nome) {
    if (nome === 'Clean code book')
        return new Produto(nome, 200);
    else
        throw ('Livro não encontrado');
}
const livro = buscaLivro('Clean code book');
if (livro instanceof Produto) {
    console.log(livro.nome);
}
