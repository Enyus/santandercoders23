const divsPerguntas = document.getElementsByClassName('input__pergunta');

const inputPrimeiraPerguntaSim = document.getElementById('pergunta1_sim');
const inputPrimeiraPerguntaNao = document.getElementById('pergunta1_nao');
const inputSegundaPerguntaSim = document.getElementById('pergunta2_sim');
const inputSegundaPerguntaNao = document.getElementById('pergunta2_nao');
const inputTerceiraPerguntaSim = document.getElementById('pergunta3_sim');
const inputTerceiraPerguntaNao = document.getElementById('pergunta3_nao');
const inputQuartaPerguntaSim = document.getElementById('pergunta4_sim');
const inputQuartaPerguntaNao = document.getElementById('pergunta4_nao');
const inputQuintaPerguntaSim = document.getElementById('pergunta5_sim');
const inputQuintaPerguntaNao = document.getElementById('pergunta5_nao');

const divButtonResultado = document.getElementsByClassName('button__container')[0]
const buttonResultado = document.getElementById('resultado');
const resultContainer = document.getElementById('result__container');

let pontos = 0;

inputPrimeiraPerguntaSim.onchange = (e) => {
    inputPrimeiraPerguntaSim.disabled = true;
    inputPrimeiraPerguntaNao.disabled = true;
    pontos += 1;
    divsPerguntas[1].style.display = 'flex';
}

inputPrimeiraPerguntaNao.onchange = (e) => {
    inputPrimeiraPerguntaSim.disabled = true;
    inputPrimeiraPerguntaNao.disabled = true;
    divsPerguntas[1].style.display = 'flex';
}

inputSegundaPerguntaSim.onchange = (e) => {
    inputSegundaPerguntaSim.disabled = true;
    inputSegundaPerguntaNao.disabled = true;
    pontos += 1;
    divsPerguntas[2].style.display = 'flex';
}

inputSegundaPerguntaNao.onchange = (e) => {
    inputSegundaPerguntaSim.disabled = true;
    inputSegundaPerguntaNao.disabled = true;
    divsPerguntas[2].style.display = 'flex';
}

inputTerceiraPerguntaSim.onchange = (e) => {
    inputTerceiraPerguntaSim.disabled = true;
    inputTerceiraPerguntaNao.disabled = true;
    pontos += 1;
    divsPerguntas[3].style.display = 'flex';
}

inputTerceiraPerguntaNao.onchange = (e) => {
    inputTerceiraPerguntaSim.disabled = true;
    inputTerceiraPerguntaNao.disabled = true;
    divsPerguntas[3].style.display = 'flex';
}

inputQuartaPerguntaSim.onchange = (e) => {
    inputQuartaPerguntaSim.disabled = true;
    inputQuartaPerguntaNao.disabled = true;
    pontos += 1;
    divsPerguntas[4].style.display = 'flex';
}

inputQuartaPerguntaNao.onchange = (e) => {
    inputQuartaPerguntaSim.disabled = true;
    inputQuartaPerguntaNao.disabled = true;
    divsPerguntas[4].style.display = 'flex';
}

inputQuintaPerguntaSim.onchange = (e) => {
    inputQuintaPerguntaSim.disabled = true;
    inputQuintaPerguntaNao.disabled = true;
    pontos += 1;
    divButtonResultado.style.display = 'flex';
}

inputQuintaPerguntaNao.onchange = (e) => {
    inputQuintaPerguntaSim.disabled = true;
    inputQuintaPerguntaNao.disabled = true;
    divButtonResultado.style.display = 'flex';
}

buttonResultado.onclick = (e) => {
    buttonResultado.disabled = true;
    if (pontos < 2){
        resultContainer.innerHTML = `<p class="result">Sem mais perguntas, pode ir. (${pontos} pontos)</p>`
    } else if (pontos == 2){
        resultContainer.innerHTML = `<p class="result">Você ainda é suspeito, mas precisamos fazer mais algumas investigações. Não saia da cidade. (${pontos} pontos)</p>`
    } else if (pontos <= 4){
        resultContainer.innerHTML = `<p class="result">Certamente você é cúmplice, está preso, tem o direito de permanecer calado... (${pontos} pontos)</p>`
    } else {
        resultContainer.innerHTML = `<p class="result">Você é o assassino! Mãos ao alto! (${pontos} pontos)</p>`
    }

    resultContainer.style.display = 'flex';
}