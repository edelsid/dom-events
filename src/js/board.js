import image from '../img/goblin.png';

export default class Board {
  constructor () {
    this.char = document.createElement('img');
    this.char.className = 'char';
    this.char.src = image;
    this.field = document.querySelectorAll('.hole');
  }

  setPosition() {
    const start = Math.floor(Math.random() * this.field.length);
    this.field[start].appendChild(this.char);
  }

  changePosition() {
    let newPosition = Math.floor(Math.random() * this.field.length);
    if (newPosition.toString() === this.char.parentNode.id) {
    newPosition = Math.floor(Math.random() * this.field.length);
    }
    this.char.innerHTML = '';
    this.field[newPosition].appendChild(this.char);
  }

  gameStart() {
    this.setPosition();
    this.changeTimer = setInterval(() => {
      this.changePosition();
    }, 1000);
  }

  gameEnd() {
    clearInterval(this.changeTimer);
    this.char.parentNode.innerHTML = '';
  }
}