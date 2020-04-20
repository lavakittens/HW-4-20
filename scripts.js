document.querySelector("form").addEventListener("submit", () => {
  console.log("Form submitted!");
});

document.querySelector("#email").addEventListener("focus", () => {
  console.log("You entered the email input!");
});

document.querySelector("#username").addEventListener("blur", () => {
  console.log("You left the username input!");
});

document.querySelector("#email").addEventListener("keyup", () => {
  console.log("You are typing into email input!");
});
