##VS Blackjack
A 2 player game project

##Technologies Used
This project uses Javascript for most of the game logic, jQuery for DOM manipulation, HTML for the static board setup, and CSS for the appearance. The CSS utilizes the vw and vh properties to make the board scalable

##Approach Taken
The project was broken down into 3 major phases.

####Phase 1: Game logic
This phase primarily focused on making the rules of blackjack function **WITHOUT** any css or html to support it. This was to insure that the logical structure of the game was sound before we added any DOM manipulation, or had to worry about the graphical interface.

####Phase 2: Graphics
This phase focused on building an interface for the player, so they could see visual representations of the game logic. This added the board the cards, DOM manipulation, message-based feedback on events,  and clickable controls

####Phase 3: Cleanup
This phase was focused on trying to optimize code, and change comments into more readable sentences, rather than loosely descriptive keyword phrases. The primary goal of this phase is to add longevity to the projects life, giving easier opportunity for anyone to return to it and change things

##Installation Instructions
This game requires minimal setup. You should only need to visit the github pages site [rculton.github.io/Blackjack_Game](rculton.github.io/Blackjack_Game). If you download the game, you MUST make [This version of jQuery](https://code.jquery.com/jquery-3.2.1.min.js) available to the HTML in the js folder, as it is used to manipulate the DOM

##Unsolved Problems
1. Slow loading of cards on websites. Problem does not appear in local version
2. Message queueing system sometimes does not erase messages if they are displayed too closely to another message
3. Cards do not properly size for phones. CSS decisions need to be made based on if there's a mobile browser

##How To Play
1. Players will alternate every time the deck runs out of cards. It's a competition to see who can beat the dealer more times!
2. Players can beat the dealer if they score higher than the dealer, the dealer busts, or the player scores any kind of 21! Unlike normal blackjack, there are more win options to add incentives to risking
3. Players do not have to choose if all their aces are high or low. They will change automatically and individually based on if you would have busted. Take risks if you want to be the winner
4. Click the hit button to add cards to your hand
5. Hit the stay button if you want to keep the cards you already have
6. If you want to start your competition all over, hit the reset button at the bottom to play from a fresh start
7. There is no final end to the game. You can keep playing "just one more round" for as long as you want.

##Trello
This project was developed using trello. User Stories were created to help target work flow and build features. You can find the trello board [here](https://trello.com/b/t0QLkrbU/blackjack).

##Missing Commits???
During the process of making this project, I ran into an issue with pushing to my github repository. I worked around this by copying the project and putting it into a new folder. The old commits are visible in the "Missing Commits" folder, or [here](https://github.com/rculton/blackjack-game/commits/master) in the original project. 

##Closing Notes
Thank you for taking the time to check out my project. This is my first major project as a web developer, and I'm just learning the ropes of DOM manipulation and javascript. If you have any feedback send it to rculton@protonmail.com

This code is open source, so if you're making your own project and see something in my code you think might help, feel free to use it. 