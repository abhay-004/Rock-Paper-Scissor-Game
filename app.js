let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    msg.innerText="Game Draw ,Play again";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`You lose ! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
};
const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const playGame = (userChoice)=>{
    // console.log("user choice = ",userChoice);

    //Generate Computer Choice
    const compChoice = genCompChoice();
    // console.log("Computer choice = ", compChoice);

    if(userChoice===compChoice){
        //Draw game
        drawGame(); 
    }else{
        userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissors"?false:true;
        }else{
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});