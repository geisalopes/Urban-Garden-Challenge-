function generateAdvisor(event) {
  event.preventDefault();

  new Typewriter("#advice", {
    strings: "Pothos are easy to take care",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let advisorElement = document.querySelector("#advice-generator-form");
advisorElement.addEventListener("submit", generateAdvisor);

// api key
// bf12f0ob06f7acf048dt44a41aadd939
