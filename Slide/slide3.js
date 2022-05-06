let imgAtual = 0

let totalImagens = document.querySelectorAll(".imgs").length ;
let largura = document.querySelector(".slides");
largura.style.width = `${800*totalImagens-1}px`;

let slideControls = document.querySelector(".controls");
let height = document.querySelector(".slide").clientHeight;
slideControls.style.height = `${height}px`;

let v = document.querySelector(".voltar");
let p = document.querySelector(".prox");

v.addEventListener("click", goPrev);
p.addEventListener("click", goNext);

setInterval(goNext, 3000)

function goPrev(){
    imgAtual--;
    if(imgAtual<0){
        imgAtual=totalImagens-1;
    }
    upDateMargin();
}

function goNext(){
    imgAtual++;
    if(imgAtual>(totalImagens-1)){
        imgAtual=0;
    }
    upDateMargin();
}

function upDateMargin(){
    
    let newMargin = (imgAtual*document.querySelector(".slide").clientWidth);
    largura.style.marginLeft =`-${newMargin}px`

}