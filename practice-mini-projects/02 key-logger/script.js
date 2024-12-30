startBtn = document.getElementById("startbtn");
stopBtn = document.getElementById("stopbtn"); 
orangeLog = document.getElementById("log");
blackLog = document.getElementById("state");

startBtn.addEventListener("click", () =>{
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
})

stopBtn.addEventListener("click", ()=> {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    orangeLog.textContent = "";
    blackLog.textContent = " ";
})

function handleDown(e) {
    console.log(`Key ${e.key} is down`);
    orangeLog.textContent = `Key ${e.key} is pressed.`;
    blackLog.textContent = `key is down`;
}

function handleUp(e) {
    orangeLog.textContent = `Key ${e.key} is pressed.`;
    blackLog.textContent = `key is up.`;
}