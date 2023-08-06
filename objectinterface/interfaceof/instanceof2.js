"use strict";
/* Classe instanciando classse e verificando */
class Categoria {
    id;
    nome;
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}
class Jogo extends Categoria {
    preco;
    constructor(id, nome, preco) {
        super(id, nome);
        this.preco = preco;
    }
}
console.log(new Jogo(1, "Assassin's cred", 170) instanceof Categoria);
