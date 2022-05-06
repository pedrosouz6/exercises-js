let quanImagem = document.querySelectorAll(".imagens").length;
var imgAtual = 0;
let butoes = document.querySelector(".butoes");
let rolar = true

for(i=0;i<quanImagem;i++){
    const button = document.createElement("button");
    button.id= i;
    butoes.appendChild(button);
}

document.getElementById('0').classList.add("ativo");

var pos = document.querySelectorAll(".butoes button");

for(i=0; i < pos.length; i++){
    pos[i].addEventListener("click", (event)=>{
        const id = event.target;
        imgAtual=id.id
        updateImgs();
    })
}

setInterval(()=>{
    if(rolar){
        goNext();
    } else{
        rolar = true
    }
}, 3500);

function goPrev(){
    imgAtual--;
    if(imgAtual<0){
        imgAtual = quanImagem -1;
    }
    updateImgs();
}

function goNext(){
    imgAtual++;
    if(imgAtual >= (quanImagem)){
        imgAtual = 0;
    }
    updateImgs();
}

function updateImgs(){
    rolar = false
    let newWidth = (imgAtual*100);
    document.querySelector(".all-slides").style.marginLeft = `-${newWidth}%`;
    document.querySelector(".ativo").classList.remove("ativo");
    document.getElementById(imgAtual).classList.add("ativo");
}

function toggleMenu(){
    let nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("active");
}

function eventos(){
    const btnPrev = document.getElementById("prev");
    btnPrev.addEventListener("click", goPrev);
    const btnNext = document.getElementById("next");
    btnNext.addEventListener("click", goNext);
    const btnhamb = document.getElementById("hamb");
    btnhamb.addEventListener("click", toggleMenu);
}

window.addEventListener("load", eventos)