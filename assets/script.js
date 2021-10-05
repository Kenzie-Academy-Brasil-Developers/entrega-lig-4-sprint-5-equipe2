/* ----------------------- CAUANA ----------------------- */

const instrutions = document.querySelector(".instrutions");
const botaoStart = document.getElementById("play");

function hiddenInstrutions() {
  instrutions.classList.remove("instrutions");
  instrutions.classList.add("hidden");
  createBoard();
}

/* ----------------------- CAUANA ----------------------- */

/* ------------------------ MERO ------------------------ */

function createBoard() {
  const body = document.getElementsByTagName("body");
  const main = document.createElement("main");
  document.body.appendChild(main);

  for (let i = 0; i <= 6; i++) {
    const colCreate = document.createElement("div");
    colCreate.classList.add("column");
    colCreate.dataset.column = i;

    for (let i = 0; i <= 5; i++) {
      const celCreate = document.createElement("div");
      celCreate.classList.add("cell");
      celCreate.dataset.row = i;
      colCreate.appendChild(celCreate);
    }
    main.appendChild(colCreate);
  }
}

botaoStart.addEventListener("click", hiddenInstrutions);
/* ------------------------ MERO ------------------------ */

/* ------------------------ MAURO ----------------------- */
const jogador1 = 1

function checarVitoria(gamePosition){
  const edgeX = gamePosition[0].length - 2;
  const edgeY = gamePosition.length - 2;

  //horizontal
  for(let y = 0; y < gamePosition.length; y++){
    for(let x = 0; x < edgeX; x++) {
      let cell = gamePosition[y][x];
      if(cell !== 0) {
        if(cell === gamePosition[y][x+1] && cell === gamePosition[y][x+2] && cell === gamePosition[y][x+3] ) {
          return `Jogador ${gamePosition[y][x]} venceu `
        }
      }
    }
  }
  //vertical
  for(let y = 0; y < edgeY; y++){
    for(let x = 0; x < gamePosition[0].length; x++) {
      cell = gamePosition[y][x];
      if(cell !== 0) {
        if(cell === gamePosition[y+1][x] && cell === gamePosition[y+2][x] && cell === gamePosition[y+3][x] ) {
          return `Jogador ${gamePosition[y][x]} venceu `
        }
      }
    }
  }
  //diagonal 753
  for(let y = 0; y < edgeY; y++){
    for(let x = 0; x < edgeX; x++) {
      cell = gamePosition[y][x];
      if(cell !== 0) {
        if(cell === gamePosition[y+1][x+1] && cell === gamePosition[y+2][x+2] && cell === gamePosition[y+3][x+3] ) {
          return `Jogador ${gamePosition[y][x]} venceu `
        }
      }
    }
  }
  //diagonal 159
  for(let y = 2; y < gamePosition.length; y++){
    for(let x = 0; x < edgeX; x++) {
      cell = gamePosition[y][x];
      if(cell !== 0) {
        if(cell === gamePosition[y-1][x+1] && cell === gamePosition[y-2][x+2] && cell === gamePosition[y-3][x+3] ) {
          return `Jogador ${gamePosition[y][x]} venceu `
        }
      }
    }
  }
}
/* ------------------------ MAURO ----------------------- */

//condição de empate
//if (checarvitoria() == null && contagem de movimentos === 42){
//  return tela de empate e reinicio;
//}

/* ----------------------- VAGNER ----------------------- */
function captureData(elementColumn, elementLine, player) {
  gamePosition[elementColumn][elementLine] = player;
}
/* ----------------------- VAGNER ----------------------- */
