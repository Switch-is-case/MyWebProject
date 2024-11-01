let formData = {};
const form = document.querySelector('form');
const LS = localStorage;

const LogIn = document.getElementById('LogIn');
const LogOut = document.getElementById('LogOut');

const welcome = document.getElementById('Welcome')
const email = document.querySelector('.email');
const password = document.querySelector('.pswd');
const p1 = document.getElementById('p1');
const a1 = document.getElementById('a1');

function validateForm(){
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["pswd"].value;

    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");

    if(at<1 || dot<at+2 || dot+2 >= email.length){
        alert("not a valid email");
        return false;
    }

    if(password == ''){
        alert("enter the password");
        return false;
    }
}

LogOut.style.visibility = 'hidden';

function logout() {
  LS.removeItem('formData');

  form.reset();

  LogIn.style.visibility = 'visible';
  LogOut.style.visibility = 'hidden';
}

form.addEventListener('input', function(event){
  formData[event.target.name] = event.target.value;
  LS.setItem('formData', JSON.stringify(formData));
})

if (LS.getItem('formData')){
  formData = JSON.parse(LS.getItem('formData'));
  //console.log('form.elements');
  //form.elements[name];
  for(let key in formData){
    form.elements[key].value = formData[key];
  }  
}

LogIn.addEventListener('click', (e) => {
  e.preventDefault();

  welcome.remove();
  email.remove();
  password.remove();
  p1.remove();
  a1.remove();
  
  LogIn.style.visibility = 'hidden';
  LogOut.style.visibility = 'visible';
})

LogOut.addEventListener('click', logout)
