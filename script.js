document.getElementById("bgVideo").playbackRate = 0.5;

// Password Validation
document.getElementById("passwordBtn").addEventListener("click", function () {
    let password = document.getElementById("passwordInput").value;
    let passwordScreen = document.getElementById("passwordScreen");
    let container = document.querySelector(".container");
    let errorMsg = document.getElementById("passwordError");

    if (password === "1234") {
        passwordScreen.style.display = "none";
        container.style.display = "block";
    } else {
        errorMsg.textContent = "Incorrect password! Try again.";
    }
});

// Signal Button
document.getElementById("getSignal").addEventListener("click", function () {
    let button = document.getElementById("getSignal");
    let timerDisplay = document.getElementById("timer");
    let signalOutput = document.getElementById("signalOutput");

    button.disabled = true;
    button.classList.add("disabled");
    timerDisplay.innerHTML = "Analyzing the Market...";
    
    let delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
    
    setTimeout(() => {
        let signal = Math.random() < 0.5 ? "BUY" : "SELL";
        signalOutput.innerHTML = signal;
        signalOutput.className = signal === "BUY" ? "buy" : "sell";
        signalOutput.style.opacity = "1";

        setTimeout(() => {
            signalOutput.style.opacity = "0"; // Hide after 3 seconds
        }, 3000);

        let selectedTime = parseInt(document.getElementById("timeSelect").value);
        let remainingTime = selectedTime;

        let interval = setInterval(() => {
            timerDisplay.innerHTML = `Next Signal in: ${remainingTime}s`;
            remainingTime--;

            if (remainingTime < 0) {
                clearInterval(interval);
                button.disabled = false;
                button.classList.remove("disabled");
                timerDisplay.innerHTML = "";
            }
        }, 1000);
    }, delay);
});
// Toggle Dropdown
document.getElementById("platformBtn").addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the event from closing immediately
    let dropdown = document.getElementById("platformList");
    dropdown.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("platformList");
    if (!document.querySelector(".custom-dropdown").contains(event.target)) {
        dropdown.classList.remove("show");
    }
});

// Handle Selection
document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
        let selectedText = this.textContent.trim();
        let selectedImg = this.getAttribute("data-img");

        document.getElementById("platformIcon").src = selectedImg;
        document.getElementById("platformText").textContent = selectedText;
        document.getElementById("platformSelect").value = this.getAttribute("data-value");

        document.getElementById("platformList").classList.remove("show");
    });
});

// Set Default Value (Quotex)
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("platformIcon").src = "qu.png";
    document.getElementById("platformText").textContent = "QUOTEX";
    document.getElementById("platformSelect").value = "quotex";
});
