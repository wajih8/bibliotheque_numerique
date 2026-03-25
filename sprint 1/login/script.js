const form = document.getElementById("loginForm");

const email = document.getElementById("email");

const password = document.getElementById("password");


const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");





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


email.addEventListener("blur", validateEmail);

password.addEventListener("blur", validatePassword);



// Optional: remove error as soon as user types again
email.addEventListener("input", () => { emailError.textContent = ""; });

password.addEventListener("input", () => { passwordError.textContent = ""; });


// On submit
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const isValid = validateEmail()  && validatePassword();
  if (isValid) {
    form.submit();
  }
});