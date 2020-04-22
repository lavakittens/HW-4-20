const uname = document.querySelector("#username");
const email = document.querySelector("#email");

uname.addEventListener("keydown", e => {
  e.preventDefault();
  console.log("User is typing in username");
});

email.addEventListener("keydown", e => {
  e.preventDefault();
  console.log("User is typing in email");
});

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  console.log("Form Submitted!");
  document.querySelector("p").textContent = `${uname.value} - ${email.value}`;
  console.log(document.querySelector("p").textContent);
});
