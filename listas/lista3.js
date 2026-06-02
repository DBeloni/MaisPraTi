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
    alimentacao: { planejado: 1500, gasto: 1400 },
    transporte: { planejado: 250, gasto: 300 },
    lazer: { planejado: 500, gasto: 450 },
    saude: { planejado: 3000, gasto: 3200 }
};

let totalPlanejado = 0, totalGasto = 0;

console.log("Relatório do Mês");

for (let chave in orcamento) {
    let planejado = orcamento[chave].planejado, gasto = orcamento[chave].gasto;

    totalPlanejado = totalPlanejado + planejado;
    totalGasto = totalGasto + gasto;

    if (gasto > planejado) {
        let passou = gasto - planejado;
        console.log(` ${chave} : Ficou acima do orçamento por R$${passou}`);
    }     else if (gasto < planejado) {
        let sobrou = planejado - gasto;
        console.log(`${chave} : Ficou dentro do orçamento e sobrou R$${sobrou}`);
    } 
    else {
        console.log(`${chave}: Gastou exatamente o planejado`);
    }
}

let saldoGeral = totalPlanejado - totalGasto;

console.log("Total que planejava gastar: R$" + totalPlanejado);
console.log("Total que realmente gastou: R$" + totalGasto);

if (saldoGeral > 0) {
    console.log("Saldo: R$" + saldoGeral);
} else if (saldoGeral < 0) {
    let prejuizo = totalGasto - totalPlanejado; 
    console.log("sando final : -R$" + prejuizo);
} else {
    console.log("Gastou tudo");
}

*/
