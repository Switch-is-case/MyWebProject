const form = document.getElementById('form');
const result = document.getElementById('result');

//object methods in js
const person = {
    name : "Kazybek",
    surname : "Seitkazy",
    age : 19,

    fullname : function(){
        fullName = this.name + " " + this.surname;
        return fullName;
    }
}

console.log(person.fullname());

//Arrays and loops in js
var persons = ["Kazybek", "Sultanbay", "Baktiar"];
var chance = 0;
var i = 0;
while(chance !=3){
    console.log(persons[i]);
    i++;
    chance++;
}

//Higher-order functions in js
var ages = [12, 25, 22, 30, 44, 9, 42, 36, 62, 51, 20, 18, 21, 38];
let canDrinkEnergy = [];
for(let i = 0; i <ages.length; i++){
    if(ages[i] >= 21){
        canDrinkEnergy.push(ages[i]);
    }
}

console.log("people who can drink energy " + canDrinkEnergy);



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

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
//play sounds
document.getElementById("playSoundBtn").addEventListener("click", function(event) {
    
    event.preventDefault();
    
    let sound = document.getElementById("notificationSound");
    sound.play();

   
    setTimeout(() => {
      document.getElementById("content-wrapper").submit();
    }, 1000);
  });



