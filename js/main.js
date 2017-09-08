//Card ID array, this is a new deck order index to be used with the cards object
    //This array is used with a disposable shuffling array to add and remove cards from a deck
    //All shuffles will start from new deck order
    var cardIDs = []
    for (var i = 0; i< 52; i++){
        cardIDs.push(i)
    }

//List of Cards, these are in New Deck Order and indexed with cardIDs
    //This is really awful to read through, it's literally just cards, so you can assume everything
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
//Variables for game tracking
    var newDeck = false
    var playIndex = 0

 //query the score fields for easy reference
 var $p1Score = $('#p1-Score')
 var $p2Score = $('#p2-Score')

//a counter for the current round, and the corresponding jquery field
 var roundCounter = 1
 $roundCounter = $('#round-counter')

//elements for tracking, displaying, and calculating the wins
 $p1Wins = $('#p1Wins')
 $p2Wins = $('#p2Wins')
 p1TotalWins = 0
 p2TotalWins = 0

//Alert Box jquery, for later access
 var $alerts = $('.alert-box')

//Disposable array of shuffled cards, allows us to maintain a "new deck order" and remove cards from play
 var shuffleArray = []
//jquery of the game board
 $gameBoard = $('.game-board')
 $dealerBoard =$('#dealerZone')
 $playerBoard = $('#playerZone')


//jquery of hand value
 $handValue = $('#hand-value')

//jquery of all buttons are here
 $hitButton = $('#hitMe')
 $stayButton = $('#stayButton')
 $resetButton = $('#reset-button')

//event listeners for all buttons are here
 //hit button deals
 $hitButton.click(function(){game.deal()})
 //stay button stays
 $stayButton.click(function(){game.stay()})
 //reset button resets
 $resetButton.click(function(){game.reset()})

//boolean for clickability, used to prevent players screwing with things they shouldn't
var isClickable = true;

//A function for rapid testing. Removes cards from the deck so we can switch player turns faster,
//check new deck logic, and other such things that require us to empty the deck
function deckNuker(){
    shuffleArray.splice(0,shuffleArray.length-1)
    var audio = new Audio('sounds/poofSound.mp3')
    audio.play()
}

//pre-loader for images for more responsive loading in browser
//Sourced from: https://stackoverflow.com/a/476681
function preload(arrayOfImages) {
 $(arrayOfImages).each(function(){
     $('<img/>')[0].src = this;
 });
}

//pre-load images
preload([
 'images/ace_of_hearts.svg',
  'images/2_of_hearts.svg',
  'images/3_of_hearts.svg',
  'images/4_of_hearts.svg',
  'images/5_of_hearts.svg',
  'images/6_of_hearts.svg',
  'images/7_of_hearts.svg',
  'images/8_of_hearts.svg',
  'images/9_of_hearts.svg',
  'images/10_of_hearts.svg',
  'images/jack_of_hearts.svg',
  'images/queen_of_hearts.svg',
  'images/king_of_hearts.svg',
  'images/ace_of_clubs.svg',
  'images/2_of_clubs.svg',
  'images/3_of_clubs.svg',
  'images/4_of_clubs.svg',
  'images/5_of_clubs.svg',
  'images/6_of_clubs.svg',
  'images/7_of_clubs.svg',
  'images/8_of_clubs.svg',
  'images/9_of_clubs.svg',
  'images/10_of_clubs.svg',
  'images/jack_of_clubs.svg',
  'images/queen_of_clubs.svg',
  'images/king_of_clubs.svg',
  'images/ace_of_diamonds.svg',
  'images/2_of_diamonds.svg',
  'images/3_of_diamonds.svg',
  'images/4_of_diamonds.svg',
  'images/5_of_diamonds.svg',
  'images/6_of_diamonds.svg',
  'images/7_of_diamonds.svg',
  'images/8_of_diamonds.svg',
  'images/9_of_diamonds.svg',
  'images/10_of_diamonds.svg',
  'images/jack_of_diamonds.svg',
  'images/queen_of_diamonds.svg',
  'images/king_of_diamonds.svg',
  'images/ace_of_spades.svg',
  'images/2_of_spades.svg',
  'images/3_of_spades.svg',
  'images/4_of_spades.svg',
  'images/5_of_spades.svg',
  'images/6_of_spades.svg',
  'images/7_of_spades.svg',
  'images/8_of_spades.svg',
  'images/9_of_spades.svg',
  'images/10_of_spades.svg',
  'images/jack_of_spades.svg',
  'images/queen_of_spades.svg',
  'images/king_of_spades.svg'
]);

//The game itself and its methods    
var game = {
    //create a list of players with properties
    //players 1, 2, and the dealer itself
    player: [{
            name: 'Player 1',
            index: 0,
            hand: [],
            handValue: 0,
            score: 0,
            busted: false,
            scoreField: $p1Wins,
        },
        {
            name: 'Player 2',
            index: 1,
            hand: [],
            handValue:0,
            score: 0,
            busted: false,
            scoreField: $p2Wins,
        },
        {
            name:'House',
            index: 2,
            hand: [],
            handValue: 0,
            score: 0,
            busted: false,
            scoreField: $dealerBoard
        }],
    //a function to shuffle our card index    
    //The shuffleArray, which is globally accessable for debugging and testing purposes, will be added to and detracted from
    shuffle: function(){

            var cloneArray = []
            //populate the clone with indexes
            for (var i = 0; i< 52; i++){
                    cloneArray.push(cardIDs[i])
                }
            shuffleArray = []
            var randomCard
            //Populate the deck
            for (var i=0; i<52; i++){
                randomCard = Math.floor(Math.random()*cloneArray.length)
                shuffleArray.push(cloneArray[randomCard])
            }
            var audio = new Audio('sounds/cardShuffle.mp3');
            audio.play();           
    },

    //A function to put cards into players "hands," and display the cards on the board
    deal: function(){
        if(isClickable){
            var audio = new Audio('sounds/cardPlace1.wav');
            audio.play();   
            //add to hand
            game.currentPlayer.hand.push(cards[shuffleArray[0]])
            //display in proper field
            if (game.currentPlayer === game.player[2]){
                        //image is retrieved from hand
                        $('<img id="" src="' +game.currentPlayer.hand[game.currentPlayer.hand.length -1].faceImg+'"/>').hide().prependTo($dealerBoard).fadeIn(500)
                }
            else{
                    //image is retrieved from hand
                //$playerBoard.append('<img id="" src="' +game.currentPlayer.hand[game.currentPlayer.hand.length -1].faceImg+'"/>').hide().fadeIn('fast')
                $('<img id="" src="' +game.currentPlayer.hand[game.currentPlayer.hand.length -1].faceImg+'"/>').hide().prependTo($playerBoard).fadeIn(500)
            }
            //remove from deck
            shuffleArray.splice(0,1)
            //check if deck is now empty
            if (shuffleArray[0] === undefined){
                //if it is, shuffle a new one
                game.shuffle()
                
                   //Alert the player that their round is nearly up! 
                   var $theAlert = $('<h3>Deck is out of cards. New deck in play until end of round! LAST CHANCE!</h3>')
                   $theAlert.prependTo($alerts).hide().fadeIn(500, function() {
                       $(this).fadeOut(2000, function(){$(this).remove();
                           ;})
                     });


                newDeck = true
            }
            //check if the new card has busted the player's hand
            game.checkBust()
            if(game.currentPlayer != game.player[2] && game.currentPlayer.busted){
                    //if it has, and it's not the dealer, set the hand value to 0 and execute the stay function
                    //to trigger dealer AI
                    game.currentPlayer.handValue = 0;

                    game.stay()
                }
            }
    },
    //A function to perform "stay" action. Possible use later when switching between 2 players BEFORE going to house
    stay: function(){
        //Remove the clickability of the buttons to prevent players from
        //manipulating the deck in any way
        isClickable=false;
        //set the player to house
        game.currentPlayer.scoreField.toggleClass("active")
        game.currentPlayer = game.player[2]
        game.currentPlayer.scoreField.toggleClass("active")
            //execute house logic
            game.houseRules();
    },

    //check for hand value, and if it exceeds 21
    checkBust: function(){
        //we need a temporary place to track the current value
        var totalValue = 0;
        for (var i=0; i<game.currentPlayer.hand.length; i++)
            {
                //Build the value using the players hand
               totalValue += game.currentPlayer.hand[i].value
            }
        if (totalValue > 21)
            {
                //if it's over 21, we need to see if there's aces
                //Check if there's an ace and reassign the value to 1
                for (var i=0; i<game.currentPlayer.hand.length; i++)
                    {
                        if(game.currentPlayer.hand[i].rank === 'ace' && game.currentPlayer.hand[i].value === 11){
                            game.currentPlayer.hand[i].value=1
                            //Check again if there is an ace, in this game, aces can be individually high or low
                            //This makes it easier to beat the house, and take risks to out-score your opponent

                            game.checkBust()
                            //Do not return to function, otherwise you'll break everything. 
                            //We don't want to run the code outside of here 100 times!
                            return;
                        }
    
                    }
                //If we didn't find any aces
                isClickable=false;
                //don't let the player hit again
                game.currentPlayer.handValue = totalValue
                $handValue.text('Hand Value: '+ game.currentPlayer.handValue)
                //show them the hand value so they know they busted, and by how much and...

                //Send an alert about the bust
                var $theAlert = $('<h3>'+ game.currentPlayer.name +' BUST!</h3>')
                $theAlert.prependTo($alerts).hide().fadeIn(500, function() {
                    $(this).fadeOut(500, function(){$(this).remove();
                        ;})
                  });
                game.currentPlayer.busted = true;
                game.currentPlayer.handValue = 0;
                //empty their actual hand value (for later math), and set them to a busted state
                return;
            }
        else{
            //If the player has not busted
            game.currentPlayer.handValue = totalValue
            $handValue.text('Hand Value: '+ game.currentPlayer.handValue)
            //update the display of their current hand's value
            game.currentPlayer.busted = false;
            //make sure this is set to false. They should not be able to get here anyways, but this makes sure it's safe
            return;
        }
    },

    //Update the score of the players during round
    updateScore: function(){
            game.currentPlayer.score += 1
            //Whoever the current player is, incriment it by one and update both fields
            $p1Score.text('Current Round Score: ' + game.player[0].score)
            $p2Score.text('Current Round Score: ' + game.player[1].score)
    },

    //Update the win count, and reset the scores
    updateWins: function(){
        //if Player1 has a higher score
        if(game.player[0].score > game.player[1].score){
            //add to their wins
            p1TotalWins +=1
            //and update their text
            $p1Wins.text("Player 1 Wins: "+ p1TotalWins)
            var $theAlert = $('<h3>Player 1 Wins!</h3>')
            $theAlert.prependTo($alerts).hide().fadeIn(1500, function() {
                $(this).fadeOut(1500, function(){$(this).remove();
                    ;})
              });
        }
        //otherwise if Player2 has a higher score
        else if(game.player[0].score < game.player[1].score){
            //update their wins
            p2TotalWins +=1
            //and update their text
            $p2Wins.text("Player 2 Wins: "+ p2TotalWins)
            var $theAlert = $('<h3>Player 2 Wins!</h3>')
            $theAlert.prependTo($alerts).hide().fadeIn(1500, function() {
                $(this).fadeOut(1500, function(){$(this).remove();
                    ;})
              });
        }
        //otherwise if they tie
        else{
            //Nobody gets points
            var $theAlert = $('<h3>Nobody Wins! NO POINTS!</h3>')
            $theAlert.prependTo($alerts).hide().fadeIn(1500, function() {
                $(this).fadeOut(1500, function(){$(this).remove();
                    ;})
              });
        }
        //reset player scores for the next round
            game.player[0].score = 0
            game.player[1].score = 0
            $p1Score.text('Current Round Score: ' + game.player[0].score)
            $p2Score.text('Current Round Score: ' + game.player[1].score)

    },
    //Rules for the house play. House MUST either beat the player, or bust.
    houseRules: function(){
        //set the current player to house by force.

        //if the player has 21, they will be awarded a free win regardless of card combination
        //this means more risks can be taken, and more points can be won by the player
        if(game.player[playIndex].handValue === 21){
            //deactivate dealer indicator
            game.currentPlayer.scoreField.toggleClass("active")
            //again make sure nothing can be clicked
            isClickable=false;
                //Player gains score
                //using the play index, change back to the current player          
                game.currentPlayer = game.player[playIndex]
                //award them score
                game.updateScore()
                //If they finished the deck this round, we need to change players
                if (newDeck){
                    //update the play index
                    playIndex += 1
                    //make sure it's only on Player 1 or Player 2
                    if (playIndex === 2)
                        {
                            playIndex = 0
                            //if Player 2 has finished their turn, we need to update the rounds and wins
                            roundCounter +=1
                            $roundCounter.text('Round: ' + roundCounter)
                            game.updateWins()


                        }
                    //change to the next player
                    game.currentPlayer = game.player[playIndex]
                    //reset the deck flag
                    newDeck = false
                }           
                //Wipe all hands and displayed scores
                    game.handWipe()
                return;
        }
        //Otherwise, if the dealer has MORE points or the SAME points than the active player
        else if(game.currentPlayer.handValue >= game.player[playIndex].handValue)
            {   
                //deactivate dealer indicator
                game.currentPlayer.scoreField.toggleClass("active")
                //again prevent anyone from clicking anything
                isClickable=false;
                //alert that the house won
                var $theAlert = $('<h3>House Wins!</h3>')
                $theAlert.prependTo($alerts).hide().fadeIn(500, function() {
                    $(this).fadeOut(500, function(){$(this).remove();
                        ;})
                  });

                //change players if new deck, same logic as above
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
               
                //Wipe hands, same as above
                game.handWipe()
                return;
            }   
        //otherwise, if the dealer has a LOWER score than the player        
        else if(game.currentPlayer.handValue < game.player[playIndex].handValue)
            {
                    //temporarily set the flag so we can deal
                    isClickable=true;
                    //deal
                    game.deal();
                    //and reset the flag
                    isClickable=false;
                    //if we busted
                    if(game.currentPlayer.busted){
                        game.currentPlayer.scoreField.toggleClass("active")
                            //The player gains score, same as above
                            game.currentPlayer = game.player[playIndex]
                            game.updateScore()
                            //change if new deck, same as above
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
                          
                        //Wipe hands, same as above
                            game.handWipe()

                        //We always return to insure the logic is stopped in a loop
                        return;
                    }
                    //if the house has not busted, we must go through our logic again!
                    else{
                        game.houseRules()
                        //This stops 5000 executions of the same code
                        return;
                    }
            }
    },
    //Reset the game to a starting state.
    //All values are zeroed, the deck is reshuffled, the text is returned to
    // a starting state, and clickability returns
    reset: function(){
        playIndex = 0
        game.player[0].score=-1;
        game.player[1].score=0;
        game.handWipe();
        p1Score=0;
        p2Score=0;
        game.shuffle();
        game.updateScore();
        $p1Wins.text("Player 1 Wins: "+ p1Score);
        $p2Wins.text("Player 2 Wins: "+ p2Score);
        roundCounter = 1;
        $roundCounter.text('Round: '+ roundCounter);
        $handValue.text('Hand Value: '+ game.currentPlayer.handValue);
        $playerBoard.empty();
        $dealerBoard.empty();
        isClickable = true;
    },
    //Wipe the hands for a clean play
    handWipe : function(){

        //Remove all states of players being busted
        game.player[0].busted = false
        game.player[1].busted = false
        game.player[2].busted = false   

        //empty the cards in every hand
        game.player[0].hand = []
        game.player[1].hand = []
        game.player[2].hand = []

        //reset the values of the hands
        game.player[0].handValue = 0
        game.player[1].handValue = 0
        game.player[2].handValue = 0

        //reset the player using the player index + active state
        game.currentPlayer = game.player[playIndex] 
        game.currentPlayer.scoreField.toggleClass("active")
        //Let the cards linger for a little bit, then clear the board and allow clicking to happen again
        setTimeout(function() {
            $playerBoard.empty();
            $dealerBoard.empty();
            $handValue.text('Hand Value: '+ 0)
            isClickable=true;
          }, 1500);

    },
}
//add a currentPlayer to the game object, for easier referencing
game.currentPlayer = game.player[0]

//game initialize
game.shuffle()
game.currentPlayer.scoreField.toggleClass("active")

