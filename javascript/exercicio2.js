let resultShow = document.getElementById("result");
let resultContainer = document.getElementById("result__container");
const x1 = document.getElementById("x_1");
const y1 = document.getElementById("y_1");
const x2 = document.getElementById("x_2");
const y2 = document.getElementById("y_2");
const calcButton = document.getElementById("calcular");
let coordinate1 = document.getElementById("coordinate_1");
let coordinate2 = document.getElementById("coordinate_2");


calcButton.onclick = (e) => {
    console.log(coordinate1);
    coordinate1.innerHTML = `${x1.value},${y1.value}`;
    coordinate2.innerHTML = `${x2.value},${y2.value}`;
    resultShow.innerHTML = euclidianDistance(x1.value, y1.value, x2.value, y2.value)
    resultContainer.style.display = "flex";
};

function euclidianDistance( x_1, y_1, x_2, y_2 ) {
    let distance = Math.sqrt((Number(x_2) - Number(x_1))**2 + (Number(y_2) - Number(y_1))**2)
    return distance.toFixed(4);
};