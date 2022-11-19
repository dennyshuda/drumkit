const drumLength = document.querySelectorAll(".drum").length;

for (let index = 0; index < drumLength; index++) {
  const drumElement = document.querySelectorAll(".drum")[index];
  drumElement.addEventListener("click", () => {
    console.log(drumElement.innerHTML);
    const keyboard = drumElement.innerHTML;
    makeSound(keyboard);
    buttonAnimation(keyboard);
  });
}

document.addEventListener("keypress", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(keyboard) {
  switch (keyboard) {
    case "w":
      const audioW = new Audio("/sounds/tom-1.mp3");
      audioW.play();
      break;
    case "a":
      const audioA = new Audio("/sounds/tom-2.mp3");
      audioA.play();
      break;
    case "s":
      const audioS = new Audio("/sounds/tom-3.mp3");
      audioS.play();
      break;
    case "d":
      const audioD = new Audio("/sounds/tom-4.mp3");
      audioD.play();
      break;
    case "j":
      const audioJ = new Audio("/sounds/snare.mp3");
      audioJ.play();
      break;
    case "k":
      const audioK = new Audio("/sounds/crash.mp3");
      audioK.play();
      break;
    case "l":
      const audioL = new Audio("/sounds/kick-bass.mp3");
      audioL.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
