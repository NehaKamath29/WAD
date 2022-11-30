function check() {
    password = document.getElementById("password").value;
    char1 = password.charAt(0)
    let pattern = /\d/g;
    let pattern1 = /[A-Z]/g;
    let pattern2 = /[a-z]/g;
    let pattern3 = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    my_email = document.getElementById("email").value
    clearErrors()



    if (document.getElementById("username").value == "") {

        seterror("name", "*username should not be blank");
        returnval = false;
        document.getElementById("username").focus()
    } else {
        returnval = true;
    }

    if (returnval == true) {

        if (!(my_email.match(mailformat))) {


            seterror("email1", "*You have entered an invalid email address!");
            document.getElementById("email").focus()
            returnval = false;
        } else {
            returnval = true;
        }
    }

    if (returnval == true) {

        if ((document.getElementById("ph").value).length != 10) {

            seterror("ph1", "*Ph no should have 10 digits!");
            returnval = false;
            document.getElementById("ph").focus()

        } else {
            returnval = true;
        }
    }
    if (returnval == true) {

        if (password.length < 8) {

            seterror("password1", "*Ph no should have 10 digits!");
            returnval = false;
            document.getElementById("password").focus()


        } else if (pattern.test(char1)) {

            seterror("password1", "*password cannot start with number!");
            returnval = false;
            document.getElementById("password").focus()
        }

        // } else if (pattern1.test(password) == false) {

        //     seterror("password1", "*password should have atleast one uppercas!");
        //     returnval = false;

        // }
         else if (pattern2.test(password) == false) {

        seterror("password1", "*password should have atleast one lowercase!");
        document.getElementById("password").focus()

        returnval = false;

    } else if (pattern3.test(password) == false) {

        seterror("password1", "*password should have atleast one special character!");
        document.getElementById("password").focus()
        returnval = false;

    } else {
        returnval = true
    }
}

if (returnval == true) {
    window.location = "hotels.html"
}

}

function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}

function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}