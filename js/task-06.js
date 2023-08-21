const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValue = validationInput.value.trim();
  const isValid = inputValue.length === requiredLength;

  if (isValid) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
