const el = document.getElementById('title');
let t = 0; // tempo / offset

function update() {
  t = (t + 0.6) % 360; // controla velocidade (aumente para ir mais rápido)
  // cria um gradiente com 3 matizes deslocadas
  const g = `linear-gradient(90deg,
    hsl(${t}deg 95% 55%),
    hsl(${(t + 60) % 360}deg 95% 55%),
    hsl(${(t + 120) % 360}deg 95% 55%)
  )`;
  el.style.background = g;
  // background-clip já está no CSS, então só atualizamos o background
  requestAnimationFrame(update);
}

requestAnimationFrame(update);