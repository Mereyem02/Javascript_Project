const imageSelect = document.getElementById("imageSelect");
const puzzleContainer = document.getElementById("puzzle-container");
const shuffleBtn = document.getElementById("shuffle");
const message = document.getElementById("message");

const gridSize = 4;
let pieces = [];
let backgroundImage = "";

const imageUrls = {
  chat: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&h=400",
  chien: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&h=400",
  paysage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=400",
  fleurs: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&h=400"
};

function init() {
  imageSelect.value = "chat";
  backgroundImage = imageUrls["chat"];
  createPuzzle();
  shufflePuzzle();
}

imageSelect.addEventListener("change", () => {
  backgroundImage = imageUrls[imageSelect.value];
  createPuzzle();
  shufflePuzzle();
});

function createPuzzle() {
  pieces = [];
  for (let i = 0; i < gridSize * gridSize - 1; i++) {
    pieces.push(i);
  }
  pieces.push(null); // case vide
  renderPuzzle();
}

function renderPuzzle() {
  puzzleContainer.innerHTML = "";

  pieces.forEach((val, index) => {
    const div = document.createElement("div");
    if (val === null) {
      div.className = "empty";
    } else {
      div.className = "piece";
      div.style.backgroundImage = `url(${backgroundImage})`;
      const x = (val % gridSize) * 100;
      const y = Math.floor(val / gridSize) * 100;
      div.style.backgroundPosition = `-${x}px -${y}px`;
    }

    div.addEventListener("click", () => handleClick(index));
    puzzleContainer.appendChild(div);
  });
}

function handleClick(index) {
  const emptyIndex = pieces.indexOf(null);
  if (isAdjacent(index, emptyIndex)) {
    [pieces[index], pieces[emptyIndex]] = [pieces[emptyIndex], pieces[index]];
    renderPuzzle();
    if (checkWin()) {
      message.textContent = "🎉 Bravo ! Puzzle complété.";
    }
  }
}

function isAdjacent(i, j) {
  const xi = i % gridSize, yi = Math.floor(i / gridSize);
  const xj = j % gridSize, yj = Math.floor(j / gridSize);
  return Math.abs(xi - xj) + Math.abs(yi - yj) === 1;
}

function shufflePuzzle() {
  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
  }
  renderPuzzle();
  message.textContent = "";
}

function checkWin() {
  for (let i = 0; i < pieces.length - 1; i++) {
    if (pieces[i] !== i) return false;
  }
  return true;
}

init();
shuffleBtn.addEventListener("click", shufflePuzzle);