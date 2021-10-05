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

/* ------------------------ MAURO ----------------------- */

/* ----------------------- VAGNER ----------------------- */
function captureData(elementColumn, elementLine, player) {
  gamePosition[elementColumn][elementLine] = player;
}
/* ----------------------- VAGNER ----------------------- */
