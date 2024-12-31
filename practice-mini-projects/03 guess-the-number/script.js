`use script`;

let guessBox = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let message = document.querySelector('.message');
let lifeTracker = document.querySelector('.life-tracker');
let heartLeft = document.querySelector('.heart-left');
let displayedGuessNumber = document.querySelector('.number');

let randomNumber = getRandomNumber();
let checkCount = 0;

let modLifeArr;
let lifeArr = ["💗","💗","💗","💗","💗"];
lifeTracker.textContent = "Life left: " + lifeArr;

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

    //Win
    if (guessBox.value == randomNumber){
        console.log("You guessed it right.");
        document.body.style.backgroundColor = "#60b347";
        displayedGuessNumber.textContent = randomNumber;
        message.textContent = "You guessed it right. Press 'Again' to play again.";
        heartLeft.textContent = `You had ${modLifeArr} left.`;
    }
    //Lose
    else {

        message.textContent = "You guessed it wrong.";
        console.log("You guessed it wrong.");
        modLifeArr = lifeArr.slice(0, (-checkCount) - 1);
        lifeTracker.textContent = "Life left: " + modLifeArr;

        if (guessBox.value > randomNumber){
            message.textContent += "📈 Too High.";
        } else {
            message.textContent += "📉 Too Low."
        }

        checkCount++;
    }
}

//Funtion for life of player
function playerlife(life){
    if(life == 5){
        document.body.style.backgroundColor = "#d84040";
        message.textContent = "You Lost. Press 'Again' to continue.";
    }
    else if (life > 5){
        message.textContent = "You Lost. Press 'Again' to continue.";
    }
}

function reset(){
    message.textContent = "Start guessing . . .";
    document.body.style.backgroundColor = "#222";
    guessBox.value = "";
    checkCount = 0;
    randomNumber = getRandomNumber();
    lifeTracker.textContent = "Life left: " + lifeArr;
    heartLeft.textContent = ``;
    displayedGuessNumber.textContent = "?";
}

// Mini-Project Succesfully completed