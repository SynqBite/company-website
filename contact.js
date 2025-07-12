// Initialize EmailJS with your public key
(function() {
  console.log("Initializing EmailJS...");
  emailjs.init("DB9uk1hH2PhKTx2MA");
  console.log("EmailJS Initialized.");
})();

// Disable weekends in date picker
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed.");
  
  const dateInput = document.getElementById("date");
  dateInput.addEventListener("input", function() {
    const selectedDate = new Date(this.value);
    const day = selectedDate.getUTCDay();
    console.log("Date selected:", this.value, "(Day:", day, ")");

    if (day === 0 || day === 6) {
      alert("Please select a weekday (Monday to Friday).");
      console.warn("Weekend date selected — resetting input.");
      this.value = "";
    }
  });

  // Handle form submission via EmailJS
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Form submission triggered.");

    emailjs.sendForm("service_4y45n4h", "template_o4cj569", this)
      .then(function(response) {
        console.log("Email successfully sent!", response);
        alert("Your request has been sent successfully! We'll follow up with you shortly.");
        form.reset();
      }, function(error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send request. Please try again later.");
      });
  });
});
