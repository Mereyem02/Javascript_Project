const emailsInscrits = [];

document.getElementById('subscribe-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const message = document.getElementById('message');
  const email = emailInput.value.trim();

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Reset message & classes
  message.classList.remove('show', 'visible');
  message.textContent = "";

  if (!emailRegex.test(email)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email address.";
    message.classList.add('show', 'visible');
    return;
  }

  if (emailsInscrits.includes(email.toLowerCase())) {
    message.style.color = "red";
    message.textContent = "This email has already been subscribed.";
    message.classList.add('show', 'visible');
    return;
  }

  emailsInscrits.push(email.toLowerCase());

  message.style.color = "green";
  message.textContent = "Thank you for subscribing!";
  message.classList.add('show', 'visible');
  emailInput.value = '';

  setTimeout(() => {
    message.classList.remove('show', 'visible');
    message.textContent = "";
  }, 3000);
});
