const boardRef = document.querySelector(".board");
const leftRef = document.querySelector(".left");
const rightRef = document.querySelector(".right");
const rockRef = document.querySelector(".rock");
const paperRef = document.querySelector(".paper");
const scissorsRef = document.querySelector(".scissors");
const wonRef = document.querySelector(".score > div:nth-child(1) > span");
const lostRef = document.querySelector(".score > div:nth-child(2) > span");
const drawRef = document.querySelector(".score > div:nth-child(3) > span");
const resultRef = document.querySelector(".result");
const h1 = document.querySelector(".result > h1");
const h3 = document.querySelector(".result > h3");

let won = 0;
let lost = 0;
let draw = 0;

rockRef.addEventListener("click", () => {
  leftRef.style.backgroundImage = "url('rockS.png')";
  leftRef.classList.add("leftRef");
  setTimeout(computer, 1000);
  setTimeout(score, 1000);
});

paperRef.addEventListener("click", () => {
  leftRef.style.backgroundImage = "url('paperS.png')";
  leftRef.classList.add("leftRef");
  setTimeout(computer, 1000);
  setTimeout(score, 1000);
});

scissorsRef.addEventListener("click", () => {
  leftRef.style.backgroundImage = "url('scissorsS.png')";
  leftRef.classList.add("leftRef");
  setTimeout(computer, 1000);
  setTimeout(score, 1000);
});

const computer = () => {
  setTimeout(() => {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
      case 1:
        rightRef.classList.add("rightRef");
        rightRef.style.backgroundImage = "url('paperS.png')";
        break;
      case 2:
        rightRef.classList.add("rightRef");
        rightRef.style.backgroundImage = "url('rockS.png')";
        break;
      case 3:
        rightRef.classList.add("rightRef");
        rightRef.style.backgroundImage = "url('scissorsS.png')";
        break;
    }
  }, 500);
};

const score = () => {
  if (
    (leftRef.style.backgroundImage === 'url("rockS.png")' &&
      rightRef.style.backgroundImage === 'url("scissorsS.png")') ||
    (leftRef.style.backgroundImage === 'url("paperS.png")' &&
      rightRef.style.backgroundImage === 'url("rockS.png")') ||
    (leftRef.style.backgroundImage === 'url("scissorsS.png")' &&
      rightRef.style.backgroundImage === 'url("paperS.png")')
  ) {
    h1.innerText = "You Won!";
    won++;
  } else if (
    (leftRef.style.backgroundImage === 'url("rockS.png")' &&
      rightRef.style.backgroundImage === 'url("rockS.png")') ||
    (leftRef.style.backgroundImage === 'url("paperS.png")' &&
      rightRef.style.backgroundImage === 'url("paperS.png")') ||
    (leftRef.style.backgroundImage === 'url("scissorsS.png")' &&
      rightRef.style.backgroundImage === 'url("scissorsS.png")')
  ) {
    h1.innerText = "Draw!";
    draw++;
  } else {
    lost++;
    h1.innerText = "Lost!";
  }

  // Update score display
  wonRef.innerText = won;
  lostRef.innerText = lost;
  drawRef.innerText = draw;
};
