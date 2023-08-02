/* Classe instanciando classse e verificando */
class Categoria {
    id: number;
    nome: string;

    constructor (id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}
class Jogo extends Categoria {
    preco: number;
    constructor (id: number, nome: string, preco: number) {
        super(id, nome);
        this.preco = preco;
    }
}

console.log(new Jogo(1, "Assassin's cred", 170) instanceof Categoria)
