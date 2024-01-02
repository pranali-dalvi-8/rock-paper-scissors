let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const compScorePara = document.querySelector("#c-score");
const userScorePara = document.querySelector("#u-score");

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText="Draw ! please Try Again."
    msg.style.backgroundcolor = "rgb(4, 4, 152)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log(" You Win !!");
        msg.innerText=`You Win !! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor = "green";
     }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose. ");
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundcolor = "red";
        
    }
};

const genCompChoice=() => {
    const options=["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false : true;
        }else{
            userWin=compChoice==="rock" ? false : true;  
        }
         
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
       
    });
});