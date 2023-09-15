index.js
//1)a. Imprime no console se a pessoa pode ou não ter carteira de motorista
//b. quando a idade for igual ou maior que 18, e quando for menor será impresso a segunda mensagem 
//2) a.Indica se o animal é carnivoro ou não.
//b.Será impresso 'leao é um animal carnivoro'
//3)a. Indica se a variavel 'numero' é maior, igual ou menor que 5, e depois indica se esse numero é par ou não.
//b."o numero é maior que 5", e "'o numero é par"
const pessoa =  {
    idade: Number(prompt('qual é a sua idade?'))
}
if (pessoa.idade <= 18) {
    console.log('voce é maior de idade')
} else {
    console.log('você é menor de idade')
}

const horario = {
    turno: prompt('em qual horário você estuda? digite 'm' para Matutino, 't' para tarde e 'n' para noite.')
}
if (horario.turno === 'm') {
    console.log('Bom dia!')
} else if (horario.turno === 't') {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

switch (horario) {
    case 'm':
     console.log('Bom dia!');
    break
    case 't':
    console.log('Boa tarde!');
    break
    case 'n': 
    console.log('Boa noite!');
    break
    default:
    console.log('SCDSFCSD');
    break
}

const aluno = {
    nome: prompt('qual seu nome?'),
    idade: Number(prompt('qual sua idade?')),
    tipoDeCurso: prompt('você está matriculado em alguma graduação? '),
    temBolsa: Boolean(prompt("é bolsista?")),
} 

if (aluno.idade <= 30) {
    if(aluno.tipoDeCurso === "graduação"){
        if(!aluno.temBolsa)
            console.log("apto a bolsa")
    }else{console.log("nao apto");}
}else{console.log("nao apto");}

const produto = {
    nome: 'objeto',
    preço: 189 ,
    desconto: 70 ,
    freteGratis: false ,
} 

if (produto.desconto > 0){
    if(produto.freteGratis === true){
    console.log(`preço final:${produto.preço} - ${produto.desconto} (com frete grátis)`);
    }else{
        console.log(`preço final:${produto.preço} - ${produto.desconto} (sem frete grátis)`);
    }
} else{
    if(produto.freteGratis === true){
    console.log('preço final:'${preço - desconto})
    } else {
        console.log('preço final:'${preço - desconto})
    }
} 



