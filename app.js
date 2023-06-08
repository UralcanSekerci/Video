const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")



btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.play();
    header.classList.add("hide-header");
    h1.classList.add("none");
    h1.style.animation = "drop .5s ease";
    play.style.color = "black"
    pause.style.color = "white"




  } else {
    btn.classList.remove("slide");
    video.pause();
    header.classList.remove("hide-header");
    h1.classList.remove("none");
    play.style.color = "white"
    pause.style.color = "black"
  }
});

const text = h1.textContent;
h1.textContent = "";

function showHeaderText() {
  for (let i = 0; i < text.length; i++) {
    const letter = document.createElement("span");
    letter.textContent = text[i];
    letter.style.animation = `mirror 0.5s ease ${i * 0.05}s backwards`;

    h1.appendChild(letter);
  }
}

const preloader = document.querySelector(".preloader");

window.addEventListener("DOMContentLoaded", () => {
  showHeaderText();
  preloader.classList.add("hide-preloader");
});
