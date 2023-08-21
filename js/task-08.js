const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки

  const formData = new FormData(loginForm);
  const userData = {};

  formData.forEach((value, name) => {
    userData[name] = value;
  });

  if (userData.email && userData.password) {
    console.log(userData);
    loginForm.reset();
  } else {
    alert("All fields must be filled!");
  }
});

