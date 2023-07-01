 /* 
    Apenas exemplo de tipagem, embora o ts já identifique pela inferência com o valor atribuido 
    Ex:
*/
let livro: string = 'Clean Code';

/* 
    É possivel definir a tipagem com mais de uma possibilidade
    Ex:
*/ 
const tipo: string | boolean = 100 < 200 ? true : 'O valor é maior que 100...'

/* 
    Os parametros de uma função precisam ser determinados, o tipo any somente é aceito ao forçar 
    Ex: 
*/ 
function typeParams (nome: string, idade: number, anyType: any) {
    return [nome, idade];
};

/* 
    Passando parametro tipo objeto 
    Ex: 
*/
function verificaMaioridade (pessoa: { nome: string; idade: number; }) {
    return pessoa.idade > 17;
};

verificaMaioridade({ nome: 'Lucas', idade: 19 });
