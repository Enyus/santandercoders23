const x1Input = document.getElementById("x_1");
const y1Input = document.getElementById("y_1");
const z1Input = document.getElementById("z_1");
const x2Input = document.getElementById("x_2");
const y2Input = document.getElementById("y_2");
const z2Input = document.getElementById("z_2");
const botaoCalcular = document.getElementById('calcular');
const resultContainer = document.getElementById('result__container');

botaoCalcular.onclick = (e) => {
    const array1 = [x1Input.value, y1Input.value, z1Input.value];
    const array2 = [x2Input.value, y2Input.value, z2Input.value];

    if (array1.includes('') || array2.includes('')) {
        return
    }

    let produtoEscalar = 0;
    for (i= 0 ; i < array1.length; i++) {
        produtoEscalar += array1[i] * array2[i];
    }

    resultContainer.innerHTML = `<p>O produto escalar dos vetores (${array1[0]},${array1[1]},${array1[2]}) <span class="produto__escalar">&#9898;</span> (${array2[0]},${array2[1]},${array2[2]}) = <span id="result">${produtoEscalar}</span></p>`;
    resultContainer.style.display = 'flex';
}