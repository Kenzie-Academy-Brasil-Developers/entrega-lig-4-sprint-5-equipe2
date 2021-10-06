/* ----------------------- CAUANA ----------------------- */
const instrutions = document.querySelector('.instrutions');
const game = document.querySelector('.game-hidden')
const botaoStart = document.getElementById('play');
let quemjoga = 'player1'

function hiddenInstrutions() {
  instrutions.classList.remove("instrutions");
  instrutions.classList.add("hidden");
  createGamePosition(0);
  createBoard();
}

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
const jogador1 = 1;

function checarVitoria(gamePosition) {
  const edgeX = gamePosition[0].length - 2;
  const edgeY = gamePosition.length - 2;

  //horizontal
  for (let y = 0; y < gamePosition.length; y++) {
    for (let x = 0; x < edgeX; x++) {
      let cell = gamePosition[y][x];
      if (cell !== 0) {
        if (
          cell === gamePosition[y][x + 1] &&
          cell === gamePosition[y][x + 2] &&
          cell === gamePosition[y][x + 3]
        ) {
          return `Jogador ${gamePosition[y][x]} venceu `;
        }
      }
    }
  }
  //vertical
  for (let y = 0; y < edgeY; y++) {
    for (let x = 0; x < gamePosition[0].length; x++) {
      cell = gamePosition[y][x];
      if (cell !== 0) {
        if (
          cell === gamePosition[y + 1][x] &&
          cell === gamePosition[y + 2][x] &&
          cell === gamePosition[y + 3][x]
        ) {
          return `Jogador ${gamePosition[y][x]} venceu `;
        }
      }
    }
  }
  //diagonal 753
  for (let y = 0; y < edgeY; y++) {
    for (let x = 0; x < edgeX; x++) {
      cell = gamePosition[y][x];
      if (cell !== 0) {
        if (
          cell === gamePosition[y + 1][x + 1] &&
          cell === gamePosition[y + 2][x + 2] &&
          cell === gamePosition[y + 3][x + 3]
        ) {
          return `Jogador ${gamePosition[y][x]} venceu `;
        }
      }
    }
  }
  //diagonal 159
  for (let y = 2; y < gamePosition.length; y++) {
    for (let x = 0; x < edgeX; x++) {
      cell = gamePosition[y][x];
      if (cell !== 0) {
        if (
          cell === gamePosition[y - 1][x + 1] &&
          cell === gamePosition[y - 2][x + 2] &&
          cell === gamePosition[y - 3][x + 3]
        ) {
          return `Jogador ${gamePosition[y][x]} venceu `;
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

let gamePosition = [];
function createGamePosition(n) {
  gamePosition = [];
  for (let i = 0; i < 7; i++) {
    newColum = [];
    for (let j = 0; j < 6; j++) {
      newColum.push(n);
    }
    gamePosition.push(newColum);
  }
}
/* ----------------------- VAGNER ----------------------- */
