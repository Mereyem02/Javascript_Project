document.getElementById('subscribe-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const message = document.getElementById('message');

  const email = emailInput.value;

  // Basic email validation
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (emailRegex.test(email)) {
    message.style.color = "green";
    message.textContent = "Thank you for subscribing!";
    emailInput.value = '';
  } else {
    message.style.color = "red";
    message.textContent = "Please enter a valid email address.";
  }
});
