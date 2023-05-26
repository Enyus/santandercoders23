const inputNumero = document.getElementById("numero");
const botaoCalcular = document.getElementById("calcular");
const resultContainer = document.getElementById("result__container");
const resultParagraph = document.getElementById("result");

botaoCalcular.onclick = (e) => {
    let areaDoCirculo = Math.PI * Number(inputNumero.value)**2
    resultParagraph.innerHTML = `Área = ${areaDoCirculo.toFixed(4)}`
    resultContainer.style.display = 'flex';
}