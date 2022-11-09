const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.innerText = `ball: ${score}`;
questionEl.innerText = `Shu ${num2} sonini ${num1} ko'paytirsak nechi?`;
const correctAns = num1 * num2;
formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  console.log(userAns, typeof userAns);
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
  9;
});
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
