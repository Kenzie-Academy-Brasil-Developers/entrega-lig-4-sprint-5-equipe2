/* ----------------------- CAUANA ----------------------- */
const instrutions = document.querySelector(".instrutions");
const game = document.querySelector(".game-hidden");
const divPlayer = document.querySelector('.playerTurn')
const botaoStart = document.getElementById("play");
const playerStr = document.getElementById('playerStr')
const divgod = document.getElementById('divgod')
const divseta = document.getElementById('divseta')
const divkong = document.getElementById('divkong')
const winner = document.getElementById("vencedor");
let jogador = 1;
let totalFichas = 0;

function hiddenInstrutions() {
  instrutions.classList.remove("instrutions");
  instrutions.classList.add("hidden");
  playerStr.removeAttribute('hidden')
  // playerStr.innerText = ('Player 1, é a sua vez...')
  divPlayer.classList.remove('playerTurn');
  divPlayer.classList.add('nextPlayer');
  createGamePosition(0);
  createBoard();
  selecionarColuna(); //Adicionar ao click para chamar a função
  createNodesArray();
}

// Adicionando função para percorrer colunas
function selecionarColuna() {
  const selectcoluna = document.querySelectorAll(".column");

  selectcoluna.forEach((column) => {
    column.addEventListener("click", appendChildPosition);
  });
}

// Função de controle da situação do jogo

function appendChildPosition(evt) {
  let divColumnInfo = evt.currentTarget;
  let columnArrayDivs = evt.currentTarget.childNodes;

  for (let i = columnArrayDivs.length - 1; i >= 0; i--) {
    let checkDiv = columnArrayDivs[i].childElementCount;
    if (checkDiv === 0) {
      let linha = columnArrayDivs[i].dataset.row;
      let coluna = divColumnInfo.dataset.column;
      if (gamePosition[coluna][linha] === 0 && jogador === 1) {

        gamePosition[coluna][linha] = jogador;
        let ficha = document.createElement("div");
        ficha.classList.add("player1");
        columnArrayDivs[i].appendChild(ficha);
        checarVitoria(gamePosition);
        contarFichas(totalFichas);
        jogador = 2;

        divgod.classList.remove('divgod1');
        divkong.classList.add('divkong1');
        divseta.classList.add('divseta1');
        divseta.classList.remove('divseta2')

      } else {
        gamePosition[coluna][linha] = jogador;
        let ficha = document.createElement("div");
        ficha.classList.add("player2");
        columnArrayDivs[i].appendChild(ficha);
        checarVitoria(gamePosition);
        contarFichas(totalFichas);
        jogador = 1;

        divgod.classList.add('divgod1');
        divkong.classList.remove('divkong1');
        divseta.classList.remove('divseta1')
        divseta.classList.add('divseta2');

      }
      i = 0;
    }
  }
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

function vencedor(parametro){
  if(parametro == 1){
    const span = document.createElement("span");
    span.classList.add("spanVitoria")
    span.innerText = "King-Kong, o Rei dos Monstros!"; 
    const winner = document.getElementById("vencedor");
    winner.appendChild(span);
    winner.classList.add('ganhadorkong')


  }else if(parametro == 2){
    const span = document.createElement("span");
    span.classList.add("spanVitoria")
    span.innerText = "Godzilla,o Rei dos Monstros!";
    const winner = document.getElementById("vencedor");
    winner.appendChild(span);
    winner.classList.add('ganhadorgod')

  }
}

const jogador1 = 1;

function checarVitoria(gamePosition) {
  const edgeX = gamePosition[0].length - 3;
  const edgeY = gamePosition.length - 3;

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
          // return `Jogador ${gamePosition[y][x]} venceu `;
          console.log(`Jogador ${gamePosition[y][x]} venceu `);
          // winner.classList.add('ganhadorgod')
          // const span = document.createElement("span");
    // span.classList.add("spanVitoria")
    // span.innerText = "King Kong Venceu"; 
    // const winner = document.getElementById("vencedor");
    // winner.appendChild(span);


          realcaCelulas([y], [x], [y], [x + 1], [y], [x + 2], [y], [x + 3]);
          return vencedor(cell)
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
          // return `Jogador ${gamePosition[y][x]} venceu `;
          console.log(`Jogador ${gamePosition[y][x]} venceu `);
          winner.classList.add('ganhadorgod')
          winner.innerText = 'god ganhou'
          realcaCelulas([y], [x], [y + 1], [x], [y + 2], [x], [y + 3], [x]);
          return vencedor(cell)
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
          // return `Jogador ${gamePosition[y][x]} venceu `;
          console.log(`Jogador ${gamePosition[y][x]} venceu `);
          realcaCelulas([y], [x], [y + 1], [x + 1], [y + 2], [x + 2], [y + 3], [x + 3]);
          return vencedor(cell)
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
          // return `Jogador ${gamePosition[y][x]} venceu `;
          console.log(`Jogador ${gamePosition[y][x]} venceu `);
          realcaCelulas([y], [x], [y - 1], [x + 1], [y - 2], [x + 2], [y - 3], [x + 3]);
          return vencedor(cell)
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
//botão de reiniciar e função de abrir aba de vitória com 
//o botão reiniciar

/* ----------------------- VAGNER ----------------------- */
// CRIA O ARRAY COM VALORES ZERADOS
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

//CRIA UM ARRAY DOS NODES PARA REALÇAR AS CÉLULAS QUE DEU CONDIÇÃO DE VITÓRIA
let nodesArray = [];
function createNodesArray() {
  const colunasArray = document.getElementsByTagName("main")[0].childNodes;

  colunasArray.forEach((coluna) => {
    nodesArray.push(coluna.childNodes);
  });
}

//MARCA AS CÉLULAS QUE DERAM A VITÓRIA
function realcaCelulas(x0, y0, x1, y1, x2, y2, x3, y3) {
  nodesArray[x0][y0].style.backgroundColor = "green";
  nodesArray[x0][y0].style.border = "3px solid green";
  
  nodesArray[x1][y1].style.backgroundColor = "green";
  nodesArray[x1][y1].style.border = "3px solid green";

  nodesArray[x2][y2].style.backgroundColor = "green";
  nodesArray[x2][y2].style.border = "3px solid green";

  nodesArray[x3][y3].style.backgroundColor = "green";
  nodesArray[x3][y3].style.border = "3px solid green";
}

/* ------------- VERIFICA CONDIÇÃO DE EMPATE ------------ */
function contarFichas(fixas) {
  if (fixas === 41) {
    console.log("vocês são muito ruims!!!");
    descelecionarColunas();
  }
  totalFichas++;
}

function descelecionarColunas() {
  const selectcoluna = document.querySelectorAll(".column");
  selectcoluna.forEach((column) => {
    column.removeEventListener("click", appendChildPosition);
  });
}
// /* ----------------------- VAGNER ----------------------- */
