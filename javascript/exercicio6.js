const botaoResolver = document.getElementById("resolver");
const resultContainer = document.getElementById("result__container");

botaoResolver.onclick = (e) => {
    botaoResolver.disabled = true;
    for (i = 1 ; i <= 10 ; i++) {
        resultContainer.innerHTML += `<p>9 x ${i} = ${9*i}</p>`;
    }
    resultContainer.style.display = 'flex';
}