const numeroInput = document.getElementById("numero");
const botaoAdicionar = document.getElementById("adicionar");
const resultContainer = document.getElementById("result__container");
let resultParagraph = document.getElementById("result");

let soma = 0;

botaoAdicionar.onclick = (e) => {
    if (numeroInput.value == '') {return}

    resultContainer.style.display = 'flex';

    if (numeroInput.value == '0') {
        resultParagraph.innerHTML += ` = <span id="result__final">${soma}</span>`
        resultContainer.innerHTML += '<button class="button__button" onclick="limpar()">Recomeçar</button>'
        botaoAdicionar.disabled = true;
        return
    }
    
    if (resultParagraph.innerHTML != '') {
        resultParagraph.innerHTML += ' + '
    }

    soma += Number(numeroInput.value);
    resultParagraph.innerHTML += numeroInput.value;
    numeroInput.value = '';
}

numeroInput.onkeydown = (e) => {
    if (e.key == 'Enter') {
        botaoAdicionar.click();
    }
}

function limpar () {
    soma = 0;
    resultContainer.style.display = 'none';
    resultContainer.innerHTML = '<p id="result"></p>';
    resultParagraph = document.getElementById("result");
    botaoAdicionar.disabled = false;
    numeroInput.value = '';
}