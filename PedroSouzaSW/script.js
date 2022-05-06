function adicao(){
    var resultado=document.getElementById("resultado")
    var numero1=document.getElementById("numeroP")
    var numero2=document.getElementById("numeroS")
    var soma = Number(numero1.value)  + Number(numero2.value) 
    resultado.innerHTML = `A soma é ${soma}`
    if(numero1.value == "" ||  numero2.value == ""){
        alert("Digite um número abaixo")
        resultado.innerHTML = "O resultado vai aparecer aqui..."
    }
}

function subt(){
    var resultado=document.getElementById("resultado")
    var numero1=document.getElementById("numeroP")
    var numero2=document.getElementById("numeroS")
    var sub = Number(numero1.value)  - Number(numero2.value) 
    resultado.innerHTML = `A subtração é ${sub}`
    if(numero1.value == "" ||  numero2.value == ""){
        alert("Digite um número abaixo")
        resultado.innerHTML = "O resultado vai aparecer aqui..."
    }
}

function mult(){
    var resultado=document.getElementById("resultado")
    var numero1=document.getElementById("numeroP")
    var numero2=document.getElementById("numeroS")
    var mul = Number(numero1.value) * Number(numero2.value) 
    resultado.innerHTML = `A multiplicação é ${mul}`
    if(numero1.value == "" ||  numero2.value == ""){
        alert("Digite um número abaixo")
        resultado.innerHTML = "O resultado vai aparecer aqui..."
    }
}

function divi(){
    var resultado=document.getElementById("resultado")
    var numero1=document.getElementById("numeroP")
    var numero2=document.getElementById("numeroS")
    var div = Number(numero1.value) / Number(numero2.value) 
    resultado.innerHTML = `A divisão é ${div}`
    if(numero1.value == "" ||  numero2.value == ""){
        alert("Digite um número abaixo")
        resultado.innerHTML = "O resultado vai aparecer aqui..."
    }
}

function eventos(){
    var adc = document.getElementById("adc")
    adc.addEventListener("click", adicao)
    var sub = document.getElementById("sub")
    sub.addEventListener("click", subt)
    var mul = document.getElementById("mul")
    mul.addEventListener("click", mult)
    var div = document.getElementById("div")
    div.addEventListener("click", divi)
}

window.addEventListener("load", eventos)