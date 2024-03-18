function generateAdvisor(event) {
  event.preventDefault();

  //   let adviceElement = document.querySelector("#advice");
  //   adviceElement.innerHTML = "Photos are easy to take care";

  new Typewriter("#advice", {
    strings: "Photos are easy to take care",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let advisorElement = document.querySelector("#garden-advisor-form");
advisorElement.addEventListener("submit", generateAdvisor);
