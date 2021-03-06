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
let totalFichas = 1;

function hiddenInstrutions() {
  //RESETA O JOGO
  const body = document.getElementsByTagName("body")[0];
  const main = document.getElementsByTagName("main")[0];
  if (body.contains(main)) {
    winner.classList = "";
    winner.innerHTML = "";
    body.removeChild(main);
    if(document.getElementById("vencedor2")){
      const winner2 = document.getElementById('vencedor2');
      winner2.classList = ""; 
    }
  }

  //ESCONDE MENU INICIAL, CRIA TABELA E INICIA O JOGO
  instrutions.classList.remove("instrutions");
  instrutions.classList.add("hidden");
  playerStr.removeAttribute('hidden')
  divPlayer.classList.remove('playerTurn');
  divPlayer.classList.add('nextPlayer');
  createGamePosition(0);
  createBoard();
  selecionarColuna();
  createNodesArray();
}

/* ---------- ADICIONA EVENTLISTENER AS COLUNAS --------- */
function selecionarColuna() {
  const selectcoluna = document.querySelectorAll(".column");

  selectcoluna.forEach((column) => {
    column.addEventListener("click", appendChildPosition);
  });
}

/* --------------- CONTROLA STATUS DO JOGO -------------- */
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

/* -------------- CRIA O TABULEIRO DO JOGO -------------- */
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

//MOSTRA O VENCEDOR E CHAMA O BOT??O DE REINICIAR O JOGO
function vencedor(parametro){
  if(parametro == 1){
    const span = document.createElement("span");
    span.classList.add("spanVitoria")
    span.innerText = "King-Kong, o Rei dos Monstros!"; 
    const winner = document.getElementById("vencedor");
    winner.appendChild(span);
    winner.classList.add('ganhadorkong')
    resetGame()

  }else if(parametro == 2){
    const span = document.createElement("span");
    span.classList.add("spanVitoria")
    span.innerText = "Godzilla, o Rei dos Monstros!";
    const winner = document.getElementById("vencedor");
    winner.appendChild(span);
    winner.classList.add('ganhadorgod');
    resetGame()
  }
}

//VERIFICA CONDICAO DE VITORIA
function checarVitoria(gamePosition) {
  const edgeX = gamePosition[0].length - 3;
  const edgeY = gamePosition.length - 3;

  //VERTICAL
  for (let y = 0; y < gamePosition.length; y++) {
    for (let x = 0; x < edgeX; x++) {
      let cell = gamePosition[y][x];
      if (cell !== 0) {
        if (
          cell === gamePosition[y][x + 1] &&
          cell === gamePosition[y][x + 2] &&
          cell === gamePosition[y][x + 3]
        ) {
          realcaCelulas([y], [x], [y], [x + 1], [y], [x + 2], [y], [x + 3]);
          descelecionarColunas();
          return vencedor(cell)
        }
      }
    }
  }
  //HORIZONTAL
  for (let y = 0; y < edgeY; y++) {
    for (let x = 0; x < gamePosition[0].length; x++) {
      cell = gamePosition[y][x];
      if (cell !== 0) {
        if (
          cell === gamePosition[y + 1][x] &&
          cell === gamePosition[y + 2][x] &&
          cell === gamePosition[y + 3][x]
        ) {
          realcaCelulas([y], [x], [y + 1], [x], [y + 2], [x], [y + 3], [x]);
          descelecionarColunas();
          return vencedor(cell);
        }
      }
    }
  }
  //DIAGONAL 159
  for (let y = 0; y < edgeY; y++) {
    for (let x = 0; x < edgeX; x++) {
      cell = gamePosition[y][x];
      if (cell !== 0) {
        if (
          cell === gamePosition[y + 1][x + 1] &&
          cell === gamePosition[y + 2][x + 2] &&
          cell === gamePosition[y + 3][x + 3]
        ) {
          realcaCelulas([y], [x], [y + 1], [x + 1], [y + 2], [x + 2], [y + 3], [x + 3]);
          descelecionarColunas();
          return vencedor(cell);
        }
      }
    }
  }
  //DIAGONAL 753
  for (let y = 3; y < gamePosition.length; y++) {
    for (let x = 0; x < edgeX; x++) {
      cell = gamePosition[y][x];
      if (cell !== 0) {
        if (
          cell === gamePosition[y - 1][x + 1] &&
          cell === gamePosition[y - 2][x + 2] &&
          cell === gamePosition[y - 3][x + 3]
        ) {
          realcaCelulas([y], [x], [y - 1], [x + 1], [y - 2], [x + 2], [y - 3], [x + 3]);
          descelecionarColunas();
          return vencedor(cell);
        }
      }
    }
  }
}

/* ---------- CRIA O ARRAY DAS JOGADAS COM VALORES ZERADOS ---------- */
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

/* --CRIA UM ARRAY DOS NODES PARA REAL??AR AS C??LULAS QUE DEU CONDI????O DE VIT??RIA-- */
let nodesArray = [];
function createNodesArray() {
  const colunasArray = document.getElementsByTagName("main")[0].childNodes;

  colunasArray.forEach((coluna) => {
    nodesArray.push(coluna.childNodes);
  });
}

/* -------- MARCA AS C??LULAS QUE DERAM A VIT??RIA -------- */
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

/* ------------- VERIFICA CONDI????O DE EMPATE ------------ */
function contarFichas(fixas) {
  if (fixas === 42) {
    const span = document.createElement("span");
    span.classList.add("spanEmpate")
    span.innerText = "Os Monstros fizeram as pazes..."; 
    const winner = document.getElementById("vencedor");
    const winner2 = document.getElementById('vencedor2')
    winner.classList.add('ganhadorgod1')
    winner2.classList.add('ganhadorkong1')
    winner.appendChild(span);
    descelecionarColunas();
    resetGame()
  }
  totalFichas++;
}

/* ------ DESMARCA AS COLUNAS PARA REINICIAR O JOGO ----- */
function descelecionarColunas() {
  const selectcoluna = document.querySelectorAll(".column");
  selectcoluna.forEach((column) => {
    column.removeEventListener("click", appendChildPosition);
  });
}

/* -------- ZERA OS VALORES PARA REINICIAR O JOGO ------- */
function resetGame(){
  totalFichas = 0;
  jogador = 1;
  nodesArray = [];
  botaoStart.innerText = "Jogar Novamente";
  const body = document.getElementsByTagName("body")[0];
  const main = document.getElementsByTagName("main")[0];
  botaoStart.classList.add('botaoreset');
  if (body.contains(main)) {
    main.appendChild(botaoStart);
    botaoStart.style.position = "absolute";
  }
}