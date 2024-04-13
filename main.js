// script.js
const holesdiv = document.querySelector(".holes");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const startbutton = document.querySelector(".modal button");
const modal = document.querySelector(".modal");
const highscore = document.querySelector(".highscore");
const gameover = document.querySelector(".display h2");
const hammer = document.querySelector(".hammer");

let timeleft;
let pscore = 0; //player score
let maxscore = 0; //high score

// Function to get a random element type (buggy or fruit)
function getRandomElementType() {
  // Generate a random number between 0 and 9
  const randomNumber = Math.floor(Math.random() * 10);
  // Assign element type based on random number
  if (randomNumber < 8) {
    // 80% chance to return "buggy"
    return "buggy";
  } else {
    // 20% chance to return "fruit"
    return "fruit";
  }
}

// Function to add fruit dynamically
function addFruit() {
  let fruitHoles = document.querySelectorAll(".hole .fruit");
  if (fruitHoles.length === 0) {
    for (let i = 0; i < 3; i++) {
      let holeIndex = Math.floor(Math.random() * 9);
      let hole = document.querySelectorAll(".hole")[holeIndex];
      let fruit = document.createElement("img");
      fruit.classList.add("fruit");
      fruit.src = "./img/fruit.png";
      fruit.setAttribute("name", "fruit");
      hole.appendChild(fruit);
    }
  }
}

//Function to add audio when clicking on the buggy
function hitBuggyAh() {
  const buggyAh = new Audio("./audio/ah.mp3"); //Path to buggy sound file
  // buggyAh.volume = volume;
  buggyAh.play();
}

function biteFruit() {
  const biteFruitAudio = new Audio("./audio/bite.mp3");
  // biteFruitAudio.volume = volume;
  biteFruitAudio.play();
}

function playMainAudio(volume) {
  const mainAudio = new Audio("./audio/onepiece.mp3");
  mainAudio.loop = true; // Set loop property to true
  mainAudio.volume = volume; // Set the volume
  mainAudio.play();
}

function playHitBomb(volume) {
  const hitBomb = new Audio("./audio/explosion.mp3");
  hitBomb.volume = volume; // Set the volume
  hitBomb.play(); 
}

// Add holes and randomly place buggy, fruit, or bomb
for (let i = 1; i <= 9; i++) {
  let hole = document.createElement("div");
  hole.classList.add("hole");
  holesdiv.appendChild(hole);

  // Create and add pile (barrel) image
  let pile = document.createElement("img");
  pile.classList.add("pile");
  pile.src = "./img/barrel.png";
  hole.appendChild(pile);

  // Randomly select element type (buggy, fruit, or bomb)
  let elementType;
  const randomNum = Math.random();
  if (randomNum < 0.6) {
    elementType = "buggy"; // 60% chance for buggy
  } else if (randomNum < 0.8) {
    elementType = "fruit"; // 20% chance for fruit
  } else {
    elementType = "bomb"; // 20% chance for bomb
  }

  // Create and add the selected element
  let element = document.createElement("img");
  element.classList.add(elementType);
  element.src = `./img/${elementType}.png`;
  element.setAttribute("name", elementType);
  hole.appendChild(element);
}


document.addEventListener("mousemove", (e) => {
  hammer.style.left = e.pageX + "px";
  hammer.style.top = e.pageY + "px";
});

document.addEventListener("mousedown", () => {
  hammer.classList.add("active");
});

document.addEventListener("mouseup", () => {
  hammer.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("buggy")) {
    // Increment score if the player hits a buggy
    pscore += 5;
    score.textContent = pscore;
    hitBuggyAh(); //play the buggy hit

    // Increase timer by 5 seconds when the player hits a buggy
  } else if (e.target.classList.contains("fruit")) {
    // Increase timer by 10 seconds when the player hits a fruit
    timeleft += 5;
    time.textContent = timeleft;
    biteFruit();
    // Do not change the score when hitting a fruit
  } else if (e.target.classList.contains("bomb")) {

    // Game over if the player clicks on a bomb
    gameover.style.visibility = "visible";
    modal.classList.remove("modalclose");
    playHitBomb(1.0);

    // Update high score if necessary
    if (pscore > maxscore) {
      maxscore = pscore;
      highscore.textContent = maxscore;
    }
  } else {
    // Decrement score if the player misses hitting a buggy, fruit, or bomb
    pscore -= 5; // You can adjust the points deducted as needed
    // Ensure the score doesn't go below 0
    pscore = Math.max(0, pscore);
    score.textContent = pscore;
  }
});

//start button
startbutton.addEventListener("click", () => {
  modal.classList.add("modalclose");
  timeleft = 30;
  pscore = 0;
  score.textContent = pscore;
  time.textContent = timeleft;

  // Declare the variable countdown
  let timer = setInterval(() => {
    time.textContent = timeleft;
    if (timeleft === 0) {
      gameover.style.visibility = "visible";
      modal.classList.remove("modalclose");

      // Update high score
      if (pscore > maxscore) {
        maxscore = pscore;
        highscore.textContent = maxscore;
      }

      clearInterval(timer);
    } else {
      timeleft--;
      time.textContent = timeleft < 10 ? "0" + timeleft : timeleft;

      const face = document.querySelectorAll(".buggy, .fruit, .bomb");
      let chooseface = Math.floor(Math.random() * face.length);

      face[chooseface].style.pointerEvents = "all";
      face[chooseface].style.animation = "faceup 2s ease";
      face[chooseface].addEventListener("animationend", () => {
        face[chooseface].style.pointerEvents = "all";
        face[chooseface].style.animation = "facedown 2s ease";
        face[chooseface].addEventListener("animationend", () => {
          face[chooseface].style.pointerEvents = "none";
        });
      });

      // Increase mole speed when player hits 100 score
      if (pscore >= 100) {
        addFruit(); // Add fruit dynamically
        clearInterval(timer); // Stop current timer

        // Decrease interval to make elements appear faster
        timer = setInterval(() => {
          time.textContent = timeleft;
          if (timeleft === 0) {
            gameover.style.visibility = "visible";
            modal.classList.remove("modalclose");

            // Update high score
            if (pscore > maxscore) {
              maxscore = pscore;
              highscore.textContent = maxscore;
            }

            clearInterval(timer);
          } else {
            // Decrement the value of timeleft by 1
            timeleft--;
            time.textContent = timeleft < 10 ? "0" + timeleft : timeleft;

            const face = document.querySelectorAll(".buggy, .fruit, .bomb");
            let chooseface = Math.floor(Math.random() * face.length);

            face[chooseface].style.pointerEvents = "all";
            face[chooseface].style.animation = "faceup 1s ease"; // Faster animation
            face[chooseface].addEventListener("animationend", () => {
              face[chooseface].style.pointerEvents = "all";
              face[chooseface].style.animation = "facedown 1s ease"; // Faster animation
              face[chooseface].addEventListener("animationend", () => {
                face[chooseface].style.pointerEvents = "none";
              });
            });
          }
        }, 800); // Adjust interval to make elements appear faster
      }
    }
  }, 1000);
});

// Play the main page audio when the window is fully loaded
window.addEventListener("load", () => {
  // Play main audio with volume set to 0.3 (30%)
  playMainAudio(0.4); 
});
