const editedTextBtn = document.getElementById("editedTextBtn");
const someText = document.getElementById("someText");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const strong1 = document.createElement("strong");
const strong2 = document.createElement("strong");
const backBtn = document.getElementById("backBtn");

backBtn.style.visibility = "hidden";


editedTextBtn.addEventListener("click", function(e){
    e.preventDefault();

    p1.remove();
    p2.remove();
    p3.remove();
    p4.remove();

    strong1.innerText = "As you can see, I have added a 'Read More' button, a dark/light theme toggle, and a popup that displays the current date and time on my webpage";
    strong2.innerText = "I update my website weekly with new features, as you can also see.";
    
    p1.innerHTML = "<...HE...>";
    p2.append(strong1);
    p3.innerHTML = "<...LP...>";
    p4.append(strong2);

    p1.style.backgroundColor = "red";
    p3.style.backgroundColor = "cyan";

    someText.append(p1);
    someText.append(strong1);
    someText.append(p3);
    someText.append(strong2);

    backBtn.style.visibility = "visible";
})

backBtn.addEventListener("click", function(e){
    e.preventDefault();

    strong1.remove();
    strong2.remove();
    p1.remove();
    p2.remove();
    p3.remove();
    p4.remove();

    p1.innerHTML = "I’m excited to share my work with you! While I don’t have any completed projects just yet, I’m actively working on a few exciting ideas. This page will be regularly updated with my latest creations, so stay tuned for upcoming projects that showcase my skills and passion for data analytics and technology.";
    p2.innerHTML = "In the meantime, feel free to enjoy some CatImages that I’ve curated just for fun. Who doesn’t love a little feline inspiration?";
    p3.innerHTML = "If you're curious about my upcoming work or have any suggestions, don’t hesitate to reach out. Your feedback means a lot to me, and I’d love to connect!";
    p4.innerHTML = "Stay tuned for more updates, and thanks for stopping by!";

    p1.style.backgroundColor = "transparent";
    p3.style.backgroundColor = "transparent";

    someText.append(p1);
    someText.append(p2);
    someText.append(p3);
    someText.append(p4);

    backBtn.style.visibility = "hidden";
})

document.addEventListener('keydown', function (event) {
    const activeElement = document.activeElement;
    const navItems = document.querySelectorAll('.nav-item a');

    let currentIndex = Array.prototype.indexOf.call(navItems, activeElement);

    if (event.keyCode === 39) {
        event.preventDefault();
        if (currentIndex < navItems.length - 1) {
            navItems[currentIndex + 1].focus();
        } else {
            navItems[0].focus();
        }
    }

    
    if (event.keyCode === 37) {
        event.preventDefault();
        if (currentIndex > 0) {
            navItems[currentIndex - 1].focus();
        } else {
            navItems[navItems.length - 1].focus();
        }
    }
});