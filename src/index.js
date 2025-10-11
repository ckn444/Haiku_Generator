function createPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "hello update the text",
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", createPoem);
