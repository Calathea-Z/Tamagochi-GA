//Grabbing the divs around each pupper.
const pupperOneHover = document.querySelector(".boxer");
const pupperTwoHover = document.querySelector(".bulldog");
const pupperThreeHover = document.querySelector(".fox_terrier");
//Grabbing audio permission button & the audio files.
const selectAudioPermission = document.querySelector("#allow_music_button");
const audioPantOne = new Audio(src="../sounds/dog_panting.wav");
const audioPantTwo = new Audio(src="../sounds/squish_breathing.wav");
const audioPantThree = new Audio(src="../sounds/happy_pant.wav");
const audioSuccess = new Audio(src="../sounds/success.wav");
//Grabbing the start button.
const selectPlayButton = document.querySelector("#start");
//Grabbing the user's pupper choice & name selection.
let characterChoice = document.querySelectorAll('input[name="dog_character');
let nameChoice = document.querySelector('#name_form')
let selectedCharacter = " ";
let selectedName = " ";


//pupper one mouse-over effects
pupperOneHover.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#40ff00';
    this.style.opacity = '.7';
    this.style.borderRadius = '10px';
    audioPantOne.play();
});

pupperOneHover.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '';
    this.style.opacity = '';
    this.style.borderRadius = '';
    audioPantOne.pause();
    audioPantOne.currentTime = 0;
})

//pupper two mouse-over effects
pupperTwoHover.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#40ff00';
    this.style.opacity = '.7';
    this.style.borderRadius = '10px';
    audioPantTwo.play();
});

pupperTwoHover.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '';
    this.style.opacity = '';
    this.style.borderRadius = '';
    audioPantTwo.pause();
    audioPantTwo.currentTime = 0;
})

//pupper three mouse-over effects
pupperThreeHover.addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#40ff00';
    this.style.opacity = '.7';
    this.style.borderRadius = '10px';
    audioPantThree.play();
});

pupperThreeHover.addEventListener('mouseleave', function () {
    this.style.backgroundColor = '';
    this.style.opacity = '';
    this.style.borderRadius = '';
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

    selectedName = nameChoice.value;

    for (characterChoice of characterChoice){
        if(characterChoice.checked){
            selectedCharacter = characterChoice.value;
            break;
        }
    }

    function changePage (){
    window.location.href = "./play_game.html";
    }
});
