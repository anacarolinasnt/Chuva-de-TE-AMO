const canvas = document.getElementById('teAmoCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frase = 'TE AMO';
const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = [];


for (let x = 0; x < columns; x++) {
  drops[x] = -Math.random() * 20;  
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ff0000';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = frase;
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.995) {
      drops[i] = 0;
    }

    drops[i] += 1; 
  }
}

setInterval(draw, 100);
