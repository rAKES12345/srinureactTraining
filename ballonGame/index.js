const arrowRef = document.querySelector(".arrow");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const chance = document.querySelector(".chances>span");
const score = document.querySelector(".score>span");
let chancesLeft = 3;
let gameScore = 0;
let topValue = 10;
let leftValue = 10;
let returnInterval;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        topValue -= 5;
        arrowRef.style.top = topValue + "px";
    } else if (event.key === "ArrowDown") {
        topValue += 5;
        arrowRef.style.top = topValue + "px";
    }
});

document.addEventListener("keypress", () => {
    clearInterval(returnInterval);
    leftValue = 10; // Reset leftValue when arrow is launched
    returnInterval = setInterval(() => {
        arrowRef.style.left = leftValue++ + "px";
        if (leftValue > 410) {
            clearInterval(returnInterval);
        }
        checkCollisions();
    }, 10);
});

function checkCollisions() {
    if (topValue > 30 && topValue < 120 && leftValue >= 400) {
        b1.style.display = "none";
        updateScore();
    } else if (topValue >= 160 && topValue <= 250 && leftValue >= 370) {
        b2.style.display = "none";
        updateScore();
    } else if (topValue >= 330 && topValue <= 410 && leftValue >= 400) {
        b3.style.display = "none";
        updateScore();
    }
}

function updateScore() {
    chancesLeft -= 1;
    gameScore += 1;
    chance.innerText = chancesLeft;
    score.innerText = gameScore;
}
