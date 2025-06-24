function generateQRCode() {
  const container = document.getElementById("qrcode");
  const text = document.getElementById("text").value;

  // Nettoyer le QR code précédent
  container.innerHTML = "";

  if (text.trim() === "") {
    alert("Veuillez saisir un texte ou une URL !");
    return;
  }

  new QRCode(container, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
