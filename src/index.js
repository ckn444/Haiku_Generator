function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function createPoem(event) {
  event.preventDefault();

  let inputValue = document.querySelector("#input");

  let key = "073da528da745of5bbcaae543e06t78e";
  let context =
    "Please use the English-language Haiku (ELH) style. The haiku does not need to follow 5-7-5 syllable format but must be restricted to 3 lines. Please provide the poem in basic html with each line separated by a <br />, do not add a wrapper. Do not include a title or any images, only provide the 3 lines of the haiku. Ensure to incorporate the user instructions into the poem subject. After the poem, on a new line, add the text '- SheCodes AI' inside a <strong> element";
  let prompt = `Generate a haiku about ${inputValue.value}`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Prompt: ${context}`);
  axios.get(url).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", createPoem);
