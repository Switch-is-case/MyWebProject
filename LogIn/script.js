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

