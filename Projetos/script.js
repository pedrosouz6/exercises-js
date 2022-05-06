//RESGATANDO SELEÇÃO
const conteudoDigitado = document.getElementById("conteudoDigitado");
const btnAdd = document.getElementById("addElemento");
const ul = document.getElementsByClassName("lista")[0];

//ID ELEMENTO QUE VAI SER REMOVIDO
let idAtual = 1;

//TECLA ENTER
conteudoDigitado.addEventListener("keypress", (e)=>{
    if(e.keyCode == 13){
        let tarefas = {
            conteudo: conteudoDigitado.value,
            id: atualizarId(),
        }
        criarElementos(tarefas);
    }
})

//CLICK NO BUTÃO ADICIONAR
btnAdd.addEventListener("click",()=>{
    let tarefas = {
        conteudo: conteudoDigitado.value,
        id: atualizarId(),
    }
    criarElementos(tarefas);
})

//CRIANDO OS LIS DE FORMA DINÂMICA
function criarElementos(tarefa){
    //CRIANDO A TAG LI
    const li = document.createElement("li");
    li.id = tarefa.id;
    li.classList.add("conteudo-li");
    li.innerHTML = tarefa.conteudo;
    ul.appendChild(li);

    //CRIANDO A TAG SPAN DOS BUTÕES
    const span = document.createElement("span");
    span.id = "icones";
    li.appendChild(span);

    //CRIANDO O BUTÃO CHECK
    const buttonCheck = document.createElement("button");
    buttonCheck.classList.add("editarIcones");
    span.appendChild(buttonCheck);

    //CRIANDO O BUTÃO EDITAR
    const buttonEditar = document.createElement("button");
    buttonEditar.classList.add("editarIcones");
    span.appendChild(buttonEditar);

    //CRIANDO O BUTÃO REMOVER
    const buttonRemover = document.createElement("button");
    buttonRemover.classList.add("editarIcones");
    span.appendChild(buttonRemover);

    //CRIANDO O ÍCONE DO BUTÃO CHECK
    const iconeCheck = document.createElement("i");
    iconeCheck.className ="fas fa-check";
    buttonCheck.appendChild(iconeCheck);

    //CRIANDO O ÍCONE DO BUTÃO EDITAR
    const iconeEditar = document.createElement("i");
    iconeEditar.className ="fas fa-edit";
    buttonEditar.appendChild(iconeEditar);

    //CRIANDO O ÍCONE DO BUTÃO REMOVER
    const iconeRemover = document.createElement("i");
    iconeRemover.className ="fas fa-trash";
    buttonRemover.appendChild(iconeRemover);

    //ADICIONAR O ONCLICK NOS BUTOES
    buttonRemover.setAttribute("onclick", "removerLi("+tarefa.id+")");
    buttonCheck.setAttribute("onclick", "checkLi("+tarefa.id+")");

    //LIMPAR O INPUT E ADICIONAR O FOCO
    conteudoDigitado.value = "";
    conteudoDigitado.focus();
}

//ATUALIZANDO O ID DOS ELEMENTOS
function atualizarId(){
    return idAtual++;
}

//REMOVER O ELEMENTO
function removerLi(removerId){
    const idRem = document.getElementById(removerId);
    ul.removeChild(idRem);
}

//EDITANDO ELEMENTO
function checkLi(checkId){
    const itemCheck = document.getElementById(checkId);
    itemCheck.classList.toggle("salvarLi");
}