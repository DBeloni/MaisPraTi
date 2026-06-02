// ---------- LISTA DE EXERCÍCIOS 3 ----------

// ---------- EXERCÍCIO 1 -----------
//Crie um objeto representando um produto com as propriedades: nome, preço,
//categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
//propriedades e seus valores. Em seguida, adicione uma nova propriedade
//desconto ao objeto e exiba o preço final calculado.

/* 

const produto = {
    nome: 'Pão de Queijo',
    preco: 10,
    categoria: 'comida',
    quantidadeEmEstoque: 15
}


console.log("Propriedades do Produto:");
for(let propriedade in produto){
    console.log(`${propriedade}: ${produto[propriedade]}`);
}

produto.desconto = 0.10;

const precoFinal = produto.preco - (produto.preco * produto.desconto);

console.log(`\nDesconto aplicado: ${produto.desconto * 100}%`);
console.log(`Preço final com desconto: R$ ${precoFinal.toFixed(2)}`);

*/

// ---------- EXERCÍCIO 2 -----------
//Crie dois objetos representando personagens de um jogo, cada um com as
//propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
//cada personagem lado a lado e determine qual deles tem maior poder total
//(soma de vida + ataque + defesa).

/* 

const tanque = {
    nome: 'Protetor',
    vida: 150,
    ataque: 35,
    defesa: 80,
};

const algoz = {
    nome: 'Sombra',
    vida: 40,
    ataque: 130,
    defesa: 20,
};

let poderTanque = 0, poderAlgoz = 0;

console.log("Atributos: ");

for (let propriedade in tanque) {
    if (propriedade !== 'nome') {
        poderTanque += tanque[propriedade];
        poderAlgoz += algoz[propriedade];
    }
    
    console.log(`${propriedade}: Tanque: ${tanque[propriedade]} x Algoz: ${algoz[propriedade]}`);
}

if (poderTanque > poderAlgoz) {
    console.log(`O ${tanque.nome} tem maior poder total!`);
} else if (poderAlgoz > poderTanque) {
    console.log(`O ${algoz.nome} tem maior poder total!`);
} else {
    console.log(`Os dois têm o mesmo poder total!`);
}

*/

// ---------- EXERCÍCIO 3 -----------
//Crie um objeto representando um funcionário com nome, cargo, salário e anos de
//experiência. Use for...in para listar todos os dados. Com base nos anos de
//experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
//anos = 10%, acima de 5 anos = 15%.

/* 

const funcionario = {
    nome: 'Jaques',
    cargo: 'professor',
    salario: 10000,
    AnosDeExperiencia: 20,
}

for(propriedade in funcionario){
    console.log(`${propriedade}: ${funcionario[propriedade]}`);
}

let bonus;

if(funcionario.AnosDeExperiencia >= 0){

    if(funcionario.AnosDeExperiencia <= 2){
        bonus = 5;
    }else if(funcionario.AnosDeExperiencia  <= 5){
        bonus = 10;
    }else{
        bonus = 15;
    }

}

const valorDoBonus = funcionario.salario * (bonus / 100);
const salarioFinal = funcionario.salario + valorDoBonus;

console.log(`Bônus: ${bonus}% (R$ ${valorDoBonus.toFixed(2)}) e o novo salário: R$ ${salarioFinal.toFixed(2)}`);

*/

// ---------- EXERCÍCIO 4 -----------
//Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
//no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
//listar o inventário completo. Permita que o usuário informe um item para usar:
//reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

/* 

const prompt = require('prompt-sync')();

const inv = {
    flecha: 10,
    semente: 4,
    carneDePorcoCrua: 1,
}

for(prop in inv){
    console.log(`${prop}: ${inv[prop]}`);
}

let escolha = prompt('Diga um dos itens anteriores para usar: ')

if (inv[escolha] !== undefined) {
    if (inv[escolha] > 0) {
        inv[escolha] -= 1;
        console.log(`Você usou o item "${escolha}". Restam: ${inv[escolha]}.`)
    } else {
        console.log(`Item esgotado! Você não tem mais "${escolha}" para usar.`);
    }
} else {
    console.log("Você não tem esse item no seu inventário!");
}

*/

// ---------- EXERCÍCIO 5 -----------
//Crie um objeto representando o orçamento mensal de uma pessoa, com
//categorias como alimentação, transporte, lazer e saúde, cada uma com valor
//planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
//uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

/*  

const orcamento = {
    alimentacao: {planejado: 1500, gasto: 1400},
    transporte: {planejado: 250, gasto: 300},
    lazer: {planejado: 500, gasto: 450},
    saude: {planejado: 3000, gasto: 3200}
}

let tPlnj = 0, tGst = 0;

console.log("Relatório do Mês\n");

for(let prop in orcamento){
    let plnj = orcamento[prop].planejado, gst = orcamento[prop].gasto;

    tPlnj += plnj;
    tGst += gst;

    if(gst > plnj){
        console.log(`${prop}: Ficou negativo no orçamento por R$${gst - plnj}`);
    }else if(gst < plnj){
        console.log(`${prop}: Ficou positivo no orçamento por R$${plnj - gst}`);
    } 
    else{
        console.log(`${prop}: Gastou exatamente o planejado`); 
    }
}

let saldo = tPlnj - tGst;

console.log("Total que planejava gastar: R$" + tPlnj);
console.log("Total que realmente gastou: R$" + tGst);

if(saldo > 0){
    console.log(`Saldo: R$${saldo.toFixed(2)}`);
}else if(saldo < 0){ 
    console.log(`Saldo: -R$${(saldo * -1).toFixed(2)}`);
}else{
    console.log("Gastou tudo");
}

*/

// ---------- EXERCÍCIO 6 -----------
//Crie um array de objetos representando músicas, cada uma com título, artista e
//duração em segundos. Use for...of para exibir cada música no formato "Artista —
//Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
//mesmo formato.

/* 

const playlist = [
    {titulo: "that's my life", artista: "Allison Eide", duracao: 218},
    {titulo: "Build", artista: "Gabe von Oven", duracao: 164},
    {titulo: "for the King", artista: "Allison Eide", duracao: 198},
    {titulo: "one of those nights", artista: "DWLLRS", duracao: 191},
    {titulo: "Finally Free", artista: "ELEVATION RHYTHM", duracao: 116}
]

let segTotal = 0;

for(let prop of playlist){
    console.log(`${prop.artista} - ${prop.titulo} (${Math.floor(prop.duracao/60)}:${prop.duracao % 60})`);
}

playlist.forEach(prop => {
    segTotal += prop.duracao;
})

console.log(`O tempo da playlist: ${Math.floor(segTotal/60)}:${segTotal % 60}`);

*/

// ---------- EXERCÍCIO 7 -----------
//Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
//cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
//forEach para calcular e exibir separadamente a média dos aprovados e a média
//dos reprovados.

/* 

const alunos = [
    {nome: 'Jaques', nota: 10},
    {nome: 'Hyago', nota: 9},
    {nome: 'de Oliveira', nota: 5.5},
    {nome: 'Antunes', nota: 6.5},
    {nome: 'Codifica Edu', nota: 8.5},
    {nome: 'Aluninho do Fundão', nota: 2},
]

let mdA=0, mdR=0, cA=0, cR=0;

for(let prop of alunos){
    if(prop.nota >= 7){
        console.log(`O aluno ${prop.nome} foi aprovado com nota: ${prop.nota}`);
        mdA += prop.nota;
        cA++
    }else if(prop.nota >= 4){
        console.log(`O aluno ${prop.nome} foi para a recuperação com nota: ${prop.nota}`);

    }else{
        console.log(`O aluno ${prop.nome} foi reprovado com nota: ${prop.nota}`);
        mdR += prop.nota;
        cR++
    }
}

console.log(`A média dos aprovados foi: ${(mdA/cA).toFixed(2)} e a dos reprovados foi: ${(mdR/cR).toFixed(2)}`);

*/

// ---------- EXERCÍCIO 8 -----------
//Crie um array de objetos representando produtos com nome, preço e quantidade.
//Use forEach para calcular o valor total em estoque de cada produto (preço ×
//quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
//estoque.

/* 

const produtos = [
    {nome: 'bombril', preco: 8, quantidade: 5},
    {nome: 'leite', preco: 6, quantidade: 12},
    {nome: 'ovos', preco: 17, quantidade: 10},
]

let total=0;

produtos.forEach(valor => {
    total += valor.preco * valor.quantidade;
    console.log(`O valor total em estoque do produto ${valor.nome} é R$${valor.preco * valor.quantidade}`);
})

console.log(`Relatório de valor total: R$${total}`);

*/

// ---------- EXERCÍCIO 9 -----------
//Crie um array de objetos onde cada objeto representa um contato com nome,
//telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
//buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
//uma mensagem de "não encontrado".

/* 

const prompt = require('prompt-sync')();

const contato = [
    {nome: 'Jaques', telefone: 5196478283, email: 'jaquesantunes@gmail.com'},
    {nome: 'Hyago', telefone: 5596478283, email: 'jhyago@gmail.com'},
    {nome: 'Codifica Edu', telefone: 555196478283, email: 'edu@codifica.com'}
]

contato.forEach(valor => {
    console.log(`Contato: Nome: ${valor.nome}, telefone: ${valor.telefone}, email: ${valor.email}`);
})

let teste = prompt('Digite um nome para buscar nos contatos: '), achou = false;

for(let valor of contato){
    if(teste === valor.nome){
        achou = true;
        console.log(`Contato: Nome: ${valor.nome}, telefone: ${valor.telefone}, email: ${valor.email}`);
        break;
    }
}

if(!(achou)){
    console.log("não encontrado");
}

*/
