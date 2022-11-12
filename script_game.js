//Declaring global variables. Grabbing user name and pupper selection from previous screen from local memory.
characterIcon = document.querySelector('#character-icon').src
characterIcon.innerText = characterIcon;
let selectedName = localStorage.getItem('selectedName');
let selectedType = localStorage.getItem('selectedType');

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
 if (pupper.boredom >= 10 || pupper.hunger >= 10 || pupper.sleepiness >= 10) {
    return false}
    else {
        return true;
    };
 };
function pupperChange() {
    hungerIncrease();
    sleepinessIncrease();
    boredomIncrease();
}
    
//function to increase the pupper hunger value.
function hungerIncrease() {
   pupper.hunger += 2;
   console.log(`HUNGER: ${pupper.hunger}`);
}
//function to increase the pupper sleepiness value.
function sleepinessIncrease() {
    pupper.sleepiness += 1;
    console.log(`SLEEP: ${pupper.sleepiness}`);
 }
 //function to increase the pupper boredom value.
 function boredomIncrease(){
    pupper.boredom += 3;
    console.log(`BOREDOM: ${pupper.boredom}`)
 }
var time = setInterval(function(){
        pupperChange();
            if(isAlive() === false){
                alert("GAME OVER");
                clearInterval(time);
            return;
        //take to try again page
    }
    }, 1000)