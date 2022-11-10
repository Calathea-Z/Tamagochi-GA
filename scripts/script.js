//Grabbing begin button on splash page.
const titlePageButton = document.querySelector("#begin");
console.log(titlePageButton);

// const dogHover = document.querySelector("#boxer");
// audio.play();



titlePageButton.addEventListener('click', () => {
    window.location.href = "./pages/character_choice.html";
});

// dogHover.addEventListener('mouseenter', () => {
//     const audio = document.getElementById("dog_panting");
//     audio.Play();
// });