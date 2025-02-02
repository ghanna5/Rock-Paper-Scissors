let score = (JSON.parse(localStorage.getItem('score')))

            function updateScoreElement()
            {
                document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
            }

            if (score == null)
            {
                score = 
                {
                    wins: 0,
                    losses: 0,
                    ties: 0
                }
            }
        
            function resetGame()
            {
                score.wins = 0
                score.losses = 0
                score.ties = 0

                localStorage.removeItem('score')

                console.log(score)
                updateScoreElement()
                document.querySelector('.js-result').innerHTML = ''
                document.querySelector('.js-moves').innerHTML = ''
            }

            function gameDecision(playerChoice)
            {
                let computerMove = ""
                let randomNumber = Math.random()
                let result = ""

                if(randomNumber <= (1 / 3))
                { 
                    computerMove = 'rock'
                }

                else if (randomNumber <= (2 / 3))
                {
                    computerMove = 'paper'
                }
                
                else
                {
                    computerMove = 'scissors'
                }

                if (playerChoice == computerMove)
                {
                    result = 'Tie.'
                }

                else if ((playerChoice == 'rock' && computerMove == 'paper') || 
                         (playerChoice == 'paper' && computerMove == 'scissors') || 
                         (playerChoice == 'scissors' && computerMove == 'rock'))
                {
                    result = 'You lose.'
                }

                else
                {
                    result = 'You win.'
                }


                if (result == 'You win.')
                {
                    score.wins += 1
                }

                else if (result == 'You lose.')
                {
                    score.losses += 1
                }

                else
                {
                    score.ties += 1
                }

                localStorage.setItem('score', JSON.stringify(score))

                document.querySelector('.js-result').innerHTML = result
                document.querySelector('.js-moves').innerHTML = `You <img src = "images/${playerChoice}-emoji.png" class = "move-icon">
                                                                <img src = "images/${computerMove}-emoji.png" class = "move-icon">
                                                                Computer`

                updateScoreElement()
                console.log(score)
                //alert(`You picked ${playerChoice.toUpperCase()}. Computer picked ${computerMove.toUpperCase()}. ${result}\n\nWins: ${score.wins}\nLosses: ${score.losses}\nTies: ${score.ties}`)
            }