// TODO: write code here

const char = document.createElement('div');
char.className = 'char';

const field = document.querySelectorAll('.hole');

function gameStart() {
  const start = Math.floor(Math.random() * field.length);
  field[start].appendChild(char);
}

function changePosition() {
  const occupied = document.querySelector('.char').parentNode;
  let newPosition = Math.floor(Math.random() * field.length);
  if (newPosition === occupied.id) {
    newPosition = Math.floor(Math.random() * field.length);
  }
  occupied.innerHTML = '';
  field[newPosition].appendChild(char);

  /* for (let i = 0; i < field.length; i += 1) {
      if (field[i].children.length > 0) {
         let newPosition = Math.floor(Math.random() * field.length);
         if (newPosition === i) {
            newPosition = Math.floor(Math.random() * field.length);
         }
         field[i].innerHTML = '';
         field[newPosition].appendChild(char);
      }
   } */
}

gameStart();
setInterval(() => {
  changePosition();
}, 1000);
