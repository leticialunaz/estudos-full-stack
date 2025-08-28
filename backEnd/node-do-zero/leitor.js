import { writeFileSync, readFileSync } from 'node:fs'


// criando e escrevendo dentro de um arquivo:
writeFileSync('teste1.txt', 'esse é o texto que vai de teste')

const conteudo = readFileSync('teste1.txt', 'utf-8')

//const conteudo = readFileSync('texto-de-teste.txt', 'utf-8')

console.log(conteudo)
