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
}