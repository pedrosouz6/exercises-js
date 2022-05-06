const slides = document.getElementsByClassName("slide").length;
let atual=0;

function next(){
    atual++;
    if(atual>slides){
        atual=0
    }
    mudar()
}

function voltar(){
    atual--;
    if(atual<0){
        atual=slides-1
    }
    mudar()
}

function mudar(){
    let imgMudar = (atual * 100)
    document.getElementsByClassName("conteudo")[0].style.marginLeft = `-${imgMudar}%`
}

