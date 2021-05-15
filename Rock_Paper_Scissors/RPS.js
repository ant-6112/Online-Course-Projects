function computerPlay(){
    Turn = Math.floor(Math.random()*3);
    if(Turn == 0){
        Turn = 'r';
    }else if(Turn == 1)
    {
        Turn = 'p';
    }else if(Turn == 2){
        Turn = 's';
    }
    return Turn;
}
/*
function Play(playerSelection,computerSelection)
{
    if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors')
    {
        return 'You Win! Rock Beats Scissors';
    }
    else if(playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper')
    {
        return 'You Lose! Paper Beats Rock';
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock')
    {
        return 'You Win! Paper Beats Rock';
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors')
    {
        return 'You Lose! Scissors Beats Paper';
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')
    {
        return 'You Win! Scissors Beats Paper';
    }
    else if(playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock')
    {
        return 'You Lose! Rock Beats Scissors';
    }else if(playerSelection.toLowerCase() == computerSelection)
    {
        return 'It\'s the Same! Try Again';
    }
}

function game()
{
    console.log('Let\'s Play Rock Paper Scissors\n');
    let j = prompt('How many Rounds ?','5');
    console.log('Let\'s Begin!\n');
    let playerScore = 0,computerScore = 0;
    for(let i = 0; i < j;++i)
    {
        console.log(`Your Score: ${playerScore} \nComputer Score: ${computerScore} \nRound ${i+1} \n`);
        let playerSelection = prompt('What Do You Play ?:','Turn');
        let cp = computerPlay();
        console.log(`Player Selection: ${playerSelection.toUpperCase()} \n`);
        console.log(`Computer Selection: ${cp.toUpperCase()} \n`);
        console.log(`${Play(playerSelection,cp)} \n`);
        if(Play(playerSelection,cp).slice(0,8) == 'You Win!')
        {
            playerScore++;
        }else if(Play(playerSelection,cp).slice(0,9) == 'You Lose!'){
            computerScore++;
        }
    }

    console.log(`You Won ${playerScore} Out of ${j} Rounds! \n`)
    if(playerScore > computerScore)
    {
        console.log('You Are The Winner! \n');
    }else if(playerScore < computerScore)
    {
        console.log('You Are The Loser! \n');
    }else{
        console.log('It\'s a Tie! \n');
    }
}

game();
*/
const r = document.createElement('img');
r.src = "rock.png";
r.style.cssText = 'margin: 20px;height:30vh;width:30vh;';
const p = document.createElement('img');
p.src = "paper.png";
p.style.cssText = 'margin: 20px;height:30vh;width:30vh;';
const s = document.createElement('img');
s.src = "scissors.png";
s.style.cssText = 'margin: 20px;height:30vh;width:30vh;';

let rock = document.getElementsByClassName('rock')[0];
let paper = document.getElementsByClassName('paper')[0];
let scissors = document.getElementsByClassName('scissors')[0];

rock.addEventListener('mouseenter',() => {
    document.getElementsByClassName('playerbox')[0].appendChild(r);
});

paper.addEventListener('mouseenter',() => {
    document.getElementsByClassName('playerbox')[0].appendChild(p);
});

scissors.addEventListener('mouseenter',() => {
    document.getElementsByClassName('playerbox')[0].appendChild(s);
});


rock.addEventListener('mouseleave',() => {
    document.getElementsByClassName('playerbox')[0].children[0].remove();
});

paper.addEventListener('mouseleave',() => {
    document.getElementsByClassName('playerbox')[0].children[0].remove();
})

scissors.addEventListener('mouseleave',() => {
    document.getElementsByClassName('playerbox')[0].children[0].remove();
});

rock.addEventListener('click',() => {
    rock.removeEventListener('mouseleave', )
    document.getElementsByClassName('playerbox')[0].appendChild(r);
});

paper.addEventListener('click',() => {
    document.getElementsByClassName('playerbox')[0].appendChild(p);
});

scissors.addEventListener('click',() => {
    document.getElementsByClassName('playerbox')[0].appendChild(s);
});

const Fight = document.getElementsByClassName('Fight')[0];
Fight.onclick = () => {
    document.getElementsByClassName('robotbox')[0].appendChild(eval(computerPlay()));
}