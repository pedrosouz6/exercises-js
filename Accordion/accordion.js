function ini(){
    const accordion = document.getElementsByClassName("contentBx");
        for(i = 0; i <= accordion.length; i++){
            accordion[i].addEventListener("click", function(){ 
            this.classList.toggle("active");
        })
    }
}

window.addEventListener("load", ini)