/* ----------------------- CAUANA ----------------------- */

const instrutions = document.querySelector('.instrutions');
const game = document.querySelector('.game-hidden')
const botaoStart = document.getElementById('play');
let quemjoga = 'player1'

botaoStart.addEventListener('click', hiddenInstrutions)
 
function hiddenInstrutions() {
    instrutions.classList.remove('instrutions')
    instrutions.classList.add('hidden');
    game.classList.remove('game-hidden')
    game.classList.add('show-game')
};

// Adicionando função para percorrer colunas
function selecionarColuna() {
const selectcoluna = document.querySelectorAll('.column')

selectcoluna.forEach(column => {
  column.addEventListener("click", jogar)
})
}

// Função jogar adicionando troca de players e criando as fichas
function jogar(event) {
  const play = document.querySelectorAll('.column')

  for (let i = 0; i < play.length; i++) {
    if (quemjoga === 'player1') {
      let ficha = document.createElement('div')
        ficha.classList.add('player1')
            play[i].appendChild(ficha)

            gamePosition.push() //Nao é assim, não sei percorrer a array
            quemjoga = 'player2'

          } else if (quemjoga === 'player2'){

            let ficha = document.createElement('div')
            ficha.classList.add('player2')
            play[i].appendChild(ficha)

            gamePosition.push() //Nao é assim, não sei percorrer a array
            quemjoga = 'player1'
          }
  }
}

// // Função para mudar o jogador a cada clique (tentar inserir dentro da função jogar()??????)
// function mudarJogador() {
//   if( quemjoga === 'player1') {
//     quemjoga = 'player2'
//   } else if ( quemjoga === 'player2') {
//     quemjoga = 'player1'
//   }
//   return quemjoga
// }

/* ----------------------- CAUANA ----------------------- */

/* ------------------------ MERO ------------------------ */

const body = document.getElementsByTagName('body')
const main = document.createElement('main')
document.body.appendChild(main)

for (let i = 0; i <= 6; i++){
  const colCreate = document.createElement('div')
  colCreate.classList.add('column')
  colCreate.dataset.column = i+1
  
  for (let i = 0; i <= 5; i++){
    const celCreate = document.createElement('div')
    celCreate.classList.add('cell')
    celCreate.dataset.row = i + 1
    colCreate.appendChild(celCreate)
  }
  main.appendChild(colCreate)
}

/* ------------------------ MERO ------------------------ */

/* ------------------------ MAURO ----------------------- */

/* ------------------------ MAURO ----------------------- */

/* ----------------------- VAGNER ----------------------- */
function captureData(elementColumn, elementLine, player) {
  gamePosition[elementColumn][elementLine] = player;
}
/* ----------------------- VAGNER ----------------------- */
