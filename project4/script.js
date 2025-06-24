const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    answers: ["Paris", "Londres", "Berlin", "Madrid"],
    correct: 0
  },
  {
    question: "Combien font 3 x 4 ?",
    answers: ["6", "12", "9", "15"],
    correct: 1
  },
  {
    question: "Quelle est la couleur du ciel ?",
    answers: ["Rouge", "Vert", "Bleu", "Noir"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const questionObj = questions[currentQuestion];
  document.getElementById("question").innerText = questionObj.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  questionObj.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(index);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(index) {
  const questionObj = questions[currentQuestion];
  if (index === questionObj.correct) {
    score++;
  }
  document.getElementById("score").innerText = "Score: " + score;
  document.querySelectorAll("#answers button").forEach(btn => {
    btn.disabled = true;
  });
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    alert("Quiz terminé ! Score: " + score);
    currentQuestion = 0;
    score = 0;
    document.getElementById("score").innerText = "Score: 0";
    showQuestion();
  }
}

showQuestion();