let currentLog = 0;
const correctPassword = "Scene_Studios";
const typingSpeed = 30; // lower = faster typing

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    error.classList.remove("hidden");
  }
}

function revealNextLog() {
  currentLog++;

  if (currentLog === 1) {
    typeText(
      document.getElementById("log1"),
      "LOG 01: The mascot was never decommissioned."
    );
  }

  if (currentLog === 2) {
    typeText(
      document.getElementById("log2"),
      "LOG 02: He is still here. He never left. He is watching us."
    );
  }

  if (currentLog === 3) {
    const symbols = generateSymbols(40);
    typeText(
      document.getElementById("log3"),
      "LOG 03: " + symbols
    );
  }
}

function typeText(element, text) {
  element.classList.remove("hidden");
  element.textContent = "";

  let index = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(index);
    index++;

    if (index >= text.length) {
      clearInterval(interval);
    }
  }, typingSpeed);
}

function generateSymbols(length) {
  const chars = "!@#$%^&*()_+=-{}[]<>?/|~█▒░∆Ø¶§※⌖⌘⌂";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function accessProto() {
  prompt("ENTER PASSWORD:");

  const message = document.getElementById("protoMessage");
  typeText(message, "ACCESS UNAVAILABLE. FILE INCOMPLETE.");
}