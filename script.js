// Typing Effect
const text = ["Computer Science Student", "MERN Stack Developer", "AI Enthusiast"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++; index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 100);
  }
})();

// Subdued Matrix Effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const characters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(10, 10, 10, 0.1)"; // Darker trail for less distraction
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff41";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const char = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(char, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.98) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(draw, 50); // Slower speed
