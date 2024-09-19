function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const choices = ["&#9994;","&#9995;","&#9996;"];
  let computerCount=0,playerCount=0;

  let trackIconsState = () => {
    let currentUserState = document.querySelector(".userH2").innerHTML;
    let currentComputerState = document.querySelector(".computerH2").innerHTML; // fixed typo
    if (currentComputerState == currentUserState) {
        document.querySelector(".updateText").innerHTML = "DRAW";
    } 
    else if (currentUserState == '✊' && currentComputerState == '✋') {
        document.querySelector(".updateText").innerHTML = "COMPUTER WINS";
        computerCount=computerCount + 1;
        document.querySelector('.computer-class').innerHTML=computerCount;
    } 
    else if (currentUserState == '✊' && currentComputerState == '✌') {
        document.querySelector(".updateText").innerHTML = "PLAYER WINS";
        playerCount = playerCount + 1;
        document.querySelector('.player-class').innerHTML=playerCount;
    }
    else if(currentUserState == '✋' && currentComputerState == '✊' ){
      document.querySelector(".updateText").innerHTML = "PLAYER WINS";
      playerCount = playerCount + 1
      document.querySelector('.player-class').innerHTML=playerCount;
    }
    else if(currentUserState == '✋' && currentComputerState == '✌' ){
      document.querySelector(".updateText").innerHTML = "COMPUTER WINS";
      computerCount=computerCount+1
      document.querySelector('.computer-class').innerHTML=computerCount;
    }
    else if(currentUserState == '✌' && currentComputerState == '✊' ){
      document.querySelector(".updateText").innerHTML = "COMPUTER WINS";
      computerCount=computerCount+1
      document.querySelector('.computer-class').innerHTML=computerCount;
    }
    else if(currentUserState == '✌' && currentComputerState == '✋' ){
      document.querySelector(".updateText").innerHTML = "PLAYER WINS";
      playerCount=playerCount+1;
      document.querySelector('.player-class').innerHTML=playerCount;
    }

};
let changeItemIcon=(itemReceived)=>{
    //set user icon
    document.querySelector('.userH2').innerHTML = itemReceived
    //randomise
    let randomValue=randomIntFromInterval(0,2);
    //set computer icon
    document.querySelector(".computerH2").innerHTML= choices[randomValue];

    //track state
trackIconsState();
}
