const messageInput = document.getElementById("message");
const colorPicker = document.getElementById("colorPicker");
const bgColorPicker = document.getElementById("bgColorPicker");
const emojiSelect = document.getElementById("emojiSelect");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const cardPreview = document.getElementById("cardPreview");

generateBtn.addEventListener("click", () => {
  const msg = messageInput.value.trim();
  if (!msg) {
    alert("Merci d'écrire un message !");
    return;
  }
  const color = colorPicker.value;
  const bgColor = bgColorPicker.value;
  const emoji = emojiSelect.value;

  cardPreview.style.color = color;
  cardPreview.style.backgroundColor = bgColor;
  cardPreview.textContent = emoji + "  " + msg + "  " + emoji;

  downloadBtn.style.display = "inline-block";
});

downloadBtn.addEventListener("click", () => {
  html2canvas(cardPreview).then(canvas => {
    const link = document.createElement("a");
    link.download = "carte-voeux.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});