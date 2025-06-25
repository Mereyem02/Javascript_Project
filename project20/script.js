const passwordInput = document.getElementById('password');
const toggleBtn = document.querySelector('.toggle-password');
const eyeOpenIcon = document.getElementById('eye-open');
const eyeClosedIcon = document.getElementById('eye-closed');

toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  // Basculer les icônes
  eyeOpenIcon.style.display = isPassword ? 'none' : 'block';
  eyeClosedIcon.style.display = isPassword ? 'block' : 'none';

  // Mettre à jour les attributs ARIA pour accessibilité
  toggleBtn.setAttribute('aria-pressed', isPassword);
  toggleBtn.setAttribute('aria-label', isPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
});
