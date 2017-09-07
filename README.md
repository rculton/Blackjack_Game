## VS Blackjack
A 2 player game project

## Technologies Used
### Javascript
This was used to run all of the game logic. Everything from what's in the players hand, to how the dealer will try to beat the player, is done entirely in the javascript

### jQuery
This was used for the DOM manipulation, and for most changes to the graphics. Text alerts (in the bottom right area) are created and removed, the cards are added to and taken from the play area, and all of the score displays are handled with jQuery

### HTML
This was used to create the static skeleton for the project. Most everything is divided into div tags for standardization. It also makes relative sizing easier since they can share CSS properties without needing extra classes

### CSS
This was used to style the visuals. vw, vh, and percentages are used in tandem to make the board mostly scalable.


#### Images Preloader
I used an image preloading code snippet which I found [here](https://stackoverflow.com/a/476681), I used this to address the issue with image load time. It's a function that you pass a list of image addresses, and it stores them in the browser cache. When the images are later appended to an area in the DOM, they show up much quicker since they already exist somewhere.

```javascript

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}
```


## Approach Taken
The project was broken down into 3 major phases.

#### Phase 1: Game logic
This phase primarily focused on making the rules of blackjack function **WITHOUT** any css or html to support it. This was to insure that the logical structure of the game was sound before we added any DOM manipulation, or had to worry about the graphical interface.

#### Phase 2: Graphics
This phase focused on building an interface for the player, so they could see visual representations of the game logic. This added the board the cards, DOM manipulation, message-based feedback on events,  and clickable controls

#### Phase 3: Cleanup
This phase was focused on trying to optimize code, and change comments into more readable sentences, rather than loosely descriptive keyword phrases. The primary goal of this phase is to add longevity to the projects life, giving easier opportunity for anyone to return to it and change things

## Installation Instructions
This game requires minimal setup. You should only need to visit the github pages site [rculton.github.io/Blackjack_Game](rculton.github.io/Blackjack_Game). If you download the game, you MUST make [This version of jQuery](https://code.jquery.com/jquery-3.2.1.min.js) available to the HTML in the js folder, as it is used to manipulate the DOM

## Unsolved Problems
1. Alerts do not always properly size for mobile browsers

## Planned Additions
1. Players 1 and 2 resolving their hands before any deck action. This will make games faster and more engaging.
2. Restructure of play-field and cards to permit more on screen at a time
3. 5-Card Draw rules (draw 5 cards without busting and you win)
4. Split Hand rules
5. True-blackjack option (only face+ace is an unbeatable 21, and aces are either all high or all now for the hand)
6. Card Counting AI
7. Entirely different layout for mobile
8. No-Tie option, per-hand (If there's a tie, whoever has the lowest number of cards in their hand, or has the highest face card wins)
9. No-Tie option, per-round (Players 1 and 2 will go again until one person gets one point.)
10. Currency! Lose money for fake!
11. Cash-Out option. Give the game an end with a grand-total score based on currency. Track how much each player lost or won from the house!

## How To Play
1. Players will alternate every time the deck runs out of cards. It's a competition to see who can beat the dealer more times!
2. Players can beat the dealer if they score higher than the dealer, the dealer busts, or the player scores any kind of 21! Unlike normal blackjack, there are more win options to add incentives to risking
3. Players do not have to choose if all their aces are high or low. They will change automatically and individually based on if you would have busted. Take risks if you want to be the winner
4. Click the hit button to add cards to your hand
5. Hit the stay button if you want to keep the cards you already have
6. If you want to start your competition all over, hit the reset button at the bottom to play from a fresh start
7. There is no final end to the game. You can keep playing "just one more round" for as long as you want.

## Trello
This project was developed using trello. User Stories were created to help target work flow and build features. You can find the trello board [here](https://trello.com/b/t0QLkrbU/blackjack).

## Missing Commits???
During the process of making this project, I ran into an issue with pushing to my github repository. I worked around this by copying the project and putting it into a new folder. The old commits are visible in the "Missing Commits" folder, or [here](https://github.com/rculton/blackjack-game/commits/master) in the original project. 


## Closing Notes
Thank you for taking the time to check out my project. This is my first major project as a web developer, and I'm just learning the ropes of DOM manipulation and javascript. If you have any feedback send it to rculton@protonmail.com

This code is open source, so if you're making your own project and see something in my code you think might help, feel free to use it. 