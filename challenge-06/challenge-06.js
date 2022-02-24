/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "campeonato baiano";

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['JacuipenseBA','Bahia de Feira','Barcelona BA','Vitoria','Alagoinhas'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
var showTeamPosition = function(arg,x){
 
    if( x < 1 || x < 5){

    return "O time que está em " + (x + 1) + " lugar é o "+ arg[x] +".";

}else{

return"Não temos a informação do time que está nessa posição."

};

};



/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(teams,1));
console.log(showTeamPosition(teams,2));
console.log(showTeamPosition(teams,3));
console.log(showTeamPosition(teams,7));
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
let cont = 0
while(cont <= 30){
console.log(cont++);
};


/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
var convertToHex = function(cor){
    var hexa;
    switch(cor){     
    case cor = "red":
        hexa =  '#ff0303'
        break;
    case cor = "blue":
        hexa = '#0303ff'
        break;
    case cor = "green":
        hexa = '#13ff03'
        break;
    case cor = "yellow":
        hexa = '#f7ff03'
        break;
    case cor = "yellow":
        hexa = '#f7ff03'
        break;
    case cor = "orange":
        hexa = '#ff7003'
        break;
   default:
    return "Não temos o equivalente hexadecimal para " + cor + ". ";
    }; 

    return "O hexadecimal para a cor "+ cor  + " é "  + hexa + ".";
};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex("red"));
console.log(convertToHex("blue"));
console.log(convertToHex("green"));
console.log(convertToHex("yellow"));
console.log(convertToHex("orange"));
console.log(convertToHex("vermelho"));
console.log(convertToHex("amarelo"));
console.log(convertToHex("roxo"));

let num = 0
while(num <= 20){
num % 2 === 0 ? console.log(num): " ";
num++
};

