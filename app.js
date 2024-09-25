alert("Boas vindas ao jogo do número secreto!");

let chute;
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;

//Enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //Se e senão
    if (chute == numeroSecreto) {
        break;
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que (${chute}) `);
    } else {
        alert(`O número secreto é maior que (${chute})`);
    } //tentativas = tentativas + 1;
    tentativas++;
}

//Operadores Ternários
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

//Alerta com template strings
alert(`Parabéns, você descobriu o número secreto (${numeroSecreto})! Com um total de ${tentativas} ${palavraTentativa}!`);