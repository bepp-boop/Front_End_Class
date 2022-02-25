function myFunc(){
    document.getElementById("message").innerText = "Hello, world"
}
function validate(){
    let name = document.forms["myForm"]["FirstName"].value;
    let lname = document.forms["myForm"]["LastName"].value;
    let email = document.forms["myForm"]["email"].value;
    let phone = document.forms["myForm"]["phone_number"].value;
    var check_email = /\S+@\S+\.\S+/; 
    var check_phone = /^[0-9]+$/;
    var is_valid = true;
    var message = "";
if (name=="" || lname ==""){
    message += "Please enter something \n";
    is_valid = false;
}  

if (parseInt(name) || parseInt(lname)){
    message += "Name should not have a number \n"
    is_valid= false;
}

if (!check_email.test(email)){
    message += "Please enter email with correct format \n"
    is_valid = false;
}

if (!check_phone.test(phone)|| 5 < phone.length <12){
    message += "Phone number is supposed to be larger than 5 and less than 12 \n"
    is_valid = false;
}

if(!is_valid){
    alert(message);
}
else
    {
    alert("Success")
    }
return is_valid;
}
