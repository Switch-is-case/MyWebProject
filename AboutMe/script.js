
const dateTimeBtn = document.getElementById("dateTimeBtn");
const dateTimePopup = document.getElementById("dateTimePopup");
const closeBtn = document.querySelector(".closeBtn");
const currentDateTime = document.getElementById("currentDateTime");
const bodyElement = document.getElementById("body");
const lightThemeBtn = document.getElementById("lightThemeBtn");
const darkThemeBtn = document.getElementById("darkThemeBtn");

const lightBackground = "url('https://i.pinimg.com/originals/b8/2f/28/b82f28a7e9c8fcb3868d3d94652c107c.gif')";


const darkBackground = "url('https://i.pinimg.com/originals/4b/f9/9e/4bf99e54d7154f1ee5d2ef3482381555.gif')";


function formatDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return now.toLocaleDateString('en-US', options);
}

function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    switch (true) {
        case (hour < 12):
            greeting = "Good morning";
            break;
        case (hour < 18):
            greeting = "Good afternoon";
            break;
        default:
            greeting = "Good evening";
            break;
    }

    return greeting;
}


lightThemeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    bodyElement.style.backgroundImage = lightBackground;
    bodyElement.style.color = "#000";
});


darkThemeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    bodyElement.style.backgroundImage = darkBackground;
    bodyElement.style.color = "#fff";
});


dateTimeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const greeting = getGreeting();
    currentDateTime.textContent = `${greeting}! The current date and time is: ${formatDateTime()}`;
    dateTimePopup.style.display = "block";
    timeInterval = setInterval(function() {
        const greeting = getGreeting();
        currentDateTime.textContent = `${greeting}! The current date and time is: ${formatDateTime()}`;
    }, 1000);
});


closeBtn.addEventListener("click", function() {
    dateTimePopup.style.display = "none";
    clearInterval(timeInterval);
});


window.addEventListener("click", function(event) {
    if (event.target === dateTimePopup) {
        dateTimePopup.style.display = "none";
        clearInterval(timeInterval);
    }
});
