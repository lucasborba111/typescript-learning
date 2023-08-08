function arredonda (valor: string): string;
function arredonda (valor: number): number;

function arredonda (valor: string | number): string | number {
    if (typeof valor === 'string') 
        return Math.ceil(parseInt(valor)).toString();
    else
        return Math.ceil(valor);
}