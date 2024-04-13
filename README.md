# 👒🏴‍☠️☠🍖Whack-A-Mole (One Piece Theme)👒🏴‍☠️☠🍖

## Flowchart Of Game
![Flowchart](https://github.com/waiwai-phyo/Whack-a-Mole/assets/153723292/40fc63d7-90f4-4df9-a1f6-1d23514a3be0)

## Screenshots 
### Main screen view
<img width="1470" alt="mainScreen" src="https://github.com/waiwai-phyo/Whack-a-Mole/assets/153723292/3cc71d37-5d90-43a9-9857-afd6be7d3970">

### Play view
<img width="1470" alt="Buggy" src="https://github.com/waiwai-phyo/Whack-a-Mole/assets/153723292/0af6a5ce-a175-4040-aa46-b3e0711825af">
<img width="1470" alt="Fruit" src="https://github.com/waiwai-phyo/Whack-a-Mole/assets/153723292/38fd6d9e-204d-4c8c-b034-249710df7337">
<img width="1470" alt="Bomb" src="https://github.com/waiwai-phyo/Whack-a-Mole/assets/153723292/bc6d23e9-3cfb-4b67-a515-814422924db8">

### High score view and game over!
<img width="1470" alt="GameOver" src="https://github.com/waiwai-phyo/Whack-a-Mole/assets/153723292/bdb8e6e1-7c15-4deb-a065-31df2b30ff28">

## Technologies Used
- HTML5
- CSS
- JavaScript

## Introduction
Welcome to the Whack a mole (One Piece Theme)! 
This is an exciting game where you wield a hammer to squash buggys and collect fruits while avoiding deadly bombs. Your goal is to score as many points as possible before the time runs out. Keep an eye on the timer and your score, and aim for the highscore! Let's see how skilled you are at exterminating those pesky buggys!

### Variables

- timeleft : Represents the time left in the game.
- pscore : Represents the player's score.
- maxscore : Represents the highest score achieved.

### Constants 
- Constants in this script include elements like holesdiv, score, time, startbutton, modal, highscore, gameover, and hammer.
- These elements are selected once and reused throughout the script to perform various functions and update the game interface as needed.

### Character Classes

- The "buggy" class represents the buggy character element, the "fruit" class represents the fruit character element, and the "bomb" class represents the bomb character element.

### Key Event Listeners
- mousemove: Listens for mouse movement to move the hammer accordingly.
- mousedown: Listens for mouse button press to activate the hammer.
- mouseup: Listens for mouse button release to deactivate the hammer.
- click: Listens for clicks on game elements to interact with the game.

### Game logic and Key Function 

- Event Listeners: The code sets up event listeners for mouse movement, mouse button presses and releases, and clicks on game elements.

- Random Element Generation: There's a function (getRandomElementType()) to generate random elements (buggy, fruit, or bomb) based on probabilities.

- Adding Elements: The code adds holes and randomly places buggy, fruit, or bomb elements in them.

- Mouse Interaction: When the player clicks on game elements, it checks what element was clicked and updates the score accordingly. If a bomb is clicked, the game is over.

- Timer: There's a timer that counts down from a set time limit. When the time is up, the game is over.

- Game Over: When the game is over (either by clicking on a bomb or when the timer reaches zero), a modal is displayed showing the game over message and the player's score. If the player achieves a new high score, it updates the high score displayed.

- Game Difficulty Increase: As the player's score reaches certain thresholds (in this case, 100), the game gets more challenging by adding fruit dynamically and speeding up the appearance of elements.

- Audio: Various sounds are played during different game events, such as hitting a buggy, clicking on a bomb, or biting a fruit.

### Biggest Challenge 

- Random Element Generation: Generating random game elements (bugs, fruits, bombs) and placing them dynamically within the game grid requires careful coordination to ensure that elements appear at appropriate intervals and positions without overlapping or causing visual glitches.
- Animation Handling: Managing animations for game elements, such as bugs popping up and down or fruits appearing and disappearing, requires coordinating CSS animations with JavaScript logic to ensure smooth transitions and accurate timing.
- Game Balance: Balancing the difficulty curve and pacing of the game to provide an engaging experience for players of varying skill levels is crucial. This involves adjusting parameters such as the frequency of bug appearances, the duration of the game timer, and the scoring system to create a satisfying gameplay loop.
- Audio Integration: Incorporating audio feedback for player actions, such as hitting bugs or fruits, and triggering sound effects for special events like game over or level completion, involves integrating audio files into the game's logic and synchronizing them with gameplay events.

### Key Learnings / Takeaways 

- Handling DOM manipulation and event listeners efficiently for game interactivity.
- Incorporating audio into web applications for a more immersive experience.
- Managing game state and implementing game mechanics such as scoring and time management.
- Understanding and implementing randomness and probabilities in game development.
Dealing with animations and dynamic element creation in JavaScript games.

## Next Step!
- Pause Feature: Add a pause button to allow players to take breaks during gameplay.
- Multiplayer Mode: Implement a multiplayer mode where players can compete against each other in real-time
- Boss Battles: Introduce challenging boss battles at certain intervals or levels for players to overcome.
