// script.js
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const toggleSignup = document.getElementById("toggleSignup");
  const errorMessage = document.getElementById("errorMessage");

  // Toggle between login and signup forms
  toggleSignup.addEventListener("click", function(event) {
      event.preventDefault();
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      errorMessage.innerText = "";
  });

  // Submit login form
  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      // Implement login functionality here
      // For example, you can send a request to a server to verify credentials
      // Display error message if login fails
      errorMessage.innerText = "Login functionality not implemented";
  });

  // Submit signup form
  signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;
      // Implement signup functionality here
      // For example, you can send a request to a server to create a new account
      // Display error message if signup fails
      errorMessage.innerText = "Signup functionality not implemented";
  });
});
