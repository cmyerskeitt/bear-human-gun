


function playGame(){ 
    let input = prompt('Welcome to Bear, Human, Gun! Please type in one of the choices!')
    let userChoice = getUserchoice(input)
    let computerChoice = getComputerChoice()
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

function getUserchoice(userInput){
    userInput = userInput.toLowerCase()
    if(userInput === 'bear'|| userInput === 'human'|| userInput === 'gun'){
        return userInput
    } else {
        console.log('Please enter one of the following: "Bear", "Human", or "Gun".')
        playGame()
    }
} 


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3 )
    if(randomNumber === 0){
        return "bear"
    } else if (randomNumber === 1){
        return 'human'
    } else {
        return 'gun'
    }
}

function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        console.log('Tie Game!')
        playGame()
    } 
    if (userChoice === 'human'){
        if(computerChoice === 'bear'){
            return 'The computer won!'
        } else {
            return 'The User won!'
        }
    } 
    if (userChoice === 'bear'){
        if(computerChoice === 'gun'){
            return 'The computer won!'
        } else {
            return "The user won!"
        }
    }

    if (userChoice === 'gun'){
        if(computerChoice === 'human'){
            return 'The computer won!'
        } else {
            return "The user won!"
        }
    }
}

playGame()