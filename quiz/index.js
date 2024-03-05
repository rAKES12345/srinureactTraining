const timer = document.querySelector(".timer");
const main = document.querySelector("main");
const submit = document.querySelector("#submit");
const oneStyle=document.querySelector("#three");
const twoStyle=document.querySelector("#five");

let i = 300;
let s=0;
const options1 = document.querySelectorAll(".first_options>span");
const options2 = document.querySelectorAll(".second_options>span");

const submitQuiz = () => {
    clearInterval(returnInterval);
    const parentElement = document.createElement("div");
    const testCompleted = document.createElement("div");
    const resetBtn = document.createElement("button");
    const score = document.createElement("div");
    main.innerHTML = "";
    testCompleted.innerText = "Time Out!";
    score.innerText = `Your score ${s}`;
    resetBtn.innerText = "Restart Quiz";
    resetBtn.addEventListener("click", () => {
        window.location.reload();
    });
    main.appendChild(parentElement);
    parentElement.appendChild(testCompleted);
    testCompleted.appendChild(score);
    testCompleted.appendChild(resetBtn);
    parentElement.setAttribute("class", "parent");
    testCompleted.setAttribute("class", "timeOut");
    score.setAttribute("class", "score");
    resetBtn.setAttribute("class", "reset");
}

let returnInterval = setInterval(function () {
    timer.innerText = i--;
    if (i < 0) {
        submitQuiz();
    }
}, 1000);

submit.addEventListener("click", () => {
    s = 0; // Reset score before calculating
    if (oneStyle.getAttribute("class")=== "selectedOption") {
        s++;
    }
    if (twoStyle.getAttribute("class")=== "selectedOption") {
        s++;
    }
    submitQuiz();
});

options1.forEach(option => {
    option.addEventListener("click", (event) => {
        const activeOption = document.querySelector(".first_options>span.selectedOption");
        if (activeOption) {
            activeOption.classList.remove("selectedOption");
        }
        event.target.classList.add("selectedOption");
    });
});
options2.forEach(option => {
    option.addEventListener("click", (event) => {
        const activeOption = document.querySelector(".second_options>span.selectedOption");
        if (activeOption) {
            activeOption.classList.remove("selectedOption");
        }
        event.target.classList.add("selectedOption");
    });
});


