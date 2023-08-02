class Produto {
	nome: string;
	preco: number;
	constructor (nome: string, preco: number) {
		this.nome = nome;
		this.preco = preco;
	}
};

function buscaLivro (nome: string) {
	if (nome === 'Clean code book') return new Produto(nome, 200);
	else throw('Livro não encontrado');
}

const livro = buscaLivro('Clean code book');

if (livro instanceof Produto) {
	console.log(livro.nome);
}
