// Carregamento da Tela

window.addEventListener("load", () => {
    const botaoSoma = document.getElementById("botaoSomar")
    const botaoBusca = document.getElementById("botaoBuscar")
   
    botaoSoma.addEventListener("click", somar)
    botaoBusca.addEventListener("click", buscarPokemon)
   
})

// Somatoria de Dois numeros

function somar() {

    if (validacaoSoma()) {
        const valorNum01 = buscarInput("valorNum01")
        const valorNum02 = buscarInput("valorNum02")
        const resultadoSoma = somarValores(valorNum01, valorNum02)
        verResultado(resultadoSoma)
    }
}

function validacaoSoma() {
    const input01 = document.getElementById("valorNum01")
    input01.style.border = "solid #CED8E0";
    const valorInput01 = input01.value


    const input02 = document.getElementById("valorNum02")
    input02.style.border = "solid #CED8E0";
    const valorInput02 = input02.value

    if (valorInput01 == "") {
        input01.style.borderColor = "red"

        return false
    }

    if (valorInput02 == "") {
        input02.style.borderColor = "red"

        return false
    }

    return true

}

function buscarInput(input) {
    const valor = Number(document.getElementById(input).value)

    return valor
}
function somarValores(valor01, valor02) {
    const resultado = (valor01 + valor02)

    return resultado
}
function verResultado(valorSoma) {
    const resultadoDaSoma = document.getElementById("resultado")

    resultadoDaSoma.innerHTML = valorSoma
}


// API POKEMON

async function buscarPokemon() {
    if (validacaoId()) {
        const id = idPokemon("buscaPokemon")
        const retornoApi = await buscarNaApi(id)
        exibirPersonagem(retornoApi)
    }
}

function validacaoId() {
    const id = document.getElementById("buscaPokemon")
    id.style.border = "solid #CED8E0";
    const valorId = id.value

    if (valorId == "") {
        id.style.borderColor = "red"

        const name = document.getElementById("nomeDoPokemon")
        const imagem = document.getElementById("imagemDoPokemon")
        
        imagem.style.display = "none"
        name.style.display = "none"

        return false
    }

    return true
}

function idPokemon(input) {

    const valorId = document.getElementById(input).value
    return valorId
}

async function buscarNaApi(id) {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    return await response.json()
}

function exibirPersonagem(personagem) {

    const imagem = document.getElementById("imagemDoPokemon")
    const name = document.getElementById("nomeDoPokemon")

    imagem.src = personagem.sprites.front_default
    imagem.style.display = "block"
    name.innerHTML = "Nome: " + personagem.name
    name.style.display = "block"
}