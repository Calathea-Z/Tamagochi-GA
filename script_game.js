//Declaring global variables. Grabbing user name and pupper selection from previous screen from local memory.
let characterIcon = document.querySelector('#character-icon').src
characterIcon.innerText = characterIcon;
let selectedName = localStorage.getItem('selectedName');
let selectedType = localStorage.getItem('selectedType');
let highScore = 0;
let chosenName = document.querySelector('.age-one').children[0];
let quit = false;
//Grabbing user action buttons.
const feedButton = document.querySelector('#feed');
const playButton = document.querySelector('#play');
const lightsButton = document.querySelector('#lights');
const quitButton = document.querySelector('#quit');
const muteButton = document.querySelector('#mute');
const playAgainButton = document.querySelector('#again');
//Grabbing UI sections to update stats and score.
let gameScreen = document.querySelector('.game-screen');
let ageScore = document.querySelector('.age-two').children[0];
let boredomScore = document.querySelector('.boredom').children[0];
let sleepinessScore = document.querySelector('.sleepiness').children[0];
let hungerScore = document.querySelector('.hunger').children[0];
let highScoreString = document.querySelector('.achievement').children[0];
    highScoreString.innerText = `HIGH SCORE: ${highScore} DOG YEARS`

//setting up pupper stats.
var pupper = {
    type: "",
    name: "",
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 0,
}
pupper.name = selectedName;
pupper.type = selectedType;

//Selects the appropriate pupper icon based on user choice from the previous page.
function chooseCharacterIcon (type){
    chosenName.innerText = (`Name: ${selectedName}`);
    if  (type === "The Boxer"){
        document.querySelector('#character-icon').src = "../images/boxer.png"
            }else if (type === "The Bulldog"){
                document.querySelector('#character-icon').src = "../images/bulldog.png";
            } else {
            document.querySelector('#character-icon').src ="../images/fox_terrier.png";
            }
            return 
    }
chooseCharacterIcon(pupper.type);

//Check if pupper is still alive.
function isAlive () {
 if (pupper.boredom >= 20 || pupper.hunger >= 20 || pupper.sleepiness >= 20 || quit === true) {
    return false}
    else {
        return true;
    };
 };
function pupperChange() {
    hungerIncrease();
    sleepinessIncrease();
    boredomIncrease();
    ageIncrease();
    updateScores ();
}
buttonClicks();
    
//Increases the pupper hunger value by a random value between 0 and 2 each interval.
function hungerIncrease() {
   let randomInt = Math.floor((Math.random() * 3));
   console.log(randomInt);
   pupper.hunger += randomInt;
   console.log(`HUNGER: ${pupper.hunger}`);
}
//Increases the pupper sleepiness value by 1 each interval. 
function sleepinessIncrease() {
    pupper.sleepiness += 1;
    console.log(`SLEEP: ${pupper.sleepiness}`);
 }
 //Increases the pupper boredom value by a random value between 0 and 4 each interval. 
 function boredomIncrease(){
    let randomInt = Math.floor((Math.random() * 5));
    pupper.boredom += randomInt;
    console.log(`BOREDOM: ${pupper.boredom}`)
 }
//Increases the pupper age by 7 dog years (1 human year) each interval.
function ageIncrease() {
    pupper.age += 7
    console.log(`AGE: ${pupper.age} DOG YEARS`)
 }

 //Updates the scores
function updateScores() {
    ageScore.innerText = `AGE: ${pupper.age} DOG YEARS` 
    boredomScore.innerText  = `BOREDOM: ${pupper.boredom}`
    sleepinessScore.innerText = `SLEEPINESS: ${pupper.sleepiness}`
    hungerScore.innerText = `HUNGER: ${pupper.hunger}`
 }
 //Houses all button functions
function buttonClicks() {
//Button for user to feed the pupper.
 feedButton.addEventListener('click', () => {
        if(pupper.hunger >= 1){
            pupper.hunger -=1;
            console.log(`FEED BUTTON WORKS: ${pupper.hunger}`);
            }
 });
//Button for user to play with pupper.
 playButton.addEventListener('click', () => {
        if(pupper.boredom >= 1){
            pupper.boredom -=1;
            console.log(`PLAY BUTTON WORKS: ${pupper.boredom}`);
            }
 });
 //Button for user to turn off the lights.
 lightsButton.addEventListener('click', () => {
        if(pupper.sleepiness >= 6){
            gameScreen.style.backgroundImage = 'url("../images/night_time.png")';
            gameScreen.style.border = 'solid black 10px';
            gameScreen.style.opacity = '.8';
            pupper.sleepiness = Math.floor(pupper.sleepiness / 3);
            setTimeout(function (){
            gameScreen.style.backgroundImage = '';
            gameScreen.style.border = '';
            gameScreen.style.opacity = '';
            }, 5000);
            console.log(`LIGHT BUTTON WORKS: ${pupper.sleepiness}`)
        }
 });
//Button so user can mute the music. 
 muteButton.addEventListener('click', () => {
    let sound = document.querySelector('#theme');
    sound.muted = !sound.muted;
 });
//Button so user can quit game.
quitButton.addEventListener('click', () => {
    quit = true;
    let sound = document.querySelector('#theme');
    sound.muted = !sound.muted;
});
//button so user can play again
playAgainButton.addEventListener('click', () => {
    quit = false;
    pupper.boredom = 0
    pupper.sleepiness = 0;
    pupper.hunger = 0;
    console.log(pupper);
    gameLoop();
});
}

 //Runs game loop
 function gameLoop () {
   let time = setInterval(function(){
    pupperChange();
            if(isAlive() === false){
                console.log("GAME OVER");
                clearInterval(time);
                    if(highScore < pupper.age){
                      highScore = pupper.age
                      console.log(`FINAL: ${pupper.age}`);
                      highScoreString.innerText = `HIGH SCORE: ${highScore} DOG YEARS`
                     }   
            return;
            }

    }, 3000);
}
gameLoop();
