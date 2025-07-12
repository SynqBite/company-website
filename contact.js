// Initialize EmailJS with your public key
(function() {
  emailjs.init("DB9uk1hH2PhKTx2MA");
})();

// Disable weekends in date picker
document.addEventListener("DOMContentLoaded", function() {
  const dateInput = document.getElementById("date");
  dateInput.addEventListener("input", function() {
    const selectedDate = new Date(this.value);
    const day = selectedDate.getUTCDay();
    if (day === 0 || day === 6) {
      alert("Please select a weekday (Monday to Friday).");
      this.value = "";
    }
  });
});

// Handle form submission via EmailJS
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_4y45n4h", "template_y8kibgo", this)
      .then(function() {
        alert("Your request has been sent successfully! We'll follow up with you shortly.");
        form.reset();
      }, function(error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send request. Please try again later.");
      });
  });
});
