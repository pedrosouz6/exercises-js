var input = document.getElementsByTagName("input")[0];
var button = document.getElementsByTagName("button")[0];
var lista = document.getElementById("lista");

var tarefas = [
];

function addLista(){

    lista.innerHTML = "";

    for(tarefa of tarefas){
    var li = document.createElement("li");
    li.innerHTML=tarefa;
    lista.appendChild(li); 
    var button = document.createElement("button");
    button.innerHTML = "X";
    li.appendChild(button);
    var pos = tarefas.indexOf(tarefa);
    button.addEventListener("click", (pos) => {
        tarefas.splice(pos, 1);
        addLista();
    })
    }
  
}

function mostra(){
    var valorDigitado = input.value;
    if(input.value == ""){
        var lista = document.getElementById("lista").childNodes;
        input.style.backgroundColor="red"
        lista.style.display= "none"
        input.focus()
    }
    input.value = ""
    input.focus()
    tarefas.push(valorDigitado);
    addLista();
}

button.addEventListener("click", mostra)