//Grabbing pupper one buttons and the div around the button.
const selectPupperOne = document.querySelector("#boxer_button");
const pupperOneHover = document.querySelector(".boxer");
//Grabbing pupper two buttons and the div around the button.
const selectPupperTwo = document.querySelector("#bulldog_button");
const pupperTwoHover = document.querySelector(".bulldog");
//Grabbing pupper three buttons and the div around the button.
const selectPupperThree = document.querySelector("#fox_terrier_button");
const pupperThreeHover = document.querySelector(".fox_terrier");
//Grabbing audio permission button and the audio files.
const selectAudioPermission = document.querySelector("#allow_music_button");
const audioPantOne = new Audio(src="../sounds/dog_panting.wav");
const audioPantTwo = new Audio(src="../sounds/squish_breathing.wav");
const audioPantThree = new Audio(src="../sounds/happy_pant.wav");
const audioSuccess = new Audio(src="../sounds/success.wav");
//Grabbing the information from the name input
let characterNameGrab = document.querySelector("#name_form");
let characterNameValue = characterNameGrab.value;
console.log(characterNameValue);
//Grabbing the start button.
const selectPlayButton = document.querySelector("#start");
//console.log(selectPlayButton);
//Variables for character selection and name selection
let characterChoice = null;


//pupper one mouse-over effects
selectPupperOne.addEventListener('mouseenter', function () {
    pupperOneHover.style.backgroundColor = '#40ff00';
    pupperOneHover.style.opacity = '.7';
    pupperOneHover.style.borderRadius = '10px';
    audioPantOne.play();
});

selectPupperOne.addEventListener('mouseleave', function () {
    pupperOneHover.style.backgroundColor = '';
    pupperOneHover.style.opacity = '';
    pupperOneHover.style.borderRadius = '';
    audioPantOne.pause();
    audioPantOne.currentTime = 0;
})

//pupper two mouse-over effects
selectPupperTwo.addEventListener('mouseenter', function () {
    pupperTwoHover.style.backgroundColor = '#40ff00';
    pupperTwoHover.style.opacity = '.7';
    pupperTwoHover.style.borderRadius = '10px';
    audioPantTwo.play();
});

selectPupperTwo.addEventListener('mouseleave', function () {
    pupperTwoHover.style.backgroundColor = '';
    pupperTwoHover.style.opacity = '';
    pupperTwoHover.style.borderRadius = '';
    audioPantTwo.pause();
    audioPantTwo.currentTime = 0;
})

//pupper three mouse-over effects
selectPupperThree.addEventListener('mouseenter', function () {
    pupperThreeHover.style.backgroundColor = '#40ff00';
    pupperThreeHover.style.opacity = '.7';
    pupperThreeHover.style.borderRadius = '10px';
    audioPantThree.play();
});

selectPupperThree.addEventListener('mouseleave', function () {
    pupperThreeHover.style.backgroundColor = '';
    pupperThreeHover.style.opacity = '';
    pupperThreeHover.style.borderRadius = '';
    audioPantThree.pause();
    audioPantThree.currentTime = 0;
})

//Audio Effects
selectAudioPermission.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#40ff00';
    //console.log(this);
});
selectAudioPermission.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '';
    //console.log(this);
});
selectAudioPermission.addEventListener('click', function () {
    audioSuccess.play();
});

//Play Button Effects
selectPlayButton.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#40ff00';
});
selectPlayButton.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '';
});
selectPlayButton.addEventListener('click', function () {
    audioSuccess.play();
    setTimeout(changePage, 1000);
    function changePage (){
    window.location.href = "./play_game.html";
    }
});
// console.log(characterNameValue);
// if (characterNameValue != ("..Travis Bark-er")){
//     characterNameValue = characterName.value
//     console.log("TEST - " + characterNameValue)
// }else {
//     console.log("FALSE");
// }
