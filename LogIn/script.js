let formData = {};
const form = document.querySelector('form');
const LS = localStorage;

const LogIn = document.getElementById('LogIn');
const LogOut = document.getElementById('LogOut');

const welcome = document.getElementById('Welcome');
const emailField = document.querySelector('.email');
const passwordField = document.querySelector('.pswd');
const p1 = document.getElementById('p1');
const a1 = document.getElementById('a1');
const welcomeMessage = document.getElementById('welcomeMessage');

// Initial visibility for logout button
LogOut.style.visibility = 'hidden';

// Load saved state on page load
window.onload = () => {
    if (LS.getItem('isLoggedIn') === 'true') {
        formData = JSON.parse(LS.getItem('formData')) || {};
        displayLoggedInState();
    } else if (LS.getItem('formData')) {
        formData = JSON.parse(LS.getItem('formData'));
        populateFormData();
    }
};

// Populate form inputs from localStorage
function populateFormData() {
    for (let key in formData) {
        if (form.elements[key]) {
            form.elements[key].value = formData[key];
        }
    }
}

// Validate form input
function validateForm() {
    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    const at = email.indexOf("@");
    const dot = email.lastIndexOf(".");

    if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
        alert("Not a valid email");
        return false;
    }

    if (password === '') {
        alert("Enter the password");
        return false;
    }

    return true; // Validation passed
}

// Save form data to localStorage on input
form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    LS.setItem('formData', JSON.stringify(formData));
});

// Handle login
LogIn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    alert("Login Successful!");

    LS.setItem('isLoggedIn', 'true'); // Mark the user as logged in
    LS.setItem('formData', JSON.stringify(formData)); // Save form data
    displayLoggedInState();
});

// Handle logout
LogOut.addEventListener('click', (e) => {
    e.preventDefault();

    LS.removeItem('isLoggedIn');
    formData = {}; // Clear local formData
    LS.setItem('formData', JSON.stringify(formData)); // Update localStorage

    form.reset(); // Reset form
    displayLoggedOutState();

    alert("You have been logged out!");
});

// Display logged-in state
function displayLoggedInState() {
    // Hide form elements
    welcome.style.display = 'none';
    emailField.style.display = 'none';
    passwordField.style.display = 'none';
    p1.style.display = 'none';
    a1.style.display = 'none';

    // Show logout button
    LogIn.style.visibility = 'hidden';
    LogOut.style.visibility = 'visible';

    // Display personalized welcome message
    const userEmail = formData.email || "User";
    welcomeMessage.textContent = `Welcome, ${userEmail}!`;
    welcomeMessage.style.display = 'block';
}

// Display logged-out state
function displayLoggedOutState() {
    // Show form elements
    welcome.style.display = 'block';
    emailField.style.display = 'block';
    passwordField.style.display = 'block';
    p1.style.display = 'block';
    a1.style.display = 'block';

    // Hide logout button and welcome message
    LogIn.style.visibility = 'visible';
    LogOut.style.visibility = 'hidden';
    welcomeMessage.style.display = 'none';
}
