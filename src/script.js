

let startButton = document.querySelector(".start-button")
let startWrapper = document.querySelector(".start-wrapper")
let quizWrapper = document.querySelector(".quiz-wrapper")
let questionHeading = document.querySelector(".question-heading")
let answerbutton = document.querySelectorAll(".answer-row > button")


const signs = ["-", "+"]

function startGame() {
    startWrapper.classList.add("hide");
    quizWrapper.classList.remove("hide");
    generateQuestion()
};


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function calc(num1, num2, sing) {
    if (sing === "+") {
        return num1 + num2;
    } else {
        return num1 - num2
    }

}



function generateQuestion() {
    let num1 = getRandomInt(50);
    let num2 = getRandomInt(50);
    let sing = signs[getRandomInt(2)];
    let randomAnswerNumber = getRandomInt(5);
    questionHeading.innerHTML = `${num1} ${sing} ${num2}`;

    for (let i = 0; i < answerbutton.length; i += 1) {
        if (i === randomAnswerNumber) {
            answerbutton[i].innerHTML = calc(num1, num2, sing);
            answerbutton[i].classList.add("right");
        } else {
            answerbutton[i].innerHTML = getRandomInt(100);
            answerbutton[i].classList.add("wrong");
        }
    }
}

function removeClasses() {
    for (let i = 0; i < answerbutton.length; i += 1) {
        if (answerbutton[i].classList.contains("right")) {
            answerbutton[i].classList.remove("right");
        }

        if (answerbutton[i].classList.contains("wrong")) {
            answerbutton[i].classList.remove("wrong");
        }
    }
}



for (let i = 0; i < buttons.length; i += 1) {
    buttons.addEventListener("click", ...(i))
}

function changeCounter(item) {
    return function {
        if (item === randomAnswerNumber) {
            correct += 1
        } else {
            wrong += 1
        }
    }

}




startButton.addEventListener("click", startGame);

for (let i = 0; 1 < answerbutton.length; i += 1) {
    answerbutton[i].addEventListener("click", generateQuestion);
}

for (let i = 0; answerbutton.length; i += 2) {
    answerbutton[i].addEventListener("mousep", removeClasses);
}