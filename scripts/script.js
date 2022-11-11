                                                                //Grabbing begin button on splash page.
const titlePageButton = document.querySelector("#begin");
console.log(titlePageButton);

                                                                //Grabbing audio to play.
const pantSoundHover = document.querySelector(".panting");
console.log(pantSoundHover);

                                                                //Changing button color to green on mouse enter button space.
titlePageButton.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'green';
});

                                                                //Changing button color to o.g. color on mouse leave button space.
titlePageButton.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'goldenrod';
});

                                                                //Linking to next webpage on button click.
titlePageButton.addEventListener('click', () => {
    window.location.href = "./pages/character_choice.html";
});

// titlePageButton.addEventListener('mouseenter', () => {
//     playClip();
// });

// function playClip () {
//     let soundClip = document.querySelector(".panting");
//     console.log(soundClip);
//     soundClip.play();
// }
