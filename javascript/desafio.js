const descText = document.getElementsByClassName("desc");
const botaoContainer = document.getElementsByClassName("button__container");
const botaoJogar = document.getElementById("jogar");

const resultContainer = document.getElementById("result__container");

const numeroLetras = document.getElementById("numeroLetras");
const inputChute = document.getElementById("chute");
const displayErros = document.getElementById("erros");
const caixaPerguntas = document.getElementById("perguntas");

let palavra = "";
let arrayDaPalavra = [];
let arrayRevelado = [];
let arrayDosErros = [];
let erros = 0;
let letrasErradas = [];

function desenharCabeca() {
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.beginPath();
  ctx.arc(150, 100, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.closePath();
  ctx.fill();
}

function desenharForca() {
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillRect(148, 30, 4, 50);
  ctx.fillRect(98, 30, 50, 4);
  ctx.fillRect(98, 30, 4, 200);
  ctx.fillRect(73, 230, 50, 4);
}

function desenharTronco() {
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillRect(148, 120, 4, 50); //tronco
}

function desenharBracoDireito() {
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(150, 125);
  ctx.lineTo(175, 150);
  ctx.closePath();
  ctx.stroke();
}

function desenharBracoEsquerdo() {
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(150, 125);
  ctx.lineTo(125, 150);
  ctx.closePath();
  ctx.stroke();
}

function desenharPernaEsquerda() {
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(150, 170);
  ctx.lineTo(125, 200);
  ctx.closePath();
  ctx.stroke();
}

function desenharPernaDireita() {
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(150, 170);
  ctx.lineTo(175, 200);
  ctx.closePath();
  ctx.stroke();
}

async function sortearPalavra() {
  fetch("https://api.dicionario-aberto.net/random")
    .then((response) => response.json())
    .then((data) => {
      palavra = data.word;
      palavra = retira_acentos(palavra);
      palavra = palavra.toUpperCase();
      for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i];
        arrayDaPalavra.push(letra);
        if (letra == "-") {
          arrayRevelado.push("-");
          document.getElementById("palavra").innerHTML +=
            "<li class='letra'>-</li>";
        } else {
          arrayRevelado.push("");
          document.getElementById("palavra").innerHTML +=
            "<li class='letra'></li>";
        }
      }
      numeroLetras.innerHTML = palavra.length;
    });
}

botaoJogar.onclick = (e) => {
  sortearPalavra();
  descText[0].style.display = "none";
  descText[1].style.display = "none";
  botaoContainer[0].style.display = "none";
  resultContainer.style.display = "flex";
  desenharForca();
};

inputChute.onfocus = (e) => {
  inputChute.value = "";
};

inputChute.onkeyup = (e) => {
  if (inputChute.value.length > 1) {
    inputChute.value =
      inputChute.value[inputChute.value.length - 1].toUpperCase();
  } else if (inputChute.value.length == 1) {
    inputChute.value = e.key.toUpperCase();
  } else {
    inputChute.value = "";
  }
};

function processarChute() {
  let chute = document.getElementById("chute").value;

  if (chute == "") {
    return;
  }

  let acerto = arrayDaPalavra.some((element) => element == chute);

  if (acerto) {
    const letras = document.getElementsByClassName("letra");
    for (i = 0; i < palavra.length; i++) {
      if (palavra[i] == chute) {
        letras[i].innerHTML = chute;
        arrayRevelado[i] = chute;
      }
    }
    if (!arrayRevelado.some((element) => element == "")) {
      fimDeJogo("vitoria");
    }
  } else {
    if (letrasErradas.some((element) => element == chute)) {
      return;
    }
    displayErros.innerHTML += `<li class='erro'>${chute}</li>`;
    letrasErradas.push(chute);
    erros++;
    switch (erros) {
      case 1:
        desenharCabeca();
        break;
      case 2:
        desenharTronco();
        break;
      case 3:
        desenharBracoEsquerdo();
        break;
      case 4:
        desenharBracoDireito();
        break;
      case 5:
        desenharPernaEsquerda();
        break;
      case 6:
        desenharPernaDireita();
        break;
    }
    if (erros == 6) {
      fimDeJogo("derrota");
    }
  }

  inputChute.value = "";
}

function fimDeJogo(condicao) {
  canvas.style.display = "none";
  switch (condicao) {
    case "vitoria":
      caixaPerguntas.innerHTML = `<p class='vitoria'>Parabéns você venceu! A palavra era ${palavra}</p>`;
      break;
    case "derrota":
      caixaPerguntas.innerHTML = `<p class='derrota'>Que pena, você perdeu. A palavra era ${palavra}</p>`;
      break;
  }
  caixaPerguntas.innerHTML += `<button class='button__button' onclick="reset()">Tentar de Novo</button>`;
}

function reset() {
  location.reload();
}

// Obrigado Stack Overflow!
function retira_acentos(str) {
  com_acento =
    "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";

  sem_acento =
    "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
  novastr = "";
  for (i = 0; i < str.length; i++) {
    troca = false;
    for (a = 0; a < com_acento.length; a++) {
      if (str.substr(i, 1) == com_acento.substr(a, 1)) {
        novastr += sem_acento.substr(a, 1);
        troca = true;
        break;
      }
    }
    if (troca == false) {
      novastr += str.substr(i, 1);
    }
  }
  return novastr;
}
