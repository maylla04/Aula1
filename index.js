const img = document.getElementById("img");

function move() {
  const x = Math.sin(Date.now() / 400) * 15;  // horizontal
  const y = Math.cos(Date.now() / 500) * 15;  // vertical
  img.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(move);
}

move();