const numGame = document.querySelector("#numGame");
const endNum = document.querySelector("#endNum");
const guessNum = document.querySelector("#guessNum");
const choseNum = document.querySelector("#choseNum");
const winOrLose = document.querySelector("#winOrLose");
const gameResult = document.querySelector("#gameResult");

function handlNumGame(event) {
    event.preventDefault();
    gameResult.classList.remove("hidden");
    const guessNumVal = parseInt(guessNum.value);
    const endNumVal = parseInt(endNum.value);
    const randomNum = Math.ceil(Math.random() * endNumVal);
    choseNum.innerText = `You chose : ${guessNumVal}, the machine chose : ${randomNum}.`;
    console.log(guessNumVal, randomNum);
    
    if (guessNumVal===randomNum) {
        winOrLose.innerText = "You Won!";
    } else {
        winOrLose.innerText = "You lost!";
    }
}

numGame.addEventListener("submit", handlNumGame);