// Transformar em número com validação
function toNumber (numero: number|string) {
	const tipo = typeof numero;
	if (tipo === 'number') return numero; 
	if (tipo === 'string') return Number(numero);

	throw new Error('Tipagem incorreta');
}
console.log(toNumber('1'));
