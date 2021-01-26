const elements = [
    {
        "name": "rock",
        "beats": ["scissors","lizard"],
    },
    {
        "name": "paper",
        "beats": ["rock","spock"],
    },
    {
        "name": "scissors",
        "beats": ["paper","lizard"],
    },
    {
        "name": "lizard",
        "beats": ["spock","paper"],
    },
    {
        "name": "spock",
        "beats": ["scissors","rock"],
    }
];

const elementsButtons = document.querySelectorAll(".shapes .shape");
for (var i = 0; i < elementsButtons.length; i++) {
    elementsButtons[i].addEventListener("click", function (){
        const choice = this.classList[1];
        // console.log(this.classList[1]);
        play(choice);
    });
}

function play(usersChoice){}

function playAgain(){
    const spanWin = document.querySelector(".win");
    const spanLose = document.querySelector(".lose");
    const btnComputersChoice = document.querySelector("#computersChoice")

    document.querySelector(".result").classList.add("invisible");
    document.querySelector(".shapes").classList.remove("invisible");

    if (!spanWin.classList.contains("invisible")){
        spanWin.classList.add("invisible");
    }

    if (!spanLose.classList.contains("invisible")){
        spanLose.classList.add("invisible");
    }

    btnComputersChoice.innerHTML = "";
    btnComputersChoice.classList.add("unknown");
}

function toggleShowRules(){
    const btnRules = document.querySelector(".modal");

    btnRules.classList.toggle("invisible")
}