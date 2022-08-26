function relogio() {
    let dataAtual = new Date();
    let alternancia = document.getElementById('alterar')
    let diaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    document.querySelector("h3.data").innerHTML = `${diaDaSemana[dataAtual.getDay()]}, ${dataAtual.getDate()}/${(dataAtual.getMonth() + 1)}/${dataAtual.getFullYear()} <br> ${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`
    //validador de hórario para troca de imgs e strings
    if (dataAtual.getHours() >= 6 && dataAtual.getHours() < 12) {
        alternancia.classList.remove('madrugada')
        alternancia.classList.add('dia')
        document.querySelector('.turno').innerText = 'Dia'
    } else if (dataAtual.getHours() >= 12 && dataAtual.getHours() < 13) {
        alternancia.classList.remove('dia')
        alternancia.classList.add('meioDia')
        document.querySelector('.turno').innerText = 'Meio Dia'
    } else if (dataAtual.getHours() >= 13 && dataAtual.getHours() < 18) {
        alternancia.classList.remove('meioDia')
        alternancia.classList.add('tarde')
        document.querySelector('.turno').innerText = 'Tarde'
    } else if (dataAtual.getHours() >= 18 && dataAtual.getHours() <= 23) {
        alternancia.classList.remove('tarde')
        alternancia.classList.add('noite')
        document.querySelector('.turno').innerText = 'Noite'
    }
} //fim do validador

setInterval(relogio, 1000) //roda a cada 1 segundo.
