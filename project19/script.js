const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("fileInput");
const fileNameDisplay = document.getElementById("fileName");

// Clic pour ouvrir la boîte de dialogue de fichier
dropZone.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
  if (fileInput.files.length) {
    fileNameDisplay.textContent = `Fichier : ${fileInput.files[0].name}`;
  }
});

// Gérer le drag & drop
dropZone.addEventListener("dragover", e => {
  e.preventDefault();
  dropZone.classList.add("highlight");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("highlight");
});

dropZone.addEventListener("drop", e => {
  e.preventDefault();
  dropZone.classList.remove("highlight");

  const files = e.dataTransfer.files;
  if (files.length) {
    fileInput.files = files; // Affecte les fichiers à l'input pour consistance
    fileNameDisplay.textContent = `Fichier : ${files[0].name}`;
  }
});
