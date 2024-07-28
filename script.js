// script.js
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".form-step");
  const optionBtns = document.querySelectorAll(".option-btn");
  const previewContent = document.getElementById("preview-content");
  let answers = {};

  optionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextStepId = btn.getAttribute("data-next");
      const answer = btn.getAttribute("data-answer");
      if (answer) {
        answers[nextStepId] = answer;
      }
      if (nextStepId === "preview") {
        showPreview();
      }
      steps.forEach((step) => step.classList.remove("active"));
      document.getElementById(nextStepId).classList.add("active");
    });
  });

  function showPreview() {
    previewContent.innerHTML = "";
    for (let key in answers) {
      let div = document.createElement("div");
      div.innerHTML = `<p>${answers[key]}</p>`;
      previewContent.appendChild(div);
    }
  }
});
