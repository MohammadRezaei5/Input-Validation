// variable
const phoneNumber = document.querySelector("input");
const error = document.querySelector("small");

// eventlistener
phoneNumber.addEventListener("input", (e) => {
  const { target } = e;
  error.hidden = true;
  // condition
  if (target.validity.patternMismatch) {
    error.hidden = false;
    phoneNumber.classList.add("error");
  } else {
    phoneNumber.classList.remove("error");
  }
});
