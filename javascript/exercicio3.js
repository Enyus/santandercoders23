const numeroDoUsuario = document.getElementById("numero");
const botaoChecar = document.getElementById("checar");
const divResultado = document.getElementById("result__container");
const paragrafoResultado = document.getElementById("result");

botaoChecar.onclick = (e) => {
    numeroDoUsuario.value == '' ? numeroDoUsuario.value = 0 : null;
    paragrafoResultado.innerHTML = estaNosIntervalosEspecificos(numeroDoUsuario.value);
    divResultado.style.display = "flex";
}

function estaNosIntervalosEspecificos ( n ) {
    let result = `O número ${n} está `;
    if( n < 0 || n > 100) {
        result +=  "fora do intervalo [0,100].";
        return result;
    }
    if ( n >= 0 && n <= 25) {
        result += "no intervalo [0,25].";
        return result;
    }
    if ( n <= 50 ) {
        result += "no intervalo (25,50].";
        return result;
    }
    if ( n <= 75) {
        result += "no intervalo (50,75].";
        return result;
    }
    result += "no intervalo (75,100].";
    return result;
}