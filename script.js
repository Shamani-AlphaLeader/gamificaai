//let menu = document.querySelector("#menu")
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")


function abrirFecharMenu() {
    //se o menu esta fechado.
    if (menu.classList.contains("menu-fechado")) {
        //abrir o menu.
        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"

    } else {
        //fechar o menu.
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"

    }

}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

//funcao Carrossel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])


const mostrarProximoSlide = () => {

    //remover slide anterior.
    banner.classList.remove(slides[slideAtual])

    //numeroSlides = 3
    //numeroSlides - 1 -> 2
    //estou no ultimo? 2

    //[0,1,2]

    //if (slideAtual < (numeroSlides- 1)) {
    //     slideAtual++
    // } else{
    //     slideAtual = 0
    // }

    if (slideAtual < 2) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    //muda a posicao da lista de Slides, para mostrar o slide atual.
    //slideAtual++

    //Renderiza o slide atual.
    banner.classList.add(slides[slideAtual])
}


const mostrarSlideAnterior = () => {

    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = numeroSlides - 1
    }

    

    banner.classList.add(slides[slideAtual])
}