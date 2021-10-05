//SCRIPT BÁSICO DO BOTÃO


let instrutions = document.getElementById('instrutions');
let game = document.getElementById('game')
let botaoStart = document.querySelector('play');

botaoStart.addEventListener('click', function hiddenInstrutions() {
    instrutions.classList.remove('instrutions')
    instrutions.classList.add('hidden');
    game.classList.remove('game-hidden')
    game.classList.add('show-game')
});


