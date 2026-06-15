const textAreaInput = document.querySelector(".text-input");
const charCount = document.querySelector(".char-count");
const wordCount = document.querySelector(".word-count");
const warning = document.querySelector(".warning");

textAreaInput.addEventListener("input", () => {
  const text = textAreaInput.value;

  const char = text.length;
  const word = text.trim().split(/\s+/).filter(Boolean).length;

  charCount.innerHTML = `Total Characters: ${char} / 200`;
  wordCount.innerHTML = `Word count: ${word}`;

  if (char < 160) {
    warning.style.display = "none";
  } else if (char < 200) {
    warning.style.display = "block";
    warning.style.backgroundColor = "orange";
    warning.innerHTML = "Warning: You are close to the limit.";
  } else {
    warning.style.display = "block";
    warning.style.backgroundColor = "red";
    warning.innerHTML = "Warning: You have reached the limit.";
  }
});
