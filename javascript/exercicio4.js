const buttonPedra = document.getElementById("pedra");
const buttonPapel = document.getElementById("papel");
const buttonTesoura = document.getElementById("tesoura");
const divResultado = document.getElementById("result__container");
const spanEscolhaJogador = document.getElementById("escolhaJogador");
const spanEscolhaPC = document.getElementById("escolhaPC");
const paragrafoResultado = document.getElementById("result");
const opcoes = ['pedra', 'papel', 'tesoura'];
const svgPedra = '<svg class="result__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 0C117.5 0 96 21.5 96 48V96v28.5V176c0 8.8-7.2 16-16 16s-16-7.2-16-16V149.3l-9 7.5C40.4 169 32 187 32 206V244c0 38 16.9 74 46.1 98.3L128 384v96c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V374.7c46.9-19 80-65 80-118.7V176 160 144c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 83.5 329.3 64 304 64c-12.4 0-23.6 4.7-32.1 12.3C270 51.5 249.3 32 224 32c-12.4 0-23.6 4.7-32.1 12.3C190 19.5 169.3 0 144 0z"/></svg>';
const svgPapel = '<svg class="result__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z"/></svg>';
const svgTesoura = '<svg class="result__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>';
const svgArray = [svgPedra, svgPapel, svgTesoura];
let escolhaDoJogador = "";
let escolhaDoPC = ""

function sortearEscolhaPC () {
    let randomNumber = Math.floor(Math.random() * 3);
    escolhaDoPC = opcoes[randomNumber];
}

function checarVencedor (escolhaDoJogador, escolhaDoPC) {
    if(escolhaDoJogador == escolhaDoPC) {
        return 'empate'
    }
    if(escolhaDoJogador == "pedra" && escolhaDoPC =="tesoura" ||
        escolhaDoJogador == "tesoura" && escolhaDoPC == "papel" ||
        escolhaDoJogador == "papel" && escolhaDoPC == "pedra") {
        return 'vitoria'
    }
    return 'derrota'
}

function limpar () {
    divResultado.style.display = "none";
    spanEscolhaJogador.innerHTML = "";
    spanEscolhaPC.innerHTML = "";
    paragrafoResultado.innerHTML = "";
}

function mostrarResultado ( resultado ) {
    spanEscolhaJogador.innerHTML = svgArray[opcoes.findIndex(element => element == escolhaDoJogador)];
    spanEscolhaPC.innerHTML = svgArray[opcoes.findIndex(element => element == escolhaDoPC)];

    switch (resultado) {
        case 'empate':
            paragrafoResultado.innerHTML = "Empate."
            break;
        case 'derrota':
            spanEscolhaJogador.children[0].classList.add('perdedor');
            spanEscolhaPC.children[0].classList.add('vencedor');
            paragrafoResultado.innerHTML = "Você perdeu..."
            break;
        case 'vitoria':
            spanEscolhaJogador.children[0].classList.add('vencedor');
            spanEscolhaPC.children[0].classList.add('perdedor');
            paragrafoResultado.innerHTML = "Você ganhou!"
            break;
        default:
            limpar();
            console.log("Houve algum erro.");
            break;
    }

    divResultado.style.display = "flex";
}

buttonPedra.onclick = (e) => {
    limpar();
    sortearEscolhaPC();
    escolhaDoJogador = 'pedra';
    mostrarResultado(checarVencedor(escolhaDoJogador,escolhaDoPC));
}

buttonPapel.onclick = (e) => {
    limpar();
    sortearEscolhaPC();
    escolhaDoJogador = 'papel';
    mostrarResultado(checarVencedor(escolhaDoJogador,escolhaDoPC));
}

buttonTesoura.onclick = (e) => {
    limpar();
    sortearEscolhaPC();
    escolhaDoJogador = 'tesoura';
    mostrarResultado(checarVencedor(escolhaDoJogador,escolhaDoPC));
}