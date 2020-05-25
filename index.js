//initialising variables
let playerChoice;
let computerChoice;

const playerFeedback = document.querySelector("#playerMove");
const computerFeedback = document.querySelector("#computerMove");
const result = document.querySelector("#winner");
const resetBtn = document.querySelector("#resetBtn");

//Scores
let playerScore = 0;
let computerScore = 0;
const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");

//Function which randomly generates an option for the computer 
let randomNum = (num) => {
	num = Math.floor(Math.random() * 3) + 1;
	if(num === 1){
	computerFeedback.innerHTML = "Computer chose ROCK";
	num = "rock";
	return num;
	} else if (num === 2){
 			computerFeedback.innerHTML = "Computer chose PAPER";
			num = "paper";
			return num;
	} else {
	computerFeedback.innerHTML = "Computer chose SCISSORS";
	num = "scissors";
	return num;
}
}

//Function which compares two choices and determines who wins
function playGame (choice1, choice2){
	if (choice1 === choice2){
		result.innerHTML = "It's a tie!";
		playerScore += 1;
		computerScore += 1;
	} else if (choice1 === "rock"){
		if (choice2 === "scissors"){
			result.innerHTML = "You win";
			playerScore += 1;
			}
		if (choice2 === "paper"){
			result.innerHTML = "Computer wins";
			computerScore += 1;
		}
	
		
	} else if (choice1 === "paper"){
		if (choice2 === "rock"){
			result.innerHTML = "You win";
			playerScore += 1;
		}
		if (choice2 === "scissors"){
			result.innerHTML = "Computer wins";
			computerScore += 1;
		}
	} else if (choice1 === "scissors"){
		if (choice2 === "rock"){
			result.innerHTML = "Computer wins";
			computerScore += 1;
		}
		if (choice2 === "paper"){
			result.innerHTML = "You win";
			playerScore += 1;
		}
	}
	pScore.innerHTML = playerScore;
	cScore.innerHTML = computerScore;
	result.classList.add("bounce-top");
	
	
	if (playerScore >= 100 || computerScore >= 100){
		alert("Maximum score has been reached. Scoreboard will be reset for next round.");
			playerScore = 0;
			computerScore = 0;
	}
	document.querySelector("#wait").classList.add("hideTxt");
document.querySelector("p").classList.add("hideTxt");
resetBtn.classList.remove("hideTxt");
}

//Event handling for when player chooses rock
document.querySelector("#rock").addEventListener("click", function(){
	playerFeedback.innerHTML = "You chose ROCK";
	playerFeedback.classList.add("tracking-in-expand");
	playerChoice = "rock";
	computerChoice = randomNum();
	computerFeedback.classList.add("tracking-in-expand");
	playGame(playerChoice, computerChoice);
});


//Event handling for when player chooses paper
document.querySelector("#paper").addEventListener("click", function(){
	playerFeedback.innerHTML = "You chose PAPER";
	playerChoice = "paper";
	playerFeedback.classList.add("tracking-in-expand");
	computerChoice = randomNum();
	computerFeedback.classList.add("tracking-in-expand");
	playGame(playerChoice, computerChoice);
});

//Event handling for when player chooses scissors
document.querySelector("#scissors").addEventListener("click", function(){
	playerFeedback.innerHTML ="You chose SCISSORS";
	playerChoice = "scissors";
	playerFeedback.classList.add("tracking-in-expand");
	computerChoice = randomNum();
	computerFeedback.classList.add("tracking-in-expand");
	playGame(playerChoice, computerChoice);
});


//Event handling for score reset
resetBtn.addEventListener("click", function(){
	playerScore = 0;
		computerScore = 0;
		pScore.innerHTML = playerScore;
		cScore.innerHTML = computerScore;
		result.innerHTML = "Scoreboard reset";
		playerFeedback.innerHTML = "Pick a move to play again";
		computerFeedback.innerHTML = "";
		
});

//Removing animation after it has ended so it can be added again for the next move
playerFeedback.onanimationend = () => {
  playerFeedback.classList.remove("tracking-in-expand");
};

computerFeedback.onanimationend = () => {
  computerFeedback.classList.remove("tracking-in-expand");
};

result.onanimationend = () => {
  result.classList.remove("bounce-top");
};
