document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("registration-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // ✅ Trim values to remove extra spaces
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
    
    const email = emailInput.value; 
    const username = usernameInput.value;
    const passwordValue = passwordInput.value;

    let messages = [];
    let isValid = true;
    feedbackDiv.textContent = ""; //to collect error messages

     // Check username
    if (username.length < 3) {
        messages.push("❌ Username must be at least 3 characters long.");
        isValid = false;
    }

    if (password.length < 8) {
        messages.push("❌ Password must have at least 8 characters.");
        isValid = false;
    }

    // Check email
    if (!(email.includes("@") && email.includes("."))) {
        messages.push("❌ Please enter a valid email.");
        isValid = false;
    }

    // ✅ Make feedback visible
        feedbackDiv.style.display = "block";

   
    // Final feedback
    if (!isValid) {
        feedbackDiv.textContent = messages.join("\n");
        feedbackDiv.textContent = "✅ Registration successful!";
        feedbackDiv.style.color = "#28a745"; // Green
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; // Red

    console.log("Form valid:", isValid);
    }
});




    

