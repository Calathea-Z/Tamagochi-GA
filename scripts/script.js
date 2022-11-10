//Grabbing begin button on splash page.
const titlePageButton = document.querySelector("#begin");
console.log(titlePageButton);

const dogHover = document.querySelector("#boxer");
console.log(dogHover);

titlePageButton.addEventListener('click', () => {
    window.location.href = "./pages/character_choice.html";
});