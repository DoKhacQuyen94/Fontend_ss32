function validateEmail() {
  let email = document.getElementById("emailInput").value.trim();
  let message = document.getElementById("message");

  if (!email.includes("@")) {
    message.textContent = "Email không hợp lệ!";
    message.className = "invalid";
    return;
  }

  let parts = email.split("@");
  if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
    message.textContent = "Email không hợp lệ!";
    message.className = "invalid";
    return;
  }

  let domainParts = parts[1].split(".");
  let lastPart = domainParts[domainParts.length - 1];
  if (lastPart !== "com" && lastPart !== "vn") {
    message.textContent = "Email không hợp lệ!";
    message.className = "invalid";
    return;
  }

  message.textContent = "Email hợp lệ!";
  message.className = "valid";
}
