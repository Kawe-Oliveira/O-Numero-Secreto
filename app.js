let listDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'O número secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

    exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemtentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        } 
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listDeNumerosSorteados = [];
    }

   if (listDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listDeNumerosSorteados.push(numeroEscolhido);
    console.log(listDeNumerosSorteados);
    return numeroEscolhido;
   }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}







