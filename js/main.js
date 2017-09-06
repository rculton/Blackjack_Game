//Card ID array, this is a new deck order index to be used with the cards object
var cardIDs = []
for (var i = 0; i< 52; i++)
    {
        cardIDs.push(i)
    }

//List of Cards, these are in New Deck Order and indexed with cardIDs
var cards = [{
    rank: 'ace',
    suit: 'hearts',
    faceImg: 'images/ace_of_hearts.svg',
    value: 11
    },
    {
        rank: 'two',
        suit: 'hearts',
        faceImg: 'images/2_of_hearts.svg',
        value: 2
    },
    {
        rank: 'three',
        suit: 'hearts',
        faceImg: 'images/3_of_hearts.svg',
        value: 3
    },
    {
        rank: 'four',
        suit: 'hearts',
        faceImg: 'images/4_of_hearts.svg',
        value: 4
    },
    {
        rank: 'five',
        suit: 'hearts',
        faceImg: 'images/5_of_hearts.svg',
        value: 5
    },
    {
        rank: 'six',
        suit: 'hearts',
        faceImg: 'images/6_of_hearts.svg',
        value: 6
    },
    {
        rank: 'seven',
        suit: 'hearts',
        faceImg: 'images/7_of_hearts.svg',
        value: 7
    },
    {
        rank: 'eight',
        suit: 'hearts',
        faceImg: 'images/8_of_hearts.svg',
        value: 8
    },
    {
        rank: 'nine',
        suit: 'hearts',
        faceImg: 'images/9_of_hearts.svg',
        value: 9
    },
    {
        rank: 'ten',
        suit: 'hearts',
        faceImg: 'images/10_of_hearts.svg',
        value: 10
    },
    {
        rank: 'jack',
        suit: 'hearts',
        faceImg: 'images/jack_of_hearts.svg',
        value: 10
    },
    {
        rank: 'queen',
        suit: 'hearts',
        faceImg: 'images/queen_of_hearts.svg',
        value: 10
    },
    {
        rank: 'king',
        suit: 'hearts',
        faceImg: 'images/king_of_hearts.svg',
        value: 10
    },
    {
        rank: 'ace',
        suit: 'clubs',
        faceImg: 'images/ace_of_clubs.svg',
        value: 11
    },
    {
        rank: 'two',
        suit: 'clubs',
        faceImg: 'images/2_of_clubs.svg',
        value: 2
    },
    {
        rank: 'three',
        suit: 'clubs',
        faceImg: 'images/3_of_clubs.svg',
        value: 3
    },
    {
        rank: 'four',
        suit: 'clubs',
        faceImg: 'images/4_of_clubs.svg',
        value: 4
    },
    {
        rank: 'five',
        suit: 'clubs',
        faceImg: 'images/5_of_clubs.svg',
        value: 5
    },
    {
        rank: 'six',
        suit: 'clubs',
        faceImg: 'images/6_of_clubs.svg',
        value: 6
    },
    {
        rank: 'seven',
        suit: 'clubs',
        faceImg: 'images/7_of_clubs.svg',
        value: 7
    },
    {
        rank: 'eight',
        suit: 'clubs',
        faceImg: 'images/8_of_clubs.svg',
        value: 8
    },
    {
        rank: 'nine',
        suit: 'clubs',
        faceImg: 'images/9_of_clubs.svg',
        value: 9
    },
    {
        rank: 'ten',
        suit: 'clubs',
        faceImg: 'images/10_of_clubs.svg',
        value: 10
    },
    {
        rank: 'jack',
        suit: 'clubs',
        faceImg: 'images/jack_of_clubs.svg',
        value: 10
    },
    {
        rank: 'queen',
        suit: 'clubs',
        faceImg: 'images/queen_of_clubs.svg',
        value: 10
    },
    {
        rank: 'king',
        suit: 'clubs',
        faceImg: 'images/king_of_clubs.svg',
        value: 10
    },
    {
        rank: 'ace',
        suit: 'diamonds',
        faceImg: 'images/ace_of_diamonds.svg',
        value: 11
    },
    {
        rank: 'two',
        suit: 'diamonds',
        faceImg: 'images/2_of_diamonds.svg',
        value: 2
    },
    {
        rank: 'three',
        suit: 'diamonds',
        faceImg: 'images/3_of_diamonds.svg',
        value: 3
    },
    {
        rank: 'four',
        suit: 'diamonds',
        faceImg: 'images/4_of_diamonds.svg',
        value: 4
    },
    {
        rank: 'five',
        suit: 'diamonds',
        faceImg: 'images/5_of_diamonds.svg',
        value: 5
    },
    {
        rank: 'six',
        suit: 'diamonds',
        faceImg: 'images/6_of_diamonds.svg',
        value: 6
    },
    {
        rank: 'seven',
        suit: 'diamonds',
        faceImg: 'images/7_of_diamonds.svg',
        value: 7
    },
    {
        rank: 'eight',
        suit: 'diamonds',
        faceImg: 'images/8_of_diamonds.svg',
        value: 8
    },
    {
        rank: 'nine',
        suit: 'diamonds',
        faceImg: 'images/9_of_diamonds.svg',
        value: 9
    },
    {
        rank: 'ten',
        suit: 'diamonds',
        faceImg: 'images/10_of_diamonds.svg',
        value: 10
    },
    {
        rank: 'jack',
        suit: 'diamonds',
        faceImg: 'images/jack_of_diamonds.svg',
        value: 10
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        faceImg: 'images/queen_of_diamonds.svg',
        value: 10
    },
    {
        rank: 'king',
        suit: 'diamonds',
        faceImg: 'images/king_of_diamonds.svg',
        value: 10
    },
    {
        rank: 'ace',
        suit: 'spades',
        faceImg: 'images/ace_of_spades.svg',
        value: 11
    },
    {
        rank: 'two',
        suit: 'spades',
        faceImg: 'images/2_of_spades.svg',
        value: 2
    },
    {
        rank: 'three',
        suit: 'spades',
        faceImg: 'images/3_of_spades.svg',
        value: 3
    },
    {
        rank: 'four',
        suit: 'spades',
        faceImg: 'images/4_of_spades.svg',
        value: 4
    },
    {
        rank: 'five',
        suit: 'spades',
        faceImg: 'images/5_of_spades.svg',
        value: 5
    },
    {
        rank: 'six',
        suit: 'spades',
        faceImg: 'images/6_of_spades.svg',
        value: 6
    },
    {
        rank: 'seven',
        suit: 'spades',
        faceImg: 'images/7_of_spades.svg',
        value: 7
    },
    {
        rank: 'eight',
        suit: 'spades',
        faceImg: 'images/8_of_spades.svg',
        value: 8
    },
    {
        rank: 'nine',
        suit: 'spades',
        faceImg: 'images/9_of_spades.svg',
        value: 9
    },
    {
        rank: 'ten',
        suit: 'spades',
        faceImg: 'images/10_of_spades.svg',
        value: 10
    },
    {
        rank: 'jack',
        suit: 'spades',
        faceImg: 'images/jack_of_spades.svg',
        value: 10
    },
    {
        rank: 'queen',
        suit: 'spades',
        faceImg: 'images/queen_of_spades.svg',
        value: 10
    },
    {
        rank: 'king',
        suit: 'spades',
        faceImg: 'images/king_of_spades.svg',
        value: 10
    }]

//
var newDeck = false
var playIndex = 0
var game = {
    //create a list of players with properties
    player: [{
            name: 'Player 1',
            index: 0,
            hand: [],
            handValue: 0,
            score: 0,
            busted: false,
        },
        {
            name: 'Player 2',
            index: 1,
            hand: [],
            handValue:0,
            score: 0,
            busted: false,
        },
        {
            name:'House',
            index: 2,
            hand: [],
            handValue: 0,
            score: 0,
            busted: false,
        }],
    //a function to shuffle our card index    
    shuffle: function(){

            var cloneArray = []
            //populate the clone
            for (var i = 0; i< 52; i++)
                {
                    cloneArray.push(cardIDs[i])
                }
            shuffleArray = []
            var randomCard
            for (var i=0; i<52; i++){
                randomCard = Math.floor(Math.random()*cloneArray.length)
                shuffleArray.push(cloneArray[randomCard])
            }           
    },
    //A function to put cards into players "hands"
    deal: function(){
        if(isClickable){    
            game.currentPlayer.hand.push(cards[shuffleArray[0]])
            $gameBoard.append('<img id="" src="' +cards[shuffleArray[0]].faceImg+'"/>')
            shuffleArray.splice(0,1)
            if (shuffleArray[0] === undefined)
            {
                game.shuffle()
                
                   // $(this).text("Deck is out of cards, new deck in play for remainder of round")
                   var $theAlert = $('<h3>Deck is out of cards! New Deck in play for remainder of round!</h3>')
                   $theAlert.prependTo($alerts).hide().fadeIn(1000)
                   setTimeout(function() {
                    $alerts.children("h3:first").fadeOut(1000, function(){$(this).remove()})
                  }, 4000);  


                newDeck = true
            }
            for (var i=0; i<game.currentPlayer.hand.length; i++)
                {
                //console.log(game.currentPlayer.name + "'s hand: " + game.currentPlayer.hand[i].rank + " of " + game.currentPlayer.hand[i].suit)
                }
            game.checkBust()
            if(game.currentPlayer != game.player[2] && game.currentPlayer.busted)
                {
                    game.currentPlayer.handValue = 0;

                    game.stay()
                }
            }
    },
    //A function to perform "stay" action. Possible use later when switching between 2 players BEFORE going to house
    stay: function(){
        isClickable=false;
        setTimeout(function() {
            $gameBoard.empty();
          }, 1000);
          setTimeout(function() {
            isClickable=true;
            game.houseRules();
          }, 1001);
    },
    //check for hand value, and if it exceeds 21
    checkBust: function(){
        var totalValue = 0;
        for (var i=0; i<game.currentPlayer.hand.length; i++)
            {
               totalValue += game.currentPlayer.hand[i].value
            }
        if (totalValue > 21)
            {
                //Check if there's an ace and reassign the value to 1
                for (var i=0; i<game.currentPlayer.hand.length; i++)
                    {
                        if(game.currentPlayer.hand[i].rank === 'ace' && game.currentPlayer.hand[i].value === 11){
                            game.currentPlayer.hand[i].value=1
                            //Check again
                            game.checkBust()
                            //Do not return to function
                            return;
                        }
    
                    }
                //if there's no ace, then the player has busted and the function is over
                //Bust Actions
                //
                //
                isClickable=false;
                game.currentPlayer.handValue = totalValue
                $handValue.text('Hand Value: '+ game.currentPlayer.handValue)
                var $theAlert = $('<h2>' + game.currentPlayer.name.toUpperCase() +' BUST!</h2>')
                $theAlert.prependTo($alerts).hide().slideDown(500, function(){
                    $alerts.children("h2:first").fadeOut(1000, function(){$(this).remove();
                        isClickable=true;})
                }) 
                game.currentPlayer.busted = true;

                setTimeout(function(){$gameBoard.empty()},1000)
                return;
            }
        else{
            //Player has not busted
            game.currentPlayer.handValue = totalValue
            $handValue.text('Hand Value: '+ game.currentPlayer.handValue)
            game.currentPlayer.busted = false;
            return;
        }
    },
    //Update the score of the players during round
    updateScore: function(){
            game.currentPlayer.score += 1
            $p1Score.text('Current Round Score: ' + game.player[0].score)
            $p2Score.text('Current Round Score: ' + game.player[1].score)
    },
    //Update the win count, and reset the scores
    updateWins: function(){
        debugger
        if(game.player[0].score > game.player[1].score){
            p1Score +=1
            $p1Wins.text("Player 1 Wins: "+ p1Score)
        }
        else if(game.player[0].score < game.player[1].score){
            p2Score +=1
            $p2Wins.text("Player 2 Wins: "+ p2Score)
        }
        else{
            $alerts.fadeOut(10, function() { 
                $alerts.text("Tie Game, no points awarded! Try Again!")
                $alerts.fadeIn(3000)
                setTimeout(function(){$alerts.fadeOut(1000)}, 4000)
              });
        }
        game.player[0].score = 0
        game.player[1].score = 0
    },
    //AI for the house play. House MUST either beat the player, or bust.
    houseRules: function(){
        game.currentPlayer = game.player[2]
        if(game.player[playIndex].handValue === 21){
                //Player gains score                
                game.currentPlayer = game.player[playIndex]
                game.updateScore()
                //change if new deck
                if (newDeck)
                {
                    playIndex += 1
                    if (playIndex === 2)
                        {
                            playIndex = 0
                            roundCounter +=1
                            $roundCounter.text('Round: ' + roundCounter)
                            game.updateWins()


                        }
                    game.currentPlayer = game.player[playIndex]
                    newDeck = false
                }           
                //Wipe hands
                game.player[0].busted = false
                game.player[1].busted = false
                game.player[2].busted = false
                newDeck = false

                game.player[0].hand = []
                game.player[1].hand = []
                game.player[2].hand = []
                isClickable=false;
                setTimeout(function() {
                    $gameBoard.empty();
                    isClickable=true;
                    $handValue.text('Hand Value: '+ 0)
                  }, 1000);

                return;
        }
        else if(game.currentPlayer.handValue >= game.player[playIndex].handValue)
            {
                console.log('House Wins!')
                //House Wins
                //change players if new deck
                if (newDeck)
                    {
                        playIndex += 1
                        if (playIndex === 2)
                            {
                                playIndex = 0
                                roundCounter +=1
                                $roundCounter.text('Round: ' + roundCounter)
                                game.updateWins()
                            }
                        newDeck = false
                    }
                game.currentPlayer = game.player[playIndex]                
                //Wipe hands
                game.player[0].busted = false
                game.player[1].busted = false
                game.player[2].busted = false   
                game.player[0].hand = []
                game.player[1].hand = []
                game.player[2].hand = [] 
                isClickable=false;
                var $theAlert = $('<h2>House Wins!</h2>')
                $theAlert.prependTo($alerts).hide().slideDown(1000, function() {
                    $alerts.children("h2:first").fadeOut(1000, function(){$(this).remove();
                        $handValue.text('Hand Value: '+ 0);})
                  });
                  setTimeout(function() {

                    $gameBoard.empty();
                    isClickable=true;
                  }, 1500);
                return;
            }           
        else if(game.currentPlayer.handValue < game.player[playIndex].handValue)
            {
                    game.deal();
                    if(game.currentPlayer.busted){
                            //Player gains score
                             
                            game.currentPlayer = game.player[playIndex]
                            game.updateScore()
                            //change if new deck
                            if (newDeck)
                                {
                                    playIndex += 1
                                    if (playIndex === 2)
                                        {
                                            playIndex = 0
                                            roundCounter +=1
                                            $roundCounter.text('Round: ' + roundCounter)
                                            game.updateWins()
                                        }
                                    game.currentPlayer = game.player[playIndex]
                                    newDeck = false
                                }                            
                        //Wipe hands
                        game.player[0].busted = false
                        game.player[1].busted = false
                        game.player[2].busted = false
                        newDeck = false
    
                        game.player[0].hand = []
                        game.player[1].hand = []
                        game.player[2].hand = []
                        isClickable = false;
                        setTimeout(function() {
                            $gameBoard.empty();
                            isClickable=true; 
                            $handValue.text('Hand Value: '+ 0);         
                          }, 1500);

                        return;
                    }
                    else{
                        game.houseRules()
                        return;
                    }
            }
    },
    //Reset the game to a starting state
    reset: function(){
        game.player[0].score=0;
        game.player[1].score=0;
        game.player[0].handValue = 0;
        game.player[1].handValue = 0;
        game.player[2].handValue=0;
        game.player[0].busted = false;
        game.player[1].busted=false;
        game.player[2].busted=false;
        p1Score=0
        p2Score=0
        game.shuffle()
        game.updateScore()
        $p1Wins.text("Player 1 Wins: "+ p1Score)
        $p2Wins.text("Player 2 Wins: "+ p2Score)
        game.currentPlayer=game.player[0]
        roundCounter = 1
        $roundCounter.text('Round : '+ roundCounter)
        $handValue.text('Hand Value: '+ game.currentPlayer.handValue)
    }
}

//add a currentPlayer to the game object, for easier referencing
game.currentPlayer = game.player[0]

 //pre-query the sore fields for easy reference
 var $p1Score = $('#p1-Score')
 var $p2Score = $('#p2-Score')

 //a counter for the current round, and it's jquery field
 var roundCounter = 1
 $roundCounter = $('#round-counter')

 //elements for tracking, displaying, and calculating the wins
 $p1Wins = $('#p1-win-counter')
 $p2Wins = $('#p2-win-counter')
 p1Score = 0
 p2Score = 0

 //Alert Box jquery, for later access
 var $alerts = $('.alert-box')

//Disposable array of shuffled cards, allows us to maintain a "new deck order" and remove cards from play
var shuffleArray = []
//game initialize
game.shuffle()

//jquery of the game board
$gameBoard = $('#game-board')

//jquery of hand value
$handValue = $('#hand-value')

//jquery of all buttons
$hitButton = $('#hitMe')
$stayButton = $('#stayButton')
$resetButton = $('#reset-button')

//event listeners for all buttons

$hitButton.click(function(){
    game.deal()})
$stayButton.click(function(){game.stay()})
$resetButton.click(function(){game.reset()})

//boolean for clickability (used for timers)
var isClickable = true;