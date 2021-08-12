// function game() {
//     const games = 5;
//     let playerPoints = 0;
//     let computerPoints = 0;
//     // this is the quantity of rounds the game contains

//     for (let i =0; i < games; i++) {
//         let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
//         // ^^ this is the playerSelection ^^

//         function computerPlay() {
//          return (["paper","scissors","rock"])[Math.random() * 3 | 0];
//         }
//         let computerSelection = computerPlay();
//         // ^^ this is the computerSelection ^^

//         let round = playRound(playerSelection, computerSelection);
//         if(round === "wins"){
//             playerpoints++;
//             console.log("You Win");
//         } else if(round === "loses"){
//             console.log("You Lose");
//         } else if(round === "ties"){
//             console.log("ties");
//         }
//     }   // this is the rounds ^^

//     if (playerpoints > computerPoints){
//         console.log('');
//         console.log("Congratuatlions! You beat the computer "
//                     + playerpoints + " to " + computerPoints);
//         } else {
//             console.log("Sorry! You lost to the computer "
//                     + computerPoints + " to " + playerPoints);   
//         }
//     }

// function playRound(playerSelection, computerSelection){

//     if (playerSelection == 'rock'){
//         if (computerSelection == 'scissors'){
//             return("You win! Rock beats scissors");
//         } else if (computerSelection = 'paper'){
//             return("You lose! Paper beats rock!");
//         } else if (computerSelection == 'rock'){
//             return("It's a tie! Computer picked rock");
//         }
//     }

//     if (playerSelection == 'paper'){
//         if (computerSelection == 'rock'){
//             return("You win! Paper beats rock");
//         } else if (computerSelection = 'scissors'){
//             return("You lose! Scissors beats paper");
//         } else if (computerSelection == 'paper'){
//             return("It's a tie! Computer picked paper");
//         }
//     }

//     if (playerSelection == 'scissors'){
//         if (computerSelection == 'paper'){
//             return("You win! Scissors beats paper");
//         } else if (computerSelection = 'rock'){
//             return("You lose! Rock beats scissors");
//         } else if (computerSelection == 'scissors'){
//             return("It's a tie! Computer picked scissors");
//         }
//     }
// }
// // this is the final verdict


function game(){
    const games = 5; // total games 
    let playerPoints = 0; // player points to start
    let computerPoints = 0; // computer points to start
  
    for(let i = 0; i < games; i++) {
      // get player answer and store in a variable
      let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
      // generate computer answer
      function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
      let computerSelection = computerPlay();
  
      let round = playRound(playerSelection, computerSelection);
      if(round === "wins"){
        playerPoints++;
        console.log("You Win");
      } else if(round === "loses"){
        computerPoints++;
        console.log("You Lose");
      } else if(round === "ties") {
        console.log("tied");
      } 
    }
  
    if(playerPoints > computerPoints){
      console.log('');
      console.log("Congratulations!  You beat the computer " + playerPoints + " to " + computerPoints);
    } else if (playerPoints == computerPoints){
      console.log('It\'s a draw!');
    } else {
      console.log("Sorry!  You lost to the computer " + computerPoints + " to " + playerPoints);
    }
  } // end game();
  
  // play a round and get winner/loser and result and increment winner's points
  function playRound(playerSelection, computerSelection) {  
    if (playerSelection == 'rock') {
      if (computerSelection == 'scissors') {
        return 'wins';
      } else if (computerSelection == 'paper') {
        return 'loses';
      } else {
        return 'ties';
      } 
    }
    if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        return 'wins';
      } else if (computerSelection == 'scissors') {
        return 'loses';
      } else {
        return 'ties';
      } 
    }
    if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        return 'loses';
      } else if (computerSelection == 'paper') {
        return 'wins';
      } else {
        return 'ties';
      } 
    }
  }

  game();