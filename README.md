# Starting with Typescript
#### Tipagem dinâmica - Superconjunto de JavaScrip ;

⚠️ Os principais programas que executam javascript, não conseguem executar o TypeScript.
Por isso precisamos de um compilador para o typescript. ⚠️
> **Instalação...**
```
npm install -g typescript
```
> **Iniciar...**
```
tsc --init
```
> **tsconfig.json**
```
{
  "compilerOptions": {
    "target": "ESnext",
    "strict": true
  }
}
```
>**tsconfig.json**<br>
> Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.
```
{
  "compilerOptions": {
    "target": "ESNext",
    "strict": true, // já incluso no strict
    "strictNullChecks": true
  }
}
```
