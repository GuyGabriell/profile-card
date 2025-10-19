// Display current time in milliseconds
const timeEl = document.getElementById("current-time");

function updateTime() {
  timeEl.textContent = Date.now();
}

// Set initial time
updateTime();

// Optional: update every second
setInterval(updateTime, 1000);
