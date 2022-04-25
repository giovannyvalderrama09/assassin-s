let menu=document.getElementById("menu")

window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop<=150){

        menu.classList.add("menu")
        menu.classList.remove("menu2")

    }else{

        menu.classList.add("menu2")
        menu.classList.remove("menu")

    }
})

let boton=document.getElementById("boton-log")

window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop<=150){

        boton.classList.add("boton-log")
        boton.classList.remove("boton-log2")

    }else{

        boton.classList.add("boton-log2")
        boton.classList.remove("boton-log")

    }
})

