//grabbing pupper icon
characterIcon = document.querySelector('#character-icon').src
characterIcon.innerText = characterIcon;
console.log(characterIcon);


//Grabbing user name and pupper selection from previous screen from local memory.
let selectedName = localStorage.getItem('selectedName');
let selectedType = localStorage.getItem('selectedType');
//setting up pupper stats.
const pupper = {
    type: "",
    name: "",
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 0
}
pupper.name = selectedName;
pupper.type = selectedType;


//this function selects the appropriate pupper icon based on user choice from the previous page.
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