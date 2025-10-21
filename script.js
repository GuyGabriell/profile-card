// Display current time in milliseconds
const timeEl = document.getElementById("current-time");

function updateTime() {
  timeEl.textContent = Date.now();
}

// Set initial time
updateTime();

// Optional: update every second
setInterval(updateTime, 1000);




//contact & about

// const form = document.getElementById("contactForm");
// const successMsg = document.getElementById("success-message");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = form.name.value.trim();
//   const email = form.email.value.trim();
//   const subject = form.subject.value.trim();
//   const message = form.message.value.trim();
//   let valid = true;

//   const errors = {
//     name: document.getElementById("error-name"),
//     email: document.getElementById("error-email"),
//     subject: document.getElementById("error-subject"),
//     message: document.getElementById("error-message"),
//   };

//   // Reset
//   Object.values(errors).forEach((err) => {
//     err.style.display = "none";
//     err.textContent = "";
//   });
//   successMsg.style.display = "none";

//   // Validation rules
//   if (!name) {
//     errors.name.textContent = "Full name is required.";
//     errors.name.style.display = "block";
//     valid = false;
//   }

//   const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
//   if (!email || !emailPattern.test(email)) {
//     errors.email.textContent = "Please enter a valid email.";
//     errors.email.style.display = "block";
//     valid = false;
//   }

//   if (!subject) {
//     errors.subject.textContent = "Subject is required.";
//     errors.subject.style.display = "block";
//     valid = false;
//   }

//   if (!message || message.length < 10) {
//     errors.message.textContent = "Message must be at least 10 characters.";
//     errors.message.style.display = "block";
//     valid = false;
//   }

//   // On success
//   if (valid) {
//     successMsg.textContent = "Your message has been sent successfully!";
//     successMsg.style.display = "block";
//     form.reset();
//   }
// });
