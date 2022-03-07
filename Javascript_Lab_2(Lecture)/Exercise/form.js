function test() {
    alert("Something")
}
function validate() {
    let input = document.forms["myforms"]["password"].value;
    var message = "";
    var is_valid = true;
    if (input == "") {
        message += "Please enter something \n";
        is_valid = false;
    }
    if (5 < input.length < 12) {
        message += "message needed to be between 5 and 12 characters \n"
        is_valid = false;
    }

    if (!(/\d/.test(input))) {
        message += "You need to have one digit \n"
        is_valid = false;
    }
    if (!(/[a-zA-Z]/.test(input))) {
        message += "You need to have a uppercase and lowercase letter"
        is_valid = false;
    }


    if (!is_valid) {
        alert(message);
    }
    else {
        alert("Success")
    }
}