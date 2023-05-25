const convertButton = document.getElementById("convert");
const tempF = document.getElementById("tempF");
let resultShow = document.getElementById("result");
let resultContainer = document.getElementById("result__container");

convertButton.onclick = (e) => {
    resultShow.innerHTML = convertFromFtoC(tempF.value);
    resultContainer.style.display = "flex";
}

function convertFromFtoC( temp ) {
    const result = (5 * (Number(temp) - 32)) / 9;
    return Math.floor(result);
}