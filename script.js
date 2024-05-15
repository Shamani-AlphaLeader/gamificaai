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

const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}

let listaCases = [
    {
        imagem: "https://unsplash.it/640/400?image=34",
        descricao: "Uma empresa de tecnologia lanca um desafio de gamificacao onde os funcionarios devem propor e implementar ideias inovadoras."
    },

    {
        imagem: "https://unsplash.it/640/400?image=35",
        descricao: "Uma empresa de consultoria cria uma narrativa de gamificacao para seu programa de treinamento."
    },

    {
        imagem: "https://unsplash.it/640/400?image=43",
        descricao: "Uma empresa implementa uma competicao gamificada entre equipes que competem pelo topo do ranking."
    },

    {
        imagem: "https://unsplash.it/640/400?image=44",
        descricao: "Uma empresa promove o bem estar dos funcionarios atraves de um desafio de gamificacao de condicionamento fisico."
    },
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    // Template Strings.
    let template = ""

    listaCases.forEach(cardCase => {
        template += `<div class="card">
    <img src="${cardCase.imagem}" alt="">
    <p>${cardCase.descricao}</p>
    <button>Ver Mais</button>
    </div>`
    })

    elementoLista.innerHTML = template
}