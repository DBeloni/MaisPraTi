// ---------- LISTA DE EXERCÍCIOS 1 ----------

// ---------- EXERCÍCIO 1 -----------
//Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
//aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
//ou Reprovado (nota menor que 5).

/*

const prompt = require('prompt-sync')();

let nota;

nota = Number(prompt('Digite a nota do aluno: '));

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.error('Informe uma nota válida!');
} else {
    if(nota >= 7){
        console.log(`O aluno foi aprovado! `);
    }else if(nota >= 5){
        console.log(`O aluno está em recuperação! `);
    }else{
        console.log(`O aluno foi reprovado! `);
    }
}
    
*/

// ---------- EXERCÍCIO 2 -----------

//Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
//sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
//(de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).

/*

const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite a idade da pessoa: '));


if(idade <= 12 && idade >= 0){
    console.log(`A pessoa é uma criança! `);
}else if(idade <= 17 && idade >= 12){
    console.log(`A pessoa é adolescente! `);
}else if(idade <= 59 && idade >= 18){
    console.log(`A pessoa é adulta! `);
}else if(idade >= 60 && idade < 125){
    console.log(`A pessoa é idosa! `);
}else{
    console.error(`A idade ${idade} é inválida! `);
}
    
*/


// ---------- EXERCÍCIO 3 -----------


/* Escreva um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário. */

/* const prompt = require('prompt-sync')();

let sal, au, erro = false;

sal = Number(prompt('Digite o salário da pessoa (R$): '));
au = Number(prompt('Digite o aumento do salário da pessoa (%): '));

if (isNaN(sal) || isNaN(au) || sal < 0 || au < 0) {
    console.error('Informe valores válidos!');
    erro = true;
}else{
    if(sal < 1500){
        console.log(`O novo salário do funcionário é ${sal + sal*au*2/100}! `);
    }else{
        console.log(`O novo salário do funcionário é ${sal + sal*au/100}! `);
    }
}

*/

// ---------- EXERCÍCIO 4 -----------


/* Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
funções prontas como Math.max(). */

//sor, usei array de objetos para poder ter mais de um vencedor no caso de empatar



const prompt = require('prompt-sync')();

let n1, n2, n3, ganhadores;

n1 = Number(prompt('Digite o número 1: '));
n2 = Number(prompt('Digite o número 2: '));
n3 = Number(prompt('Digite o número 3: '));

if (isNaN(n1) || isNaN(n2) || isNaN(n3) || !Number.isInteger(n1) || !Number.isInteger(n2) || !Number.isInteger(n3)) {
    console.error('Informe valores válidos!');
} else {
    if (n1 == n2) {
        if (n3 > n1) {
            ganhadores = [{ numero: 3, valor: n3 }];
        } else if (n3 == n1) {
            ganhadores = [
                { numero: 1, valor: n1 },
                { numero: 2, valor: n2 },
                { numero: 3, valor: n3 }
            ];
        } else {
            ganhadores = [
                { numero: 1, valor: n1 },
                { numero: 2, valor: n2 }
            ];
        }
    } else if (n1 > n2) {
        if (n1 > n3) {
            ganhadores = [{ numero: 1, valor: n1 }];
        } else if (n3 > n1) {
            ganhadores = [{ numero: 3, valor: n3 }];
        } else {
            ganhadores = [
                { numero: 1, valor: n1 },
                { numero: 3, valor: n3 }
            ];
        }
    } else {
        if (n2 > n3) {
            ganhadores = [{ numero: 2, valor: n2 }];
        } else if (n3 > n2) {
            ganhadores = [{ numero: 3, valor: n3 }];
        } else {
            ganhadores = [
                { numero: 2, valor: n2 },
                { numero: 3, valor: n3 }
            ];
        }
    }
    console.log('\nMaiores números: ')
    ganhadores.forEach(i => {
        console.log(`Posição: Número ${i.numero} | Valor: ${i.valor}`);
    });
}




// ---------- EXERCÍCIO 5 -----------

//Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
//programa que leia o valor total de uma compra e aplique as seguintes regras:
//compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
//299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
//15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
//valor original, o desconto aplicado e o valor final a pagar.

/* const prompt = require('prompt-sync')();

let valor, desconto, valorFinal;

valor = Number(prompt('Digite valor da compra: '));

if(valor >= 0){ 
if(valor < 100){
    desconto = 0;
}else if (valor < 300){
    desconto = 10;
}else if(valor < 500){
    desconto = 15;
}else{
    desconto = 20;
}

valorFinal = valor*(100 - desconto)/100;

console.log(`O valor inicial era de: R$${valor}\nO desconto foi de ${desconto}%\nO valor final é de R$${valorFinal}`);

} else {
    console.error('Informe um valor válido! ');
}
*/


// ---------- EXERCÍCIO 6 -----------

//Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
//deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
//quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
//compor o saque.

//caso do guloso (foi assim que aprendi no técnico pelo menos)

/*
const prompt = require('prompt-sync')();

let valor, guloso, n100, n50, n20, n10;

valor = Number(prompt('Digite valor a sacar: '));

if(valor % 10 === 0 && valor > 0){
    n100 = Math.floor(valor / 100);
    guloso = valor % 100;

    n50 = Math.floor(guloso / 50);
    guloso %= 50;

    n20 = Math.floor(guloso / 20);
    guloso %= 20;

    n10 = Math.floor(guloso / 10);
    guloso %= 10;

    console.log(`Você receberá essas notas:\n100: ${n100}\n50: ${n50}\n20: ${n20}\n10: ${n10}`);
} else {
    console.error('Informe um valor válido! ');
}
*/


// ---------- EXERCÍCIO 7 -----------

//Faça um programa que funcione como uma calculadora básica. Leia dois
//números e uma operação desejada (+, -, *, /). Usando switch case, realize a
//operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
//de operação inválida.

/*

const prompt = require('prompt-sync')();

let a, b, op, r, erro = false;

a = Number(prompt('Digite o primeiro valor: '));
b = Number(prompt('Digite o segundo valor: '));
op = prompt('Digite a operação desejada (+, -, *, /): ');

switch(op){
    case '+':
        r = a + b;
        break;
    case '-':
        r = a - b
        break;
    case '*':
        r = a * b;
        break;
    case '/':
        if(b === 0){
            console.log('Impossível dividir por 0!');
            erro = true;
        } else {
            r = a / b;
        }
        break;
    default:
        console.log('\nDigite uma operação válida!');
        erro = true
}

if(!(erro)){
    console.log(`\nO resultado da expressão ${a} ${op} ${b} é ${r}`);
}else{
    console.error('Erro em algum dos processos!');
}

*/

// ---------- EXERCÍCIO 8 -----------

//Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
//tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando
//switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
//recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.

/* const prompt = require('prompt-sync')();

let tam, borda, preco, erro = false;

tam = prompt('Digite o tamanho da pizza (P, M ou G): ');
borda = Number(prompt('Digite se a borda será recheada (0 -> não; 1 -> sim): '));

switch(tam){
    case 'p':
    case 'P':
        preco = 25;
        break;
    case 'm':
    case 'M':
        preco = 35;
        break;
    case 'g':
    case 'G':
        preco = 45;
        break;
    default:
        erro = true
}if(borda === 1){
    preco += 8;
} else if(borda === 0){}else{erro = true}

if(!(erro)){
    console.log(`O valor final da compra foi R$${preco}!`);
}else{
    console.error('Erro em algum dos processos!');
}

*/

// ---------- EXERCÍCIO 9 -----------

//Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
//o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
//pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
//caso seja.



const prompt = require('prompt-sync')();

let num, mes, dia, erro = false;

num = Number(prompt('Digite o número do mês (1 a 12): '));

switch(num){
    case 1:
        mes = 'Janeiro';
        dia = 31;
        break;
    case 2:
        mes = 'Fevereiro';
        let bissexto = Number(prompt('Digite se o ano é bissexto (0 -> não; 1 -> sim): '));
        if(bissexto === 0){dia = 28}else if(bissexto === 1){dia = 29}else{erro = true}
        break;
    case 3:
        mes = 'Março';
        dia = 31;
        break;
    case 4:
        mes = 'Abril';
        dia = 30;
        break;
    case 5:
        mes = 'Maio';
        dia = 31;
        break;
    case 6:
        mes = 'Junho';
        dia = 30;
        break;
    case 7:
        mes = 'Julho';
        dia = 31;
        break;
    case 8:
        mes = 'Agosto';
        dia = 31;
        break;
    case 9:
        mes = 'Setembro';
        dia = 30;
        break;
    case 10:
        mes = 'Outubro';
        dia = 31;
        break;
    case 11:
        mes = 'Novembro';
        dia = 30;
        break;
    case 12:
        mes = 'Dezembro';
        dia = 31;
        break;
    default:
        erro = true
}

if(!(erro)){
    console.log(`O mês escolhido foi ${mes}, esse mês tem ${dia} dias!`);
}else{
    console.error('Algum erro ocorreu durante o processo!');
}



// ---------- EXERCÍCIO 10 -----------

//Um estacionamento cobra por faixas de tempo. Faça um programa que leia
//quantas horas um veículo ficou estacionado e, usando switch case com
//intervalos, calcule o valor a pagar conforme a tabela: 1a hora = R$ 8,00; 2a hora =
//R$ 6,00; 3a hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
//R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.

const prompt = require('prompt-sync')();

let horas, valor = 0, erro = false;

horas = Number(prompt('Digite o número de horas que o veículo ficou no estacionamento: '));

switch(true){
    case horas > 3:
        valor += (horas - 3) * 2
    case horas === 3:
        valor += 4; 
    case horas === 2:
        valor += 6;
    case horas === 1:
        valor += 8;
        break;
    default:
        console.error('Digite um número válido de horas!');
        erro = true; 
} if(!(erro)){
    console.log(`O valor final foi de R$${valor}`);
}
    
