function calculerAge() {
    const birthdate = document.getElementById("birthdate").value;
    const resultat = document.getElementById("resultat");

    if (!birthdate) {
        resultat.textContent = "Veuillez entrer une date de naissance.";
        return;
    }

    const birth = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    resultat.textContent = "Vous avez " + age + " ans.";
}
