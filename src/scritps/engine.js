const state = {
    view:{
        squares:document.querySelectorAll(".square"),
        enemy:document.querySelector(".enemy"),
        timeLeft:document.querySelector("#time-left"),
        score:document.querySelector("#score"),
    },
    values:{
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    },
    actions:{
        timerId: setInterval(randomSquare, 1000),
        countdownTimeId: setInterval(countdown, 1000),
    }
};


function playSound() {
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.2;
    audio.play();
}


function countdown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if (state.values.curretTime <= 0){
        clearInterval(state.actions.countdownTimeId);
        clearInterval(state.actions.timerId);
        alert("Gamer Over! O seu resultado foi:" + state.values.result);
    }
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

      let randomNumber = Math.floor(Math.random() * 9);
      let randomSquare = state.view.squares[randomNumber]
      randomSquare.classList.add("enemy");
      state.values.hitPosition = randomSquare.id;
}

function addListenerHitbox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () =>{
            if(square.id === state.values.hitPosition){
               state.values.result++
               state.view.score.textContent = state.values.result;
               state.values.hitPosition = null;
               playSound();
            } 
            
        })
    });
    
}

function main() {}
  addListenerHitbox();
main();