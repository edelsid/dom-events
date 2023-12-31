import Board from './board';

export default class Game {
  constructor() {
    this.game = new Board();
    this.game.gameStart();

    this.board = document.querySelector('.hole-game');

    this.onClick = this.onClick.bind(this);

    this.board.addEventListener('click', this.onClick);

    this.hit = document.querySelector('.hit');
    this.miss = document.querySelector('.miss');
    this.winCounter = Number(this.hit.textContent);
    this.lossCounter = Number(this.miss.textContent);
  }

  onClick(e) {
    const occupied = this.game.char;

    if (e.target === occupied) {
      this.winCounter += 1;
      this.hit.textContent = this.winCounter;
      this.game.changePosition();
    } else {
      this.lossCounter += 1;
      this.miss.textContent = this.lossCounter;
    }
    if (this.lossCounter > 5) {
      this.game.gameEnd();
      this.clearBoard();
      // eslint-disable-next-line no-alert
      alert('Вы проиграли! Игра окончена');
    }
  }

  clearBoard() {
    this.lossCounter = 0;
    this.winCounter = 0;
    this.miss.textContent = this.lossCounter;
    this.hit.textContent = this.winCounter;
    this.board.removeEventListener('click', this.onClick);
  }
}
