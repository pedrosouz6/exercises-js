var imgs = [];
var slide;
var imgAtual;
var maxImagem;
var tempoSlide;
var balls;
var div;

function preCarregamento(){
    var s = 1;
    for(i=1;i<=4;i++){
        imgs[i]= new Image();
        imgs[i].src="paisagem"+s+".png";
        s++;
    }
}

function carregarImg(img){
    slide.style.backgroundImage="url('"+imgs[img].src+"')";
}

function ini(){
    preCarregamento();
    slide = document.getElementsByClassName("slide")[0];
    barra = document.getElementsByClassName("carregamento")[0];
    balls = document.getElementsByClassName("balls")[0];
    imgAtual=1;
    maxImagem=imgs.length-1;
    tempoSlide=0;
    carregarImg(imgAtual);
    anima();
    bolas();
}

function bolas(){
    for(i=1;i<=maxImagem;i++){
        div = document.createElement("div");
        div.id= i;
        balls.appendChild(div);
    }
    document.getElementById("1").classList.add("active");
    var quantDiv = document.querySelectorAll(".balls div");

    for(let i=1; i<quantDiv.length;i++){
        quantDiv[i].addEventListener("click", function(){
            imgAtual=quantDiv[i];
        });
    }
    carregarImg(imgAtual);
}

function trocaImg(){
    imgAtual++;
    
    if(imgAtual>maxImagem){
        imgAtual=1;
    }
    carregarImg(imgAtual);
}

function voltarS(){
    tempoSlide=0;
    imgAtual--;
    if(imgAtual<=0){
        imgAtual=maxImagem;
    }
    carregarImg(imgAtual);
}

function nextS(){
    tempoSlide=0;
    imgAtual++;
        if(imgAtual>maxImagem){
            imgAtual=1;
        }
        carregarImg(imgAtual);
}

function anima(){
    tempoSlide++;
    if(tempoSlide >= 300){
        tempoSlide=0;
        nextS();
    }
    var vtempo = tempoSlide/3;
    barra.style.width=vtempo+"%"
    window.requestAnimationFrame(anima)
}

function eventos(){
    ini();
    document.getElementById("next").addEventListener("click", nextS);
    document.getElementById("voltar").addEventListener("click", voltarS);
}

addEventListener("load", eventos)
