const mostrarResultado = document.getElementById('resultado');
const resultadoContainer = document.getElementById('result__container');
const displaySistema = document.getElementById('display__sist');
const inputSistem = document.getElementById('input__sist');
const menuWording = '<p>Digite seu comando:</p><ol><li>Cadastrar novo usuário</li><li>Imprimir usuários cadastrados</li><li>Encerrar programa</li></ol>';
let statusSistema = 0;
/*
    Aqui os códigos são:
    0 - Sistema espera receber comando 1, 2 ou 3
    1 - Sistema espera outras informações
*/
let usuarios = [];

class Usuario {
    constructor(nome, idade, email, cpf) {
        this.id = usuarios.length + 1;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.cpf = cpf;
        usuarios.push(this);
    }
}

let usuarioACadastrar = {
    nome: '',
    idade: '',
    email: '',
    cpf: '',
};

mostrarResultado.onclick = (e) => { 
    resultadoContainer.style.display = 'flex';
    inputSistem.style.display = 'block';
    document.getElementsByClassName('button__container')[0].style.display = 'none';
    document.getElementsByClassName('desc')[0].style.display = 'none';
    inputSistem.focus();
}

inputSistem.onkeydown = (e) => {
    if (e.key != 'Enter' || inputSistem.value == '') {return}

    displaySistema.innerHTML += `<p>${inputSistem.value}</p>`;
    
    switch (statusSistema) {
        case 0:
            switch (inputSistem.value) {
                case "1":
                    statusSistema = 1;
                    displaySistema.innerHTML += "<p>Digite o nome do novo usuário...</p>"
                    break
                case "2":
                    if (usuarios.length < 1) {
                        displaySistema.innerHTML += "Ainda não existem usuários cadastrados.";
                        displaySistema.innerHTML += menuWording;
                    } else {
                        usuarios.forEach( element => {
                            displaySistema.innerHTML += `<ul>Usuário ${element.id}:<li>nome: ${element.nome}</li><li>idade: ${element.idade} anos</li><li>e-mail: ${element.email}</li><li>cpf: ${element.cpf}</li></ul>`;
                        })
                        displaySistema.innerHTML += menuWording;
                    }
                    break
                case "3":
                    displaySistema.innerHTML = menuWording;
                    resultadoContainer.style.display = 'none';
                    inputSistem.style.display = 'none';
                    document.getElementsByClassName('button__container')[0].style.display = 'flex';
                    document.getElementsByClassName('desc')[0].style.display = 'block';
                    break;
                default:
                    displaySistema.innerHTML += "<p>Comando inexistente. Digite 1, 2 ou 3.</p>"
                    break;
            }
            break;


        case 1:
            console.log(usuarioACadastrar);
            if (usuarioACadastrar.nome == '') {
                usuarioACadastrar.nome = inputSistem.value;
                displaySistema.innerHTML += "<p>Digite a idade do novo usuário...</p>"
                break;
            } else if (usuarioACadastrar.idade == '') {
                usuarioACadastrar.idade = inputSistem.value;
                displaySistema.innerHTML += "<p>Digite a e-mail do novo usuário...</p>"
                break;
            } else if (usuarioACadastrar.email == '') {
                usuarioACadastrar.email = inputSistem.value;
                displaySistema.innerHTML += "<p>Digite o CPF do novo usuário...</p>"
                break;
            } else if (usuarioACadastrar.cpf == '') {
                usuarioACadastrar['cpf'] = inputSistem.value;
                new Usuario(usuarioACadastrar.nome, usuarioACadastrar.idade, usuarioACadastrar.email, usuarioACadastrar.cpf);
                usuarioACadastrar.nome = '';
                usuarioACadastrar.idade = '';
                usuarioACadastrar.email = '';
                usuarioACadastrar.cpf = '';
                statusSistema = 0;
                displaySistema.innerHTML += "<p>Usuário Criado!</p>"
                displaySistema.innerHTML += menuWording;
                break;
            }
    }
    inputSistem.value = '';
    displaySistema.scrollTo(0, displaySistema.scrollHeight);
}