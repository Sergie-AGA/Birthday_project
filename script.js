let squares = document.getElementsByClassName("block");
let image = document.getElementById("img");
let blurValue = 48;
image.style.filter = `blur(${blurValue}px)`;

Array.prototype.forEach.call(squares, function (element) {
  function tweakColour(index) {
    let colours = ["blue", "red", "yellow", "purple", "cyan", "grey", "green"];
    let colour = colours[Math.floor(Math.random() * colours.length)];
    element.classList.remove(
      "blue",
      "red",
      "yellow",
      "purple",
      "cyan",
      "grey",
      "green"
    );
    element.classList.add(colour);
  }

  let intervalID = setInterval(tweakColour, 2000);

  element.addEventListener("click", () => {
    blurValue--;
    image.style.filter = `blur(${blurValue}px)`;
    element.classList.add("removed");
    clearInterval(intervalID);

    if (blurValue == 0) {
      startParty();
    }
  });
});

function startParty() {
  document.getElementById("title").innerHTML = "FELIZ ANIVERSÁRIO!";
  document.getElementById("body").style.backgroundImage =
    "url(https://media3.giphy.com/media/1lI97corSEnZu/200.gif)";

  for (let index = 1; index <= 8; index++) {
    setTimeout(() => {
      document.getElementById(`party${index}`).classList.remove("invisible");
    }, 2000 * index);
  }
}
