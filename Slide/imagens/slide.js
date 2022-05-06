//Menu Toggle
const btnhamb = document.getElementById("hamb").addEventListener("click", ()=>{
    let nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("active");
});

//-----------------------------------------------------------
//Variables
let imgAtual=0;
const quanImagens = document.querySelectorAll("div .imagens").length;
const marginslides = document.querySelector(".slides-all");
const balls = document.querySelector(".balls");
var rolar = true;

//Slide Click
document.getElementById("btnLeft").addEventListener("click", ()=>{
    imgAtual--;
    if(imgAtual < 0){
        imgAtual = quanImagens-1;
    }
    updateMargin();
})

document.getElementById("btnRight").addEventListener("click", next);

function next(){
    imgAtual++;
    if(imgAtual > (quanImagens-1)){
        imgAtual = 0;
    }
    updateMargin();
}

setInterval(()=>{
    if(rolar){
        next();
    } else{
        rolar = true;
    }
}, 900)

//Buttons
for(i = 0; i<quanImagens; i++){
    const div = document.createElement("div");
    div.id = i;
    div.className = "ball";
    balls.appendChild(div);
}

document.getElementById("0").classList.add("active");

const quantDivButao = document.querySelectorAll(".balls div");
for(i=0; i < quantDivButao.length; i++){
    quantDivButao[i].addEventListener("click", (event)=>{
        const id = event.target;
        imgAtual=id.id;
        updateMargin();
    });
    
}

//Margin
function updateMargin(){
    rolar= false;
    const newMargin = (imgAtual*100);
    marginslides.style.marginLeft = `-${newMargin}%`;
    document.querySelector("div .active").classList.remove("active");
    document.getElementById(imgAtual).classList.add("active")
}

