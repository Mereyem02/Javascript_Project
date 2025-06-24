function speak() {
    const text = document.getElementById("text").value;
    if (!text.trim()) {
        alert("Veuillez entrer du texte !");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-EN'; // Langue française
    speechSynthesis.speak(utterance);
}
