const timeElement = document.getElementById("time");
if (timeElement) {
  function updateTime() {
    timeElement.textContent = Date.now();
  }
  updateTime();
  setInterval(updateTime, 1000);
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("success");

    const nameError = document.getElementById("error-name");
    const emailError = document.getElementById("error-email");
    const subjectError = document.getElementById("error-subject");
    const messageError = document.getElementById("error-message");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.style.display = "none";

    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Full name is required.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent =
        "Please enter a valid email (e.g., name@example.com).";
      isValid = false;
    }

    if (subjectInput.value.trim() === "") {
      subjectError.textContent = "Subject is required.";
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters long.";
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = "Your message has been sent successfully!";
      successMessage.style.display = "block";

      nameInput.value = "";
      emailInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    }
  });
}
