// Eu escolhi fazer o desafio em JavaScript porque é a linguagem que eu estou estudando no momento, então achei uma boa oportunidade para aplicar o que estou aprendendo.

let vetor = ['pedra', 'papel', 'tesoura']
let vitoria = 0
let derrota = 0
let empate = 0

function start(user) {
    let computer = vetor[Math.floor(Math.random() * vetor.length)]

    if (computer === user) {
        alert(`O computador escolheu: ${computer} \n\nHouve um empate`)
        empate++
    } else if (
        (computer === 'pedra' && user === 'papel') ||
        (computer === 'papel' && user === 'tesoura') ||
        (computer === 'tesoura' && user === 'pedra')
    ) {
        alert(`O computador escolheu: ${computer} \n\nVocê venceu!`)
        vitoria++
    } else {
        alert(`O computador escolheu: ${computer} \n\nVocê perdeu!`)
        derrota++
    }

    document.getElementById('vitoria').textContent = vitoria
    document.getElementById('derrota').textContent = derrota
    document.getElementById('empate').textContent = empate

    if (vitoria ===2 || derrota === 2) {
    let partidas = vitoria + derrota + empate
    let porcentagemV = partidas > 0 ? (vitoria / partidas * 100).toFixed(2) : 0
    let porcentagemD = partidas > 0 ? (derrota / partidas * 100).toFixed(2) : 0
    let porcentagemE = partidas > 0 ? (empate / partidas * 100).toFixed(2) : 0

    if (vitoria === 2) {
        alert('O campeonato acabou! Você venceu a melhor de 3!')
    } else if (derrota === 2) {
        alert('O campeonato acabou! Você perdeu a melhor de 3!')
    }

    alert(`Suas estatísticas foram: \nPercentual de vitórias: ${porcentagemV}% \nPercentual de derrotas: ${porcentagemD}% \nPercentual de empates: ${porcentagemE}%`)

        limpar()
    }
}

function limpar() {
    vitoria = 0
    derrota = 0
    empate = 0

    document.getElementById('vitoria').textContent = vitoria
    document.getElementById('derrota').textContent = derrota
    document.getElementById('empate').textContent = empate
}