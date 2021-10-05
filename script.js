//SCRIPT BÁSICO DO BOTÃO


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


