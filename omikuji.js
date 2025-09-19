function getRandomImage() {
  const number = Math.floor(Math.random() * 7); // 0〜6
  return "./images/omikuji-" + number + ".png";
}

function playOmikuji() {
  const resultImg = document.querySelector("#js-result");

  // 100msごとに画像を切り替えてスロット風にする
  const slotAnimationTimer = setInterval(function () {
    resultImg.setAttribute("src", getRandomImage());
  }, 100);

  // 3秒後に止めて、そのときの画像を固定する
  setTimeout(function () {
    clearInterval(slotAnimationTimer);
    resultImg.setAttribute("src", getRandomImage());
  }, 3000);
}

document.querySelector("#js-button").addEventListener("click", playOmikuji);
