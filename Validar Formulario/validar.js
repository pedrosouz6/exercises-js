document.getElementById("form").addEventListener("submit", validarFormulario);

function validarFormulario(event){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var repetirSenha = document.getElementById("repetirSenha");
    var cont = 0;
    var frame ;

    var erroNome = document.getElementsByClassName("erroNome")[0];
    if(nome.value == ""){
        erroNome.innerHTML="Digite seu nome"
        erroNome.style.display = "block"
        cont+=1
    } else if(nome.value == nome.value){
        erroNome.style.visibility = "hidden"
    }

    var erroSenha = document.getElementsByClassName("erroEmail")[0];
    if(email.value == ""){
        erroSenha.innerHTML="Digite seu email"
        erroSenha.style.display = "block"
        cont+=1
    }

    var erroSenha = document.getElementsByClassName("erroSenha")[0];
    if(senha.value == ""){
        erroSenha.innerHTML="Digite sua senha"
        erroSenha.style.display = "block"
        cont+=1
    }

    var repitaSenha = document.getElementsByClassName("repetirSenha")[0];
    if(repetirSenha.value == ""){
        repitaSenha.innerHTML="Confirmar senha"
        repitaSenha.style.display = "block"
        cont+=1
    }

    if(repetirSenha.value != senha.value){
        repitaSenha.innerHTML="Senha não está igual"
        repitaSenha.style.display = "block"
        cont+=1
    }

    if(cont>0){
        event.preventDefault()
    }
    
}