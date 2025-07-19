const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const music = document.getElementById("bg-music");
const volumePopup = document.getElementById("volume-popup");

setTimeout(() => {
  volumePopup.style.display = "none";
}, 3000);

yesBtn.addEventListener("click", () => {
  music.play();
  setTimeout(() => {
    window.location.href = "surprise.html";
  }, 1000);
});

noBtn.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 120));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 60));
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
