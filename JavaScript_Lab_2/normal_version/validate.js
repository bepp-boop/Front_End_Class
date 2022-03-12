
function validate() {
    let name = document.forms["Quiz"]["name"].value;
    let surname = document.forms["Quiz"]["surname"].value;
    let email = document.forms["Quiz"]["email"].value;
    let radioColor = document.forms["Quiz"]["country"].value;
    let radioSport = document.forms["Quiz"]["Fruit"].value;
    let checkboxFood = document.querySelector('input[type=checkbox][name=foodOption]:checked').value;
    var check_email = /\S+@\S+\.\S+/;
    is_true = true;
    message = "";
    if (name == "" || surname == "" || email == "") {
        message += "Name, Surname and Email cannot be empty \n";
        is_true = false;
    }
    if (parseInt(name) || parseInt(surname)) {
        message += "Name and Last name can't have numbers \n";
        is_true = false;
    }
    if (!check_email.test(email)) {
        message += "Invalid format for email \n";
        is_true = false;
    }
    if (radioColor == "") {
        message += "You must choose a color \n";
        is_true = false;
    }
    if (radioSport == "") {
        message += "You must choose a sport \n";
        is_true = false;
    }
    if (checkboxFood = null) {
        alert(checkboxFood);
        message += "You must choose a food \n";
        is_true = false;
    }

    if (!is_true) {
        return alert(message);
    } else {
        results();
    }


}



function results() {
    var points = 0;
    const score = document.getElementById("score");
    const radio1 = document.getElementById("ParisDiv");
    const radio2 = document.getElementById("OrangelDiv");
    const checkbox1 = document.getElementById("kebabDiv");
    let checkboxes = document.querySelectorAll('input[name="sport"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    if (document.getElementById("Paris").checked) {
        points++;
    }
    if (document.getElementById("Orange").checked) {
        points++;
    }
    if (document.getElementById("kebab").checked) {
        points++;
    }
    values.forEach(() => { points++; });
    // if (document.getElementById("rainy").checked) {
    //     points++;
    // }

    radio1.style.backgroundColor = "rgb(116, 249, 17)";
    radio2.style.backgroundColor = "rgb(116, 249, 17)";
    checkbox1.style.backgroundColor = "rgb(116, 249, 17)";
    score.innerHTML = "Your final score is " + points;
}
