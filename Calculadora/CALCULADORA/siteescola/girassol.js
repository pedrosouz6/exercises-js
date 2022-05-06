function mudarBanner1(){
    document.getElementById("banners").src="banner1.jpg"
    setTimeout("mudarBanner2()", 2000)
}

function mudarBanner2(){
    document.getElementById("banners").src="banner2.png"
    setTimeout("mudarBanner3()",2000)
}

function mudarBanner3(){
    document.getElementById("banners").src="banner3.png"
    setTimeout("mudarBanner1()",2000)
}

window.addEventListener("load", mudarBanner1)