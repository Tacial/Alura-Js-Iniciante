alert('Boas vindas ao jogo do Número Secreto!!');
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute; 
let tentativa = 1;

// enquanto comentário de 1 linha
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`o número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }
    }
    tentativa ++;
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);

//if (tentativa > 1) {
//    alert(`Você acertou depois de ${tentativa} tentativas`);
//} else {
//    alert(`Você acertou com ${tentativa} tentativa`);
//}
