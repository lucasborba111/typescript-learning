function normalizar (valor: string[]): string[];
function normalizar (valor: string): string;
//function overloading lets you define functions that can be called in multiple ways
function normalizar(valor: string | string[]): string | string[]  {
    if (typeof valor === 'string') return valor.trim().toLowerCase();
    return valor.map((item) => item.trim().toLowerCase());
}

console.log(normalizar("  Product  "));
console.log(normalizar(["  Product  ", "Test  "]));
