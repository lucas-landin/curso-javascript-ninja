/*
Crie um array com 5 items (tipos variados).
*/
var umarray = [null,undefined,"seupaide",4,{martelo:'de Batalha',espada:'Solar'}]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var addItem = function(x){
    umarray.push(x);
    return umarray
};
addItem("mais 1")
 
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['umitem', 'espeida',true])


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é "+ umarray[6][1] +" .")

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + umarray.length + " itens.")

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + umarray[6].length + " itens.")

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
let num = 10
while(num <= 20){
num % 2 === 0 ? console.log(num): " ";
num++
};

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
let x = 10
while(x <= 20){
x % 2 !== 0 ? console.log(x): " ";
x++
};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for( var y = 100; y <= 120; y++ ) {
    y % 2 === 0 ? console.log(y) : " ";
};

console.log( 'Números ímpares entre 111 e 125:' );
for( y = 111; y <= 125; y++){
    y % 2 !== 0 ? console.log(y) : " ";
};











//var qtd = umarray.length
//while(qtd > 0){
    //console.log(umarray[--qtd])
    //if( qtd === 4 ){
   ///     console.log(umarray[qtd].espada)
    //};

//};
