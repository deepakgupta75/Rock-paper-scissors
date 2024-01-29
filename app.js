let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara  = document.querySelector("#user-score");
const CompScorepara  = document.querySelector("#Comp-score");


const genCompChoice =() => {
    const option =["rock","paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};


const drawgame = () =>{
    // console.log("game was draw.");
    msg.innerText = "Game was Draw. play again";
    msg.style.backgroundColor = "gray";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You win! Congraturation");
        msg.innerText = `You Win! Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        CompScore++;
        CompScorepara.innerText = CompScore;
        // console.log("You failed! Better luck next time");
        msg.innerText = `You lose! ${compChoice} beats Yours ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame =(userChoice) => {
    console.log("user choice =",userChoice)
    //generate computer choice
    const compChoice =genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawgame();
    } 
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissors
            userWin = compChoice === "paper" ?false : true;
        } else if(userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "Scissors" ?false : true;
        } else {
            //rock,paper
            userWin = compChoice ==="rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was selected", userChoice);
        playGame(userChoice);
    });
});