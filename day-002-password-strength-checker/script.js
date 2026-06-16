const passwordInput = document.querySelector(".password-input");
const toggleBtn = document.querySelector(".toggle");
const strengthBar = document.querySelector(".strength-bar");
const message = document.querySelector(".message");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  let strength = 0;

  if (value.match(/[a-z]/)) strength++;
  if (value.match(/[A-Z]/)) strength++;
  if (value.match(/[0-9]/)) strength++;
  if (value.match(/[!@#$]/)) strength++;
  if (value.length >= 8) strength++;

  if (value === "") {
    strengthBar.style.width = "0%";
    strengthBar.style.backgroundColor = "transparent";
    message.innerHTML = "Start Typing 😊....";
    return;
  }
  switch (strength) {
    case 1:
      strengthBar.style.width = "20%";
      strengthBar.style.backgroundColor = "#ff4f4f";
      message.innerHTML = "Very weak 😨...";
      break;
    case 2:
      strengthBar.style.width = "40%";
      strengthBar.style.backgroundColor = "#ff914d";
      message.innerHTML = "Weak 😬....";
      break;
    case 3:
      strengthBar.style.width = "60%";
      strengthBar.style.backgroundColor = "#ffc93c";
      message.innerHTML = "Medium 😐....";
      break;
    case 4:
      strengthBar.style.width = "80%";
      strengthBar.style.backgroundColor = "#7cd992";
      message.innerHTML = "Strong 👍....";
      break;
    case 5:
      strengthBar.style.width = "100%";
      strengthBar.style.backgroundColor = "#2ecc71";
      message.innerHTML = "Very Strong 💪....";
      break;
  }
});

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "show";
  }
});
