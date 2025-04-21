// Ensure EmailJS SDK is loaded successfully
if (typeof emailjs === "undefined") {
  console.error("EmailJS SDK failed to load.");
} else {
  console.log("EmailJS SDK loaded successfully.");
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  emailjs.init("qdipR1pdhRNvLDzCi");

  // Get the contact form element
  const form = document.getElementById("contact-form");

  // Add event listener to the form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs
      .sendForm("service_a1ezsd7", "template_2ywk4nb", form)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Send failed:", error);
        alert("Failed to send message. Try again later.");
      });
  });
});
