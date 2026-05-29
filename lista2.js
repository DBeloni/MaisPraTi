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



// ---------- EXERCÍCIO 6 -----------
//Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
//o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
//subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
//pagar.
