// carregamento

window.addEventListener("load", () => {
    const elBtnEnviar = document.getElementById("botaoEnviar")
    elBtnEnviar.addEventListener("click", enviar)
})

// função de enviar com validação

function enviar() {
    if (validacao()) {
        const nome = buscarInputs("#inputName")
        const sobrenome = buscarInputs("#inputSobrenome")
        const email = buscarInputs("#inputEmail")
        const mensagem = buscarInputs("#inputMensagem")

        enviarDados(nome, sobrenome, email, mensagem)
        respostaEnvio()
        limparDados()
    }
}

// função de validação

function validacao() {
    const valorInputName = document.getElementById("inputName").value
    const valorInputSobrenome = document.getElementById("inputSobrenome").value
    const valorInputEmail = document.getElementById("inputEmail").value
    const valorInputMensagem = document.getElementById("inputMensagem").value

    const mensagemValidacao = document.getElementById("mensagemRetorno")

    if (valorInputName == "" || valorInputSobrenome == "" || valorInputEmail == "" || valorInputMensagem == "") {
        mensagemValidacao.innerHTML = "Digite todos os campos."
        mensagemValidacao.style.backgroundColor = "red"
        mensagemValidacao.style.display = "block"

        return false
    }

    return true
}


function buscarInputs(input) {
    const valorInput = document.querySelector(input).value

    return valorInput
}

async function enviarDados(valorNome, valorSobrenome, ValorEmail, valorMensagem) {
    const url = `https://target-api-simples.cyclic.app/generica`

    const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nome: valorNome,
            sobrenome: valorSobrenome,
            email: ValorEmail,
            mensagem: valorMensagem
        })
    }
    await fetch(url, options)
}

function respostaEnvio() {
    const resposta = document.getElementById("mensagemRetorno")
    resposta.innerHTML = "Mensagem enviada!"
    resposta.style.backgroundColor = "green"
    resposta.style.display = "block"
}

// limpa dados depois de enviar

function limparDados() {
    const valorInputName = document.getElementById("inputName")
    const valorInputSobrenome = document.getElementById("inputSobrenome")
    const valorInputEmail = document.getElementById("inputEmail")
    const valorInputMensagem = document.getElementById("inputMensagem")

    valorInputName.value = ""
    valorInputSobrenome.value = ""
    valorInputEmail.value = ""
    valorInputMensagem.value = ""

}