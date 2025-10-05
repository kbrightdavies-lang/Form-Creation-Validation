
const form = document.getElementById("registration-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = emailInput.value; 
    const username = usernameInput.value;
    const passwordValue = passwordInput.value;

    let isValid = true;
    feedbackDiv.textContent = ""; //to collect error messages

     // Check username
    if (username.length < 3) {
        feedbackDiv.textContent += "❌ Username must be at least 3 characters long.\n";
        isValid = false;
    }

    if (password.length < 8) {
        feedbackDiv.textContent += "❌ Password must have at least 8 characters.\n";
        isValid = false;
    }

    // Check email
    if (!(email.includes("@") && email.includes("."))) {
        feedbackDiv.textContent += "❌ Please enter a valid email.\n";
        isValid = false;
    }

    // Final feedback
    if (isValid) {
        feedbackDiv.textContent = "✅ Registration successful!";
    } 

    console.log("Form valid:", isValid);
});




    

