/* ----------------------- CAUANA ----------------------- */

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
