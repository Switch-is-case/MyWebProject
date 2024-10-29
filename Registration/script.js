function validateForm(){
    var name = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["pswd"].value;
    var passwordcnf = document.forms["myForm"]["pswdcnf"].value;

    if(name == ''){
        alert("enter the name");
        return false;
    }

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

    if(passwordcnf == ''){
        alert("repeat the password");
        return false;
    }
    if(password == passwordcnf){
        alert("Password is not the same");
        return false;
    }
}  
var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }