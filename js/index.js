const elements = [
    {
        "name": "rock",
        "beats": ["scissors", "lizard"],
    },
    {
        "name": "paper",
        "beats": ["rock", "spock"],
    },
    {
        "name": "scissors",
        "beats": ["paper", "lizard"],
    },
    {
        "name": "lizard",
        "beats": ["spock", "paper"],
    },
    {
        "name": "spock",
        "beats": ["scissors", "rock"],
    }
];

const elementsButtons = document.querySelectorAll(".shapes .shape");
for (var i = 0; i < elementsButtons.length; i++) {
    elementsButtons[i].addEventListener("click", function () {
        const choice = this.classList[1];
        // console.log(this.classList[1]);
        play(choice);
    });
}

function search(nameToSearch) {
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name === nameToSearch) {
            return elements[i];
        }
    }
}

function checkScore() {
    const spanScore = document.querySelector(".score");
    if (localStorage.score === undefined) {
        localStorage.score = "0";
    } else {
        spanScore.textContent = localStorage.score;
    }
}

function updateScore() {
    var score = parseInt(localStorage.score);
    const spanScore = document.querySelector(".score");

    score++;

    localStorage.score = score.toString();
    spanScore.textContent = score;
}

function play(usersChoice) {
    const shapes = document.querySelector(".shapes");
    const randomNumber = parseInt(Math.floor(Math.random() * 5));
    const computersChoice = elements[randomNumber].name;

    if (search(usersChoice).beats.includes(computersChoice)) {
        showResults("user", usersChoice, computersChoice);
        console.log("user wins");
        updateScore();
    } else if (search(computersChoice).beats.includes(usersChoice)) {
        showResults("computer", usersChoice, computersChoice);
        console.log("computer wins");
    } else {
        showResults("tie", usersChoice, computersChoice);
        console.log("it's a tie");
    }

    shapes.classList.add("invisible");
}

function showResults(winner, usersChoice, computersChoice) {
    const choices = document.querySelector(".choices");
    const btnUsersChoice = document.querySelector("#users-choice");
    const btnComputersChoice = document.querySelector("#computers-choice");
    const result = document.querySelector(".result");
    const spanWin = document.querySelector(".win");
    const spanLose = document.querySelector(".lose");
    const spanTie = document.querySelector(".tie");
    //
    btnUsersChoice.classList.remove("unknown");
    btnUsersChoice.classList.add(usersChoice);
    btnUsersChoice.innerHTML = '<img src="images/icon-' + usersChoice + '.svg" alt="' + usersChoice + '">';

    btnComputersChoice.classList.remove('unkonwn');
    btnComputersChoice.classList.add(computersChoice);
    btnComputersChoice.innerHTML = '<img src="images/icon-' + computersChoice + '.svg" alt="' + computersChoice + '">';

    choices.classList.remove("invisible");
    result.classList.remove("invisible");
    //
    if (winner === "user") {
        spanLose.classList.add("invisible");
        spanTie.classList.add("invisible");
    } else if (winner === "computer") {
        spanWin.classList.add("invisible");
        spanTie.classList.add("invisible");
    } else {
        spanWin.classList.add("invisible");
        spanLose.classList.add("invisible");
    }
}

function playAgain() {
    const shapes = document.querySelector(".shapes");
    const choices = document.querySelector(".choices");
    const result = document.querySelector(".result");
    const spanWin = document.querySelector(".win");
    const spanLose = document.querySelector(".lose");
    const spanTie = document.querySelector(".tie");
    const btnUsersChoice = document.querySelector("#users-choice");
    const btnComputersChoice = document.querySelector("#computers-choice");

    choices.classList.add("invisible");
    result.classList.add("invisible");
    shapes.classList.remove("invisible");

    if (spanWin.classList.contains("invisible")) {
        spanWin.classList.remove("invisible");
    }

    if (spanLose.classList.contains("invisible")) {
        spanLose.classList.remove("invisible");
    }

    if (spanTie.classList.contains("invisible")) {
        spanTie.classList.remove("invisible");
    }

    btnUsersChoice.className = "shape";
    btnUsersChoice.innerHTML = "";

    btnComputersChoice.innerHTML = "";
    btnComputersChoice.className = "shape unknown";
    btnComputersChoice.classList.add("unknown");
}

function toggleShowRules() {
    const btnRules = document.querySelector(".modal");

    btnRules.classList.toggle("invisible")
}