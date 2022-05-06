function ini(){
    document.getElementById("link").addEventListener("click", function(){
        var sub = document.getElementById("dropdown")
        sub.classList.toggle("active")
    } )
}

window.addEventListener("load", ini)