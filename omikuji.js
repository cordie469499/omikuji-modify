function getRandomImage() {
  const number = Math.floor(Math.random() * 7); // 0〜6
  return "./omikuji-" + number + ".png"; // ./ を明示
}

function playOmikuji() {
  const resultImg = document.querySelector("#js-result");

  const slotAnimationTimer = setInterval(function () {
    resultImg.setAttribute("src", getRandomImage());
  }, 100);

  setTimeout(function () {
    clearInterval(slotAnimationTimer);
    resultImg.setAttribute("src", getRandomImage());
  }, 3000);
}

document.querySelector("#js-button").addEventListener("click", playOmikuji);
