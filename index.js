function displayAdvice(response) {
  new Typewriter("#advice", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAdvisor(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bf12f0ob06f7acf048dt44a41aadd939";
  let context =
    "You're a plant expert and love writing short advices. Your mission is to generate a short piece of advice, in basic HTML. Don't include a title in the advice. Sign the advice with 'Your Garden Advisor' inside a <strong/> element, only at the end of the advice. Make sure you follow the user instructions";
  let prompt = `Generate an advice on ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let adviceElement = document.querySelector("#advice");
  adviceElement.innerHTML = `<div class="generating">🪴 Generating an advice for you...</div>`;

  axios.get(apiUrl).then(displayAdvice);
}

let advisorElement = document.querySelector("#advice-generator-form");
advisorElement.addEventListener("submit", generateAdvisor);

window.addEventListener("load", function () {
  if ("scrollBehavior" in document.documentElement.style) {
    document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
  } else {
    document.querySelector("#top").scrollIntoView();
  }
});
