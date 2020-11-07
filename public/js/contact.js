const form = document.getElementById("contact_form");
const userName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("tel");

console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputs();
});

function checkInputs() {
  let nameValue = userName.value.trim();
  let lastNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  let numberFValue = phoneNumber.value.trim();

  nameValue === ""
    ? setError(userName, "Debes de proporcionar un nombre")
    : setSuccess(userName);

  lastNameValue === ""
    ? setError(lastName, "Debes de proporcionar un apellido")
    : setSuccess(lastName);

  numberFValue === ""
    ? setError(phoneNumber, "Debes de proporcionar un numero telefónico")
    : setSuccess(phoneNumber);

  if (emailValue === "") {
    setError(email, "Debes de proporcionar un email");
  } else if (!isEmail(emailValue)) {
    setError(email, "debes de proporcionar un Email válido");
  } else {
    setSuccess(email);
  }
}

/**
 * @param {HTMLElement} input
 * @param {string} msg
 */

function setError(input, msg) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");

  small.innerHTML = msg

  formControl.className = "form-control error";
}

/**
 * @param {HTMLElement} input
 */

function setSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

/**
 * @param {string} email
 */

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
