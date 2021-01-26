function play(playersChoice){}
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