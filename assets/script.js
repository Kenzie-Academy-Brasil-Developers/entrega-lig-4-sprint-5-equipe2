/* ----------------------- CAUANA ----------------------- */

const instrutions = document.querySelector('.instrutions');
const game = document.querySelector('.game-hidden')
const botaoStart = document.getElementById('play');

botaoStart.addEventListener('click', hiddenInstrutions)
 
function hiddenInstrutions() {
    instrutions.classList.remove('instrutions')
    instrutions.classList.add('hidden');
    game.classList.remove('game-hidden')
    game.classList.add('show-game')
};

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
