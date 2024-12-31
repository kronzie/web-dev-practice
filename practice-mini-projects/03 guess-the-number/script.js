`use script`;

let guessBox = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let message = document.querySelector('.message');

let randomNumber = getRandomNumber();
let checkCount = 0;

checkBtn.addEventListener("click", () =>{
    console.log("Check count is " + checkCount);
    console.log("Random Number generated is " + randomNumber);
    console.log("Value Player guessed is " + guessBox.value);
    checkGuessedNumber();
    playerlife(checkCount);
})

againBtn.addEventListener("click", () =>{
    reset();
});    

function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

function checkGuessedNumber (){
    if (guessBox.value == randomNumber){
        console.log("You guessed it right.");
        document.body.style.backgroundColor = "#60b347";
        message.textContent = "You guessed it right. Press 'Again' to play again.";
    }
    else {
        message.textContent = "You guessed it wrong.";
        console.log("You guessed it wrong.");
        checkCount++;
    }
}

function playerlife(life){
    if(life == 3){
        document.body.style.backgroundColor = "#d84040";
        message.textContent = "You Lost. Press 'Again' to continue.";
    }
}

function reset(){
    message.textContent = "Start guessing . . .";
    document.body.style.backgroundColor = "#222";
    guessBox.value = "";
    checkCount = 0;
    randomNumber = getRandomNumber();
}