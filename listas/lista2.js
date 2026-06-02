// ---------- LISTA DE EXERCÍCIOS 2 ----------

// ---------- EXERCÍCIO 1 -----------
//Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
//laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
//a resposta for "sim".

/* 

const prompt = require('prompt-sync')();

let numero, repete;

do{

    numero = Number(prompt('Digite um número para saber sua tabuada: '));
    
    if( !(isNaN(numero) )){
    for(let i = 1; i <= 10; i++){
        console.log(i*numero);
    }

    }else{console.log(`Valor inválido! `)}

    repete = prompt('Você deseja repetir esse processo (para repetir digite sim)? : ');
}while(repete === 'sim')

*/

// ---------- EXERCÍCIO 2 -----------
//Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
//laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
//a resposta for "sim".

/* 

const prompt = require('prompt-sync')();

let contador = 0, numero = Number(prompt('Digite um número: '));

if( !(isNaN(numero)) && numero >= 0){

if(numero === 0){
    contador = 1;
}else{
    while(numero >= 1){
        numero = Math.floor(numero / 10);
        contador++;
    }
}console.log(`A quantidade de digitos do número é ${contador}`);

}else{console.log('Entrada de dados inválida!')}

*/

// ---------- EXERCÍCIO 3 -----------
//Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
//usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13...

/* 

const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite a quantidade de números da sequência de Fibonacci: '));

if(!isNaN(numero) && numero > 0){

    console.log('Sequência: ');
    
    let n1 = 1, n2 = 1;
    
    for(let i = 1; i <= numero; i++){
        if (i === 1 || i === 2){
            console.log(1);
        }else{
            let n3 = n1 + n2;
            console.log(n3);
            n1 = n2;
            n2 = n3;
        }
    }
}else{console.log('Entrada inválida!')}

*/


// ---------- EXERCÍCIO 4 -----------
//Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
//do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
//tentativas.

/* 

const prompt = require('prompt-sync')();

let senha = 'J@ques123', contador = 0, tentativa, acertou = false;

do{
    tentativa = prompt('Digite sua tentativa: ');
    if(senha === tentativa){
        acertou = true;
        break;
    }
    contador++
}while(contador < 3)

if(acertou){
    console.log('Parabéns por acertar o desafio!');
}else{
    console.log('Você não conseguiu acertar!')
}

*/

// ---------- EXERCÍCIO 5 -----------
//Leia um número N e exiba todos os números primos entre 2 e N usando laços
//aninhados (for dentro de for). Exiba também a quantidade total de primos
//encontrados.

/*

const prompt = require('prompt-sync')();

let t=0, c, n = Number(prompt('Digite até que número a lista de primos irá: '));

for(let i = 2; i <= n; i++){
    c = true;
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            c = false;
            break;
        }
    }if(c){
        console.log(i);
        t++
    }
}
console.log(`O total de primos é: ${t}`);

*/

// ---------- EXERCÍCIO 6 -----------
//Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
//da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
//Não use funções prontas como Math.max().

/*  

const prompt = require('prompt-sync')();

let nomes = [], notas = [], nota, nome, cont=0, md = 0, menor = 0, maior = 0;

do{
    nome = prompt('\nDigite o nome do aluno: ')
    nomes.push(nome);

    do{
        nota = Number(prompt(`Digite a nota: `));    
    }while (nota < 0 || nota > 10 || isNaN(nota));
    
    notas.push(nota);
    cont++;
}while(cont < 5);

for(let i = 0; i < notas.length; i++){
    md += notas[i];

    if(notas[i] < notas[menor]){
        menor = i;
    }

    if(notas[i] > notas[maior]){
        maior = i;
    }
}md /= 5

console.log(`Média da turma foi ${md}\nNome do aluno com a maior nota é: ${nomes[maior]} com nota ${notas[maior]}\nNome do aluno com a menor nota é: ${nomes[menor]} com nota ${notas[menor]}`);

*/

// ---------- EXERCÍCIO 7 -----------
//Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
//o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
//subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
//pagar.

/* 

const prompt = require('prompt-sync')();

let produtos = [], preco = [], leia, total = 0;

do{
    leia = prompt('Digite o nome do produto (ou "sair"): ');
    if(leia != "sair"){

        leia = ' ' + leia;
        produtos.push(leia);

        leia = Number(prompt('Digite o valor do produto: '));
        preco.push(leia);
        
        total += leia
    }else{break}
}while(true)

if(produtos.length > 3){
    console.log(`Todos os produtos são ${produtos}, o subtotal é R$${total}, com 10% de desconto o total fica: R$${total*0.90}`);
}else{console.log(`Todos os produtos são ${produtos}, o total é R$${total}`);}

*/

// ---------- EXERCÍCIO 8 -----------
//Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de
//trás para frente com um laço for, monte a palavra invertida. Exiba a palavra
//original, a invertida e informe se ela é um palíndromo.

/* 

const prompt = require('prompt-sync')();

let letras = [], palavra = [], eh = '', inverso = ''; 

palavra = prompt('Digite uma palavra: ');

for(let i = 0; i < palavra.length; i++){
    letras[i] = palavra[palavra.length - i - 1];
}

for(let i = 0; i < palavra.length; i++){
    inverso += letras[i];
}

for(let i = 0; i < palavra.length; i++){
    if(letras[i] != palavra[i]){
        eh = 'não ';
        break;
    }
}

console.log(`A palavra original era: ${palavra}, ela invertida é: ${inverso}, e ela ${eh}é um palíndromo.`);

*/

// ---------- EXERCÍCIO 9 -----------
//Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while,
//peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou
//menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e
//quantas tentativas foram necessárias.

/* 

const prompt = require('prompt-sync')();

let numero = Math.floor(Math.random() * 100 + 1), i=0, tentativa, historico = []; 

do{
    tentativa = Number(prompt(`Digite a ${i + 1}ª tentativa: `));
    i++
    historico.push(tentativa);
    if(tentativa > numero){
        console.log('Sua tentativa foi MAIOR que o número!');
    }else if(tentativa < numero){
        console.log('Sua tentativa foi MENOR que o número!');
    }
}while(tentativa != numero);

console.log(`\nVocê acertou na ${i}ª tentativa, seu histórico foi ${historico}`);

*/

// ---------- EXERCÍCIO 10 -----------
//Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
//Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve
//o melhor desempenho.

/*

const prompt = require('prompt-sync')();

let mat = [], mdA = [], mdG = 0, valor, maior = 0; 

for(let l = 0; l < 3; l++){
    mat[l] = [];
    for(let c = 0; c < 4; c++){
        mat[l][c] = Number(prompt(`Digite a ${c + 1}ª nota do ${l + 1}º aluno: `));
    }
}

for(let l = 0; l < 3; l++){
    valor = 0;
    for(let c = 0; c < 4; c++){
        valor += mat[l][c];
    }
    mdA[l] = valor / 4;
}

for(let l = 0; l < 3; l++){
    if(mdA[l] > mdA[maior]){
        maior = l;
    }
}

for(let l = 0; l < 3; l++){mdG += mdA[l]}mdG /= 3;

for(let l = 0; l < 3; l++){
    console.log(`A média do aluno ${l + 1} foi: ${mdA[l]}`);
}

console.log(`A média da turma foi: ${mdG.toFixed(2)}`);
console.log(`A maior média foi a do ${maior + 1}º aluno`);

*/