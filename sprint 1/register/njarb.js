// Get form and input elements
const form = document.getElementById("signupForm");

const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const privacy = document.getElementById("privacy");

// Get error spans
const emailError = document.getElementById("emailError");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const privacyError = document.getElementById("privacyError");

// Validation functions
function validateEmail() {
  const value = email.value.trim();
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!value) {
    emailError.textContent = "Veuillez entrer votre e-mail.";
    return false;
  } else if (!pattern.test(value)) {
    emailError.textContent = "E-mail invalide.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validateUsername() {
  const value = username.value.trim();
  if (!value) {
    usernameError.textContent = "Veuillez entrer votre nom d'utilisateur.";
    return false;
  } else {
    usernameError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const value = password.value.trim();
  if (!value) {
    passwordError.textContent = "Veuillez entrer votre mot de passe.";
    return false;
  } else if (value.length < 6) {
    passwordError.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  const value = confirmPassword.value.trim();
  if (!value) {
    confirmPasswordError.textContent = "Veuillez confirmer votre mot de passe.";
    return false;
  } else if (value !== password.value.trim()) {
    confirmPasswordError.textContent = "Les mots de passe ne correspondent pas.";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

function validatePrivacy() {
  if (!privacy.checked) {
    privacyError.textContent = "Vous devez accepter la politique de confidentialité.";
    return false;
  } else {
    privacyError.textContent = "";
    return true;
  }
}

// Validate on blur (when leaving the input)
email.addEventListener("blur", validateEmail);
username.addEventListener("blur", validateUsername);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);
privacy.addEventListener("change", validatePrivacy);

// Optional: remove error as soon as user types again
email.addEventListener("input", () => { emailError.textContent = ""; });
username.addEventListener("input", () => { usernameError.textContent = ""; });
password.addEventListener("input", () => { passwordError.textContent = ""; });
confirmPassword.addEventListener("input", () => { confirmPasswordError.textContent = ""; });

// On submit
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const isValid = validateEmail() && validateUsername() && validatePassword() && validateConfirmPassword() && validatePrivacy();
  if (isValid) {
    form.submit();
  }
});