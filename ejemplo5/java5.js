function abrirRegalo(event) {
const image = event.currentTarget;
//image.src = 'https://media.giphy.com/media/27ppQU0xe7K1G/giphy,gif';
image.src = 'giphy.gif';

const mensaje = document.querySelector('h1');
mensaje.textContent = 'Felicidades';
image.removeEventListener('click',abrirRegalo);
}
const image = document.querySelector('img');
image.addEventListener('click',abrirRegalo);
