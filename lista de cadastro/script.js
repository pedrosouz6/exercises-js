const btnCadastrar = document.getElementById("section-cadastrar");
const modalPrincipal = document.querySelector(".modal-principal");
const fechar = document.getElementById("fechar");
const tbody = document.getElementById("tbody");
const enviar = document.getElementById("enviar");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cidade = document.getElementById("cidade");
const msgErro = document.querySelector(".msg-erro p");
const limpar = document.getElementById("cancelar");

//Aparecer modal
btnCadastrar.addEventListener("click", ()=> {
    modalPrincipal.classList.add("active");
})

//Sair modal
fechar.addEventListener("click", (e)=> {
    e.preventDefault()
    modalPrincipal.classList.remove("active");
    msgErro.style.display = "none"
    limparDados()
})

//Sorteando numero aleatorio
const idAleatorio = () => Math.round(Math.random() * 1000);

const localStorageProdutos = JSON.parse(localStorage.getItem("tarefas"));
let tarefas = localStorage.getItem('tarefas') !== null ? localStorageProdutos : [];

function enviando(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

//Verificação dos inputs, criação do objeto
enviar.addEventListener("click", (e)=> {
    e.preventDefault();
    const validacao = nome.value && telefone.value && email.value && cidade.value;
    if(validacao){
        msgErro.style.display = "none";
        const valores = {
            id: idAleatorio(),
            nome: nome.value,
            telefone: telefone.value,
            email: email.value,
            cidade: cidade.value,
        }
        tarefas.push(valores);
        enviando();
        limparDados();
        Mapeando();
        modalPrincipal.classList.remove("active");

    } else if(!validacao){
        msgErro.style.display = "block";
    }
});

//Limpar os inputs
function limparDados(){
    nome.value = "";
    telefone.value = "";
    email.value = "";
    cidade.value = "";
    //tbody.innerHTML = "";
}

//Mapeando o array
function Mapeando(){
    tbody.innerHTML = "";
    tarefas.map(item => criarElementos(item));
}
Mapeando();

//Criar os elementos(tr e td)
function criarElementos(items){
    let tr = document.createElement("tr");
    tr.id = items.id;

    const tdNome = document.createElement("td");
    tdNome.innerHTML = items.nome;

    const tdEmail = document.createElement("td");
    tdEmail.innerHTML = items.email;

    const tdTelefone = document.createElement("td");
    tdTelefone.innerHTML = items.telefone;

    const tdCidade = document.createElement("td");
    tdCidade.innerHTML = items.cidade;

    const tdAcao = document.createElement("td");
    tdAcao.innerHTML = 
    `
    <span>
        <i class="fas fa-trash" onclick=(remover(${items.id}))></i>
    </span>
    `;

    tbody.append(tr);

    tr.append(tdNome);
    tr.append(tdEmail);
    tr.append(tdTelefone);
    tr.append(tdCidade);
    tr.append(tdAcao);
}

function remover(id){
    tarefas = tarefas.filter(item => item.id !== id);
    enviando();
    Mapeando();
    
   // console.log(tr)
}