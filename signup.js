function SignUpform(event) {
    var elements = event.currentTarget;

    var a = elements[0].value;
    var b = elements[1].value;
    var c = elements[2].value;

    var result = true;

    var emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var pswdCheck = /^(\S*)?\d+(\S*)?$/;

    document.getElementById("msg_email").innerHTML = "";
    document.getElementById("pswd").innerHTML = "";
    document.getElementById("pswdr").innerHTML = "";


    if (a == null || a == "" || !emailCheck.test(a)) {
        document.getElementById("msg_email").innerHTML = "Please enter valid email.";
        result = false;
    }
    if (b == null || b == "" || !pswdCheck.test(b) || b.length <= 8) {
        document.getElementById("pswd").innerHTML = "Password must be at least 8 characters long.";
        result = false;
    }

    if (c == null || c == "") {
        document.getElementById("pswdr").innerHTML = "Password must be at least 8 characters long.";
        result = false;
    }

    else if (c != b) {
        document.getElementById("pswdr").innerHTML = "Passwords do not match";
        result = false;
    }

    if (result == false) {
        event.preventDefault();
    }

    if (result == true) {
        window.location.href = "login.html";
    }

}

/* ******************************************** LOGIN PAGE ******************************************************** */

function LoginForm(event) {


    var elements = event.currentTarget;


    var x = elements[0].value;
    var y = elements[1].value;


    var result = true;


    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var pswd_v = /^(\S*)?\d+(\S*)?$/;


    document.getElementById("email_msg").innerHTML = "";
    document.getElementById("pass_word").innerHTML = "";

    if (x == null || x == "" || !email_v.test(x)) {
        document.getElementById("email_msg").innerHTML = "Enter a valid email (example: abc@yahoo.ca)";
        result = false;
    }

    if (y == null || y == "" || !pswd_v.test(y) || y.length <= 8) {
        document.getElementById("pass_word").innerHTML = "Enter a correct form of password atleast 8 characters long.";
        result = false;
    }


    if (result == false) {
        event.preventDefault();
    }

    if (result == true) {
        window.location.href = "index.html";
    }
}

/* ***************************************************************************************************************** */




/* Search Bar */

function validateForm() {
    var s = document.forms["myForm"]["searchKey"].value;
    if (s == "" || s == null) {
        alert(" Search is empty");
        return false;
    }
}
/* Dynamic Character counter */
function charcountupdate(str) {
    var lng = str.length;
    document.getElementById("charcount").innerHTML = lng + ' out of 15 characters';

    if (lng = "") {
        result = false;
    }
}